# MCP

## Endpoint

```text
https://agentbits.dev/mcp
```

## Install / configuration (under a minute)

Add Agent Bits as a remote MCP server:

```json
{
  "mcpServers": {
    "agentbits": {
      "url": "https://agentbits.dev/mcp"
    }
  }
}
```

### Claude Code

Add a remote MCP server pointing at `https://agentbits.dev/mcp` (Streamable HTTP).

### Cursor

Add the same `mcpServers.agentbits.url` entry in Cursor MCP settings / `mcp.json`.

### OpenCode

Configure Agent Bits as a remote MCP HTTP server with URL `https://agentbits.dev/mcp`.

### Cloudflare Agents

The Cloudflare Agents SDK can connect to remote MCP servers and expose their tools to your agent. Point the MCP client at `https://agentbits.dev/mcp`.

### Generic MCP clients

Any client that supports Streamable HTTP MCP can connect to the same URL.

## Transport

Agent Bits uses **Streamable HTTP** MCP.

- MCP clients should connect with JSON-RPC `POST` requests to `/mcp`.
- A bare browser or `curl` `GET` to `/mcp` is informational only and is not the protocol handshake.
- `GET /mcp` also returns an install snippet and client list for discovery.

Example handshake check:

```bash
curl -sS -X POST https://agentbits.dev/mcp \
  -H 'content-type: application/json' \
  -H 'accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"curl","version":"0.0.1"}}}'
```

## Contract

The hosted MCP server exposes the same canonical capabilities as HTTP.

For every tool:

```text
HTTP schema
      ↕
canonical tool schema
      ↕
MCP schema
```

Tool descriptions include retrieval-oriented `use when` / `do not use when` guidance.

## Payments on MCP

Paid MCP tools (for example `countries_bulk`) return a machine-readable x402 payment challenge when unpaid.

- Protocol: x402
- Network: Base (`eip155:8453`)
- Currency: USDC
- No account / API key / signup

See [`payments.md`](./payments.md) and https://agentbits.dev/for-agents.

## What agents should expect

- Stable tool names
- Descriptions optimized for semantic tool selection
- Explicit input schemas
- Machine-readable errors
- Payment challenges for paid capabilities when applicable

## Status

MCP is available at `https://agentbits.dev/mcp` for published tools.
