#!/usr/bin/env node
/**
 * Agent Bits registry catalog adapter (stdio MCP).
 *
 * Purpose: let MCP registries (especially Glama) build and introspect a local
 * stdio server from this public repository. Production capability execution
 * remains on the hosted Streamable HTTP MCP at https://agentbits.dev/mcp.
 *
 * This adapter is intentionally not the hosted Agent Bits implementation:
 * it loads tool names/descriptions/schemas from catalog.json and returns a
 * hosted-only response for tool calls.
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOSTED_MCP = "https://agentbits.dev/mcp";
const CATALOG_PATH = join(ROOT, "catalog.json");

function loadCatalog() {
  const raw = readFileSync(CATALOG_PATH, "utf8");
  const catalog = JSON.parse(raw);
  if (!catalog || !Array.isArray(catalog.capabilities)) {
    throw new Error("catalog.json is missing capabilities[]");
  }
  return catalog;
}

function toolDescription(capability) {
  const useWhen = Array.isArray(capability.use_when) ? capability.use_when : [];
  const doNot = Array.isArray(capability.do_not_use_when)
    ? capability.do_not_use_when
    : [];
  const parts = [
    capability.description,
    "",
    "Use when:",
    ...(useWhen.length ? useWhen.map((item) => `- ${item}`) : [`- ${capability.when_to_use}`]),
  ];
  if (doNot.length) {
    parts.push("", "Do not use when:", ...doNot.map((item) => `- ${item}`));
  }
  if (capability.pricing?.type === "paid") {
    parts.push(
      "",
      `Payment: ${capability.pricing.amount} ${capability.pricing.currency} via ${capability.pricing.protocol} on ${(capability.pricing.networks || []).join(", ")}. No account. No API key. No signup.`,
    );
  }
  parts.push(
    "",
    `Registry note: this stdio process is a catalog adapter for MCP registries. Execute tools against the hosted MCP at ${HOSTED_MCP}.`,
  );
  return parts.join("\n");
}

function hostedOnlyResult(toolName) {
  const payload = {
    error: {
      code: "HOSTED_ONLY",
      message:
        "This public repository ships a stdio catalog adapter for MCP registry inspection (schemas + discovery). Capability execution runs on the hosted Agent Bits MCP.",
      tool: toolName,
      hosted_mcp: HOSTED_MCP,
      docs: "https://agentbits.dev/docs/mcp",
    },
  };
  return {
    isError: true,
    content: [
      {
        type: "text",
        text: JSON.stringify(payload, null, 2),
      },
    ],
  };
}

async function main() {
  const catalog = loadCatalog();
  const tools = catalog.capabilities.filter(
    (capability) => capability.type === "tool" && capability.mcp?.tool,
  );

  const server = new Server(
    {
      name: catalog.name || "Agent Bits",
      version: catalog.version || "0.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: tools.map((capability) => ({
      name: capability.name,
      description: toolDescription(capability),
      inputSchema:
        capability.input_schema && typeof capability.input_schema === "object"
          ? capability.input_schema
          : { type: "object", properties: {} },
    })),
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const name = request.params.name;
    const known = tools.some((tool) => tool.name === name);
    if (!known) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                error: {
                  code: "UNKNOWN_TOOL",
                  message: `Unknown tool: ${name}`,
                  hosted_mcp: HOSTED_MCP,
                },
              },
              null,
              2,
            ),
          },
        ],
      };
    }
    return hostedOnlyResult(name);
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack || error.message : error);
  process.exitCode = 1;
});
