# MCP registries and directories

How Agent Bits is packaged for major MCP discovery surfaces.

Canonical remote MCP endpoint:

```text
https://agentbits.dev/mcp
```

Official registry name:

```text
io.github.rwaldman/agentbits
```

Manifests in this repository:

| File | Purpose |
| --- | --- |
| [`../server.json`](../server.json) | Official MCP Registry metadata (`remotes` → Streamable HTTP) |
| [`../glama.json`](../glama.json) | Glama maintainer claim |
| [`../LICENSE`](../LICENSE) | MIT (required for Glama license grade) |
| [`../.well-known/mcp/server-card.json`](../.well-known/mcp/server-card.json) | Smithery / scanner server card |
| Live `https://agentbits.dev/server.json` | Same official manifest from production |
| Live `https://agentbits.dev/.well-known/mcp/server-card.json` | Live server card |

## Install snippet (all clients)

```json
{
  "mcpServers": {
    "agentbits": {
      "url": "https://agentbits.dev/mcp"
    }
  }
}
```

---

## Automated Official Registry publish

On every version tag `v*` in this public repo, GitHub Actions publishes `server.json` via `mcp-publisher` + GitHub OIDC.

Workflow: [`.github/workflows/publish-mcp.yml`](../.github/workflows/publish-mcp.yml)

### Release steps (owner)

1. In the private implementation repo, bump `AGENTBITS_SERVICE.version`, run tests, `pnpm public:build`, deploy Worker.
2. Sync `public/` into this repo and merge to `main` (so `server.json` version matches).
3. Confirm live `https://agentbits.dev/server.json` shows the new version.
4. Tag from this public checkout:

```bash
git tag -a v0.3.1 -m "MCP registry release 0.3.1"
git push origin v0.3.1
```

Or use the private helper: `scripts/tag-mcp-release.sh 0.3.1` (with `PUBLIC_REPO` set).

5. Watch the **Publish to MCP Registry** Action; verify:

```bash
curl "https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.rwaldman/agentbits"
```

Registry versions are immutable — always bump `version` before tagging.

PR validation: [`.github/workflows/validate-mcp.yml`](../.github/workflows/validate-mcp.yml) runs `mcp-publisher validate` when `server.json` changes.

---

## 1. Official MCP Registry (canonical)

Already published for `0.3.0`. Future versions use the automation above.

Manual fallback:

```bash
mcp-publisher validate
mcp-publisher login github
mcp-publisher publish
```

Docs: https://modelcontextprotocol.io/registry/quickstart · https://modelcontextprotocol.io/registry/remote-servers

---

## 2. Smithery

Listed (example slug): https://smithery.ai/servers/smithery-miwy/agentbits

Hosted Streamable HTTP — Smithery rescans `https://agentbits.dev/mcp` / the server card. **No per-release republish** unless the URL or namespace changes.

Server card: https://agentbits.dev/.well-known/mcp/server-card.json

---

## 3. Glama

### Live listings

| Kind | URL | Status |
| --- | --- | --- |
| Server | https://glama.ai/mcp/servers/rwaldman/agentbits | Approved / indexed |
| Connector | https://glama.ai/mcp/connectors/dev.agentbits/agent-bits | Healthy |
| Score | https://glama.ai/mcp/servers/rwaldman/agentbits/score | Needs claim + release |

`glama.json` already lists `"rwaldman"`. MIT `LICENSE` is in-repo for the license grade.

### Claim ownership (if Claim redirects to chat)

Known Glama quirk: **Claim** sometimes OAuth-succeeds then dumps you on the chatbot instead of completing claim.

Try in order:

1. Sign out of Glama completely, then sign in with GitHub as **`rwaldman`** (same account as the repo owner).
2. Open the score tab directly: https://glama.ai/mcp/servers/rwaldman/agentbits/score
3. Click **How to sync the server with GitHub?** → **Sync**, wait for the latest commit (must include `glama.json` + `LICENSE`).
4. Click **Claim** again from the score tab (not from search).
5. If it still redirects to chat: email **support@glama.ai** with:
   - Listing: `https://glama.ai/mcp/servers/rwaldman/agentbits`
   - GitHub: `rwaldman/agentbits`
   - That `glama.json` maintainers include `rwaldman`
   - That Claim OAuth redirects to the chatbot instead of completing verification  
   Also ask in [Glama Discord](https://glama.ai/discord).

Until claimed, admin Dockerfile / Make Release stay locked, and **Author not verified** stays red.

### Raise the score (after claim)

1. **License** — MIT `LICENSE` on `main` (done). Sync GitHub on Glama so license grade leaves **F**.
2. **Glama release (critical for quality / score badge)**  
   A Glama release is **not** a GitHub release. After claim:
   - Open https://glama.ai/mcp/servers/rwaldman/agentbits/admin/dockerfile
   - Configure build to wrap the **hosted** MCP as stdio via `mcp-remote`, for example:
     - **Build steps:** leave empty (or `[]`)
     - **CMD arguments:** `["npx", "-y", "mcp-remote", "https://agentbits.dev/mcp"]`
     - **Env schema:** empty object
   - Click **Deploy** (build test must pass `initialize` + `tools/list`)
   - Click **Make Release**, version e.g. `0.3.0`, publish  
   Docs: https://glama.ai/blog/2026-03-15-how-to-make-a-release
3. **Related servers** — set in Glama admin after claim (optional).
4. **Usage** — improves after real tool calls through Glama / clients.

Score badge URL (for awesome-mcp-servers):

```markdown
[![rwaldman/agentbits MCP server](https://glama.ai/mcp/servers/rwaldman/agentbits/badges/score.svg)](https://glama.ai/mcp/servers/rwaldman/agentbits)
```

---

## 4. MCP.so

Skipped (paid featured upsell; free listing optional later).

---

## 5. PulseMCP

No separate submission. Ingests Official Registry after each tagged publish. Expedite: hello@pulsemcp.com

---

## 6. awesome-mcp-servers

Wait until the Glama **score badge** works (post claim + Glama release), then PR:

```markdown
- [agentbits](https://github.com/rwaldman/agentbits) - Machine-readable utilities and datasets for AI agents (remote MCP + HTTP + x402) [![rwaldman/agentbits MCP server](https://glama.ai/mcp/servers/rwaldman/agentbits/badges/score.svg)](https://glama.ai/mcp/servers/rwaldman/agentbits)
```

Upstream: https://github.com/punkpeye/awesome-mcp-servers

---

## 7. GitHub topics / ecosystem

Set in GitHub UI on this repo: topics `mcp`, `mcp-server`, `ai-agents`, `agent-tools`, `x402`, `cloudflare-workers`, website `https://agentbits.dev`.

---

## What auto-updates on each release

| Surface | Per-release action |
| --- | --- |
| Official MCP Registry | **Automated** on `v*` tags |
| agentbits.dev | Deploy Worker (manual/CI) |
| Smithery | Rescan live URL (no republish) |
| Glama connector | Health checks live URL |
| Glama server | Re-crawl GitHub; **Make Release** only when you want a new quality scan |
| PulseMCP | Follows Official Registry |

<!-- mcp-name: io.github.rwaldman/agentbits -->
