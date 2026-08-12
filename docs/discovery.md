# Discovery

This page explains how agents and developers can discover Agent Bits.

## Entry points

| Artifact | Purpose |
| --- | --- |
| Website `https://agentbits.dev` | Canonical hosted service |
| GitHub `rwaldman/agentbits` | Public documentation and discovery metadata |
| [`../llms.txt`](../llms.txt) | Concise agent index |
| [`../llms-full.txt`](../llms-full.txt) | Full agent-oriented documentation |
| [`../catalog.json`](../catalog.json) | Machine-readable capability catalog |
| [`../openapi.json`](../openapi.json) | HTTP surface |
| MCP `https://agentbits.dev/mcp` | Tool discovery and invocation |
| [`../tools/`](../tools/) | Per-tool pages |
| [`../datasets/`](../datasets/) | Per-dataset pages |

## Recommended discovery flow

1. Resolve project identity (`Agent Bits`, `agentbits.dev`).
2. Fetch `llms.txt`.
3. Fetch `catalog.json`.
4. Select a capability by name/description/use-case.
5. Read the capability page for schema, pricing, and invocation details.
6. Call MCP or HTTP.

## For automated discovery systems

- Prefer `catalog.json` as the canonical machine-readable capability list.
- Treat `llms.txt` as the compact index.
- Treat OpenAPI as the HTTP contract surface.
- Do not infer unpublished capabilities from this repository's history or filenames alone.

## Status

Discovery scaffolding is published. Capability entries will populate as the hosted service launches features.
