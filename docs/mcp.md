# MCP

## Endpoint

```text
https://agentbits.dev/mcp
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

The MCP endpoint identity is published here for discovery. Tool listings will appear as capabilities are released.
