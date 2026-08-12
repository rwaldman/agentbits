# MCP

## Endpoint

```text
https://agentbits.dev/mcp
```

## Transport

Agent Bits uses **Streamable HTTP** MCP.

- MCP clients should connect with JSON-RPC `POST` requests to `/mcp`.
- A bare browser or `curl` `GET` to `/mcp` is informational only and is not the protocol handshake.

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

There is not a separate business-logic implementation for MCP.

## What agents should expect

- Stable tool names
- Clear descriptions optimized for selection
- Explicit input schemas
- Machine-readable errors
- Payment challenges for paid capabilities when applicable

## Status

MCP is available at `https://agentbits.dev/mcp` for published tools such as `country_lookup` and `countries_bulk`.
