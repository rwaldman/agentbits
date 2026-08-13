# MCP stdio catalog adapter

Local **stdio** MCP process for registry packaging (Glama release builds, container introspection).

## What this is

- Reads tool names, descriptions, and input schemas from [`../catalog.json`](../catalog.json)
- Answers `initialize` and `tools/list` over stdio
- Tool calls return `HOSTED_ONLY` and point at the production MCP

## What this is not

- Not the hosted Agent Bits implementation
- Not a substitute for `https://agentbits.dev/mcp`
- Not a proxy (`mcp-remote` is intentionally unused)

Production clients should continue using Streamable HTTP:

```json
{
  "mcpServers": {
    "agentbits": {
      "url": "https://agentbits.dev/mcp"
    }
  }
}
```

## Run locally

From the repository root (`rwaldman/agentbits`):

```bash
npm install
node mcp-stdio/server.js
```

Or:

```bash
npm run mcp:stdio
```

## Glama admin build

After claiming the server listing, configure:

| Field | Value |
| --- | --- |
| Build steps | `["npm install --omit=dev"]` |
| CMD arguments | `["node", "mcp-stdio/server.js"]` |
| Env schema | empty object |
| Placeholder parameters | `{}` |

Then **Deploy** (must pass `initialize` + `tools/list`) → **Make Release**.

See [`../docs/mcp-registries.md`](../docs/mcp-registries.md).
