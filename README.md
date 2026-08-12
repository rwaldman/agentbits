# Agent Bits

Small, reliable utilities and datasets for AI agents.

## Canonical links

- **Website:** https://agentbits.dev
- **MCP:** https://agentbits.dev/mcp
- **API:** https://agentbits.dev/api
- **Capability catalog:** [`catalog.json`](./catalog.json)
- **OpenAPI:** [`openapi.json`](./openapi.json)
- **Agent discovery:** [`llms.txt`](./llms.txt) · [`llms-full.txt`](./llms-full.txt)
- **Documentation:** [`docs/`](./docs/)

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

## Why Agent Bits exists

AI agents frequently need small, deterministic utilities and trustworthy reference data. Doing these tasks in-prompt is error-prone. Agent Bits exposes stable, schema-defined capabilities that agents can discover and invoke directly.

## How agents discover Agent Bits

1. Find the project via GitHub, web search, or MCP ecosystem discovery.
2. Read [`llms.txt`](./llms.txt) for a concise index.
3. Read [`catalog.json`](./catalog.json) for machine-readable capabilities.
4. Use per-capability pages under [`tools/`](./tools/) and [`datasets/`](./datasets/).
5. Invoke the hosted MCP or HTTP interfaces.

See [`docs/discovery.md`](./docs/discovery.md).

## How to use MCP

Connect an MCP-compatible client to:

```text
https://agentbits.dev/mcp
```

Published tools share the same canonical schemas as the HTTP API.

See [`docs/mcp.md`](./docs/mcp.md).

## How to use HTTP

Use the JSON-first HTTP API:

```text
https://agentbits.dev/api
```

Versioned capability routes will be published under `/v1` as capabilities become available.

See [`docs/api.md`](./docs/api.md) and [`openapi.json`](./openapi.json).

## Payments

Some capabilities are free. Others may require machine-payable access through supported payment protocol adapters.

See [`docs/payments.md`](./docs/payments.md).

## Status

Initial MVP capabilities are published in the catalog, including:

- Deterministic utilities (UUID/ISBN/Luhn/Base64/URL/JSON/timestamp/timezone/unit)
- Lookups (country/currency/MIME/language/HTTP status/TLD)
- Datasets (`countries`, `currencies`, `mime-types`, `languages`, `timezones`)
- Paid bulk: `countries_bulk`

## License

Licensing terms for this documentation repository will be stated explicitly by the owner. Until then, do not assume permission to reuse the contents beyond ordinary viewing/discovery use.
