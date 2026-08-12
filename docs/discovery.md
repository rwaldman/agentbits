# Discovery

This page explains how agents and developers can discover Agent Bits.

## Entry points

| Artifact | Purpose |
| --- | --- |
| Website `https://agentbits.dev` | Canonical hosted capability index |
| Agent guide `https://agentbits.dev/for-agents` | Everything an agent needs to connect and pay |
| GitHub `rwaldman/agentbits` | Public documentation and discovery metadata |
| [`../llms.txt`](../llms.txt) | Concise agent index |
| [`../llms-full.txt`](../llms-full.txt) | Full agent-oriented documentation |
| [`../catalog.json`](../catalog.json) | Machine-readable capability catalog |
| [`../openapi.json`](../openapi.json) | HTTP surface |
| MCP `https://agentbits.dev/mcp` | Tool discovery and invocation |
| [`../server.json`](../server.json) | Official MCP Registry remote-server manifest |
| [`../.well-known/mcp/server-card.json`](../.well-known/mcp/server-card.json) | Smithery / scanner server card |
| [`mcp-registries.md`](./mcp-registries.md) | Directory registration checklist |
| [`../tools/`](../tools/) | Per-tool pages (kebab + snake aliases) |
| [`../datasets/`](../datasets/) | Per-dataset pages |
| [`../sitemap.xml`](../sitemap.xml) | Crawl map |
| [`../robots.txt`](../robots.txt) | Crawl policy |

## Recommended discovery flow

1. Resolve project identity (`Agent Bits`, `agentbits.dev`).
2. Read `/for-agents` or `llms.txt`.
3. Fetch `catalog.json`.
4. Select a capability using `description`, `use_when`, and `do_not_use_when`.
5. Open the capability page (for example `/tools/country-lookup`).
6. Call MCP or HTTP.
7. For paid capabilities, satisfy the x402 `402` challenge and retry.

## Catalog selection metadata

Every tool capability publishes:

- `description` — retrieval-oriented agent language
- `use_when` — concrete selection phrases
- `do_not_use_when` — negative cases
- `payment` — for paid capabilities (`protocol`, `network`, `currency`, `price`)
- concrete JSON Schema for inputs/outputs

## For automated discovery systems

- Prefer `catalog.json` as the canonical machine-readable capability list.
- Treat `llms.txt` as the compact index.
- Treat OpenAPI as the HTTP contract surface.
- Prefer per-capability URLs under `/tools/` for intent matching.
- Do not infer unpublished capabilities from this repository's history or filenames alone.

## Status

Discovery artifacts are published for the current hosted capability catalog and served live from `agentbits.dev`.
