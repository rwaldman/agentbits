# Getting started

Agent Bits is a hosted service of machine-readable utilities and datasets for AI agents.

## 1. Identify the service

- Website: https://agentbits.dev
- Agent guide: https://agentbits.dev/for-agents
- MCP: https://agentbits.dev/mcp
- Catalog: https://agentbits.dev/catalog.json
- OpenAPI: https://agentbits.dev/openapi.json

## 2. Discover capabilities

Start with:

- [`../for-agents.md`](../for-agents.md)
- [`../llms.txt`](../llms.txt)
- [`../catalog.json`](../catalog.json)
- [`discovery.md`](./discovery.md)

## 3. Connect MCP

```json
{
  "mcpServers": {
    "agentbits": {
      "url": "https://agentbits.dev/mcp"
    }
  }
}
```

See [`mcp.md`](./mcp.md).

## 4. Invoke HTTP

Use versioned JSON routes under `/v1` and the published OpenAPI document.

See [`api.md`](./api.md).

## 5. Handle payments when required

Paid capabilities return HTTP `402` with x402 payment details. Pay programmatically and retry.

See [`payments.md`](./payments.md).

## Current status

MVP capabilities are published and served live from `agentbits.dev`.
