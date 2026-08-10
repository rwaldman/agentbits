# Public Projection Manifest

This manifest describes what is allowed in the Agent Bits public projection (`/public` → `rwaldman/agentbits`).

Categories:

- **ALLOWED** — may appear in the public repository
- **GENERATED** — produced from private canonical metadata; do not hand-edit as source of truth
- **MANUAL** — curated public prose maintained carefully in `/public`
- **FORBIDDEN** — must never appear in the public projection

## Inventory

| Path | Category | Notes |
| --- | --- | --- |
| `README.md` | MANUAL | Public product identity and discovery entrypoint |
| `AGENTS.md` | MANUAL | Public agent-facing usage notes (no private ops) |
| `MANIFEST.md` | MANUAL | This file |
| `llms.txt` | GENERATED | Concise discovery index |
| `llms-full.txt` | GENERATED | Full agent-oriented documentation |
| `catalog.json` | GENERATED | Machine-readable capability catalog |
| `openapi.json` | GENERATED | HTTP surface skeleton / published API |
| `docs/` | MANUAL/GENERATED | Public docs hierarchy |
| `tools/*.md` | GENERATED | Per-tool public pages |
| `datasets/*.md` | GENERATED | Per-dataset public pages |
| `examples/` | MANUAL | Hosted-service consumption examples only |
| `.well-known/*` | GENERATED/MANUAL | Only established ecosystem standards |

## ALLOWED content types

- Markdown documentation
- JSON catalogs and OpenAPI documents
- Plain-text agent discovery documents (`llms.txt`, `llms-full.txt`)
- Example request/response snippets that call the hosted service
- Public pricing/discovery metadata intentionally published

## FORBIDDEN

- Executable server implementation
- Tool/dataset/integration implementation source
- `wrangler.toml` / `wrangler.jsonc`
- Docker deployment definitions for Agent Bits itself
- Secrets, `.env`, private keys, API tokens
- Private Cloudflare bindings and internal service names
- Proprietary dataset contents
- Internal analytics
- Deployment scripts that reveal private operations
- Imports/paths from private implementation
- Source files with extensions such as `.ts`, `.js`, `.py`, `.rs`, `.go`, `.java` unless explicitly approved as non-executable documentation/examples

## Validation

```bash
pnpm public:build
pnpm public:check
```

`public:check` enforces required files, catalog/OpenAPI validity, identity consistency, and anti-implementation / secret-leak heuristics.
