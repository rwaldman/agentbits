# Agent Bits

Machine-readable utilities and datasets for AI agents.

<!-- mcp-name: io.github.rwaldman/agentbits -->

Website: https://agentbits.dev  
MCP: https://agentbits.dev/mcp  
Catalog: https://agentbits.dev/catalog.json  
OpenAPI: https://agentbits.dev/openapi.json  
Official MCP Registry manifest: [`server.json`](./server.json)

## Canonical links

| Surface | URL |
| --- | --- |
| Website | https://agentbits.dev |
| Agent guide | https://agentbits.dev/for-agents |
| MCP | https://agentbits.dev/mcp |
| Catalog | https://agentbits.dev/catalog.json |
| OpenAPI | https://agentbits.dev/openapi.json |
| Official `server.json` | https://agentbits.dev/server.json |
| Smithery server card | https://agentbits.dev/.well-known/mcp/server-card.json |
| llms.txt | https://agentbits.dev/llms.txt |
| Docs | https://agentbits.dev/docs/ |
| MCP registries | [`docs/mcp-registries.md`](./docs/mcp-registries.md) |
| Tools | https://agentbits.dev/tools/ |
| Datasets | https://agentbits.dev/datasets/ |

## What this repository is

This repository contains **public documentation and discovery metadata** for Agent Bits.

It exists for:

- discoverability
- documentation
- machine-readable capability descriptions
- public specifications
- public API/MCP documentation
- examples of consuming the hosted service
- public project metadata
- links to the hosted service

It does **not** contain the Agent Bits implementation.

## Capability table

| Capability | Description | Pricing | Interfaces |
| --- | --- | --- | --- |
| `country_lookup` | Look up country metadata by ISO 3166-1 alpha-2 code | Free | HTTP · MCP |
| `currency_lookup` | Look up currency metadata by ISO 4217 code | Free | HTTP · MCP |
| `timezone_convert` | Convert timestamps between IANA timezones | Free | HTTP · MCP |
| `timestamp_convert` | Convert unix/ISO timestamps | Free | HTTP · MCP |
| `unit_convert` | Convert common units | Free | HTTP · MCP |
| `isbn_validate` | Validate ISBN-10/ISBN-13 | Free | HTTP · MCP |
| `uuid_validate` | Validate UUID strings | Free | HTTP · MCP |
| `luhn_validate` | Validate numbers with the Luhn algorithm | Free | HTTP · MCP |
| `json_validate` | Validate JSON text | Free | HTTP · MCP |
| `base64_encode` / `base64_decode` | Encode/decode Base64 | Free | HTTP · MCP |
| `url_encode` / `url_decode` | Encode/decode URL components | Free | HTTP · MCP |
| `mime_lookup` | Look up MIME type metadata | Free | HTTP · MCP |
| `language_lookup` | Look up language metadata | Free | HTTP · MCP |
| `http_status_lookup` | Look up HTTP status code metadata | Free | HTTP · MCP |
| `tld_lookup` | Look up TLD metadata | Free | HTTP · MCP |
| `countries_bulk` | Retrieve the complete countries dataset | Paid (x402 USDC on Base) | HTTP · MCP · x402 |

See [`catalog.json`](./catalog.json) for schemas, `use_when` / `do_not_use_when`, and payment metadata.

## Connect MCP in under a minute

```json
{
  "mcpServers": {
    "agentbits": {
      "url": "https://agentbits.dev/mcp"
    }
  }
}
```

Works with Claude Code, Cursor, OpenCode, Cloudflare Agents, and generic MCP clients.

Details: [`docs/mcp.md`](./docs/mcp.md) · [`for-agents.md`](./for-agents.md) · [`docs/mcp-registries.md`](./docs/mcp-registries.md)

## MCP registries

Packaging for Smithery, Glama, the official MCP Registry, PulseMCP, MCP.so, and related directories is documented in [`docs/mcp-registries.md`](./docs/mcp-registries.md).

Suggested GitHub topics: `ai-agents`, `mcp`, `mcp-server`, `agent-tools`, `ai-tools`, `x402`, `agentic-ai`, `cloudflare-workers`, `machine-payments`

## How agents discover Agent Bits

1. Read [`for-agents.md`](./for-agents.md) or https://agentbits.dev/for-agents
2. Fetch [`catalog.json`](./catalog.json)
3. Select a capability using description + `use_when` / `do_not_use_when`
4. Open the capability page under [`tools/`](./tools/)
5. Invoke MCP or HTTP

## Payments

Paid capabilities use **x402** on Base with USDC.

**No account. No API key. No signup. Agents can pay programmatically.**

Unpaid paid requests return HTTP `402` with machine-readable payment instructions.

See [`docs/payments.md`](./docs/payments.md).

## Status

Initial MVP capabilities are published in the catalog.

## License

Licensing terms for this documentation repository will be stated explicitly by the owner. Until then, do not assume permission to reuse the contents beyond ordinary viewing/discovery use.
