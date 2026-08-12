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

## 1. Official MCP Registry (canonical)

Publish once; aggregators such as PulseMCP ingest from here.

### Ready artifacts

- `server.json` uses `remotes` with `streamable-http` → `https://agentbits.dev/mcp`
- Namespace: `io.github.rwaldman/agentbits` (GitHub auth as `rwaldman`)

### Owner publish steps

```bash
# from a checkout that contains server.json (this public repo root)
curl -L "https://github.com/modelcontextprotocol/registry/releases/latest/download/mcp-publisher_$(uname -s | tr '[:upper:]' '[:lower:]')_$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/').tar.gz" | tar xz mcp-publisher
./mcp-publisher validate
./mcp-publisher login github   # device flow in browser
./mcp-publisher publish
curl "https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.rwaldman/agentbits"
```

Docs: https://modelcontextprotocol.io/registry/quickstart · https://modelcontextprotocol.io/registry/remote-servers

### After publish

- PulseMCP usually picks up new registry entries within about a week (expedite: hello@pulsemcp.com)
- Many client directories follow the official registry / PulseMCP

---

## 2. Smithery

Agent Bits is a hosted Streamable HTTP server (bring-your-own-hosting).

### Ready artifacts

- Live MCP: `https://agentbits.dev/mcp`
- Static card: `https://agentbits.dev/.well-known/mcp/server-card.json` (helps if automatic scan is blocked)

### Owner publish steps

1. Open https://smithery.ai/new
2. Enter `https://agentbits.dev/mcp`
3. Complete the publishing flow (namespace e.g. `@rwaldman/agentbits` or `rwaldman/agentbits`)

CLI alternative (requires Smithery auth):

```bash
smithery auth login
smithery mcp publish "https://agentbits.dev/mcp" -n rwaldman/agentbits
```

If Cloudflare bot protection blocks SmitheryBot scans, prefer the static server card (already published) or allow User-Agent `SmitheryBot`.

Docs: https://smithery.ai/docs/build/publish

---

## 3. Glama

### Ready artifacts

- `glama.json` with maintainer `rwaldman`
- Hosted MCP URL for **connector** listing: `https://agentbits.dev/mcp`
- Public GitHub repo for **server** crawl: https://github.com/rwaldman/agentbits

### Owner steps

**Connector (recommended for hosted HTTP):**

1. https://glama.ai/mcp/connectors (or Glama “Add connector”)
2. Submit name **Agent Bits**, URL `https://agentbits.dev/mcp`, transport Streamable HTTP

**Server directory (for awesome-list badge path):**

1. https://glama.ai/mcp/servers → Add MCP Server
2. Submit https://github.com/rwaldman/agentbits
3. Claim ownership (uses `glama.json`)
4. Complete any Glama build/admin checks if prompted

Note: this public repository is documentation/discovery metadata for a hosted service. The Glama **connector** path matches the product model best; the **server** path may require Glama UI build settings because there is no local stdio package in the public repo.

---

## 4. MCP.so

1. Open https://mcp.so
2. Submit / add server with:
   - Name: Agent Bits
   - GitHub: https://github.com/rwaldman/agentbits
   - Website: https://agentbits.dev
   - MCP: https://agentbits.dev/mcp
3. Sign in with GitHub if required

---

## 5. PulseMCP

No separate submission after Official Registry publish.

Optional expedite email: hello@pulsemcp.com with server name `io.github.rwaldman/agentbits`.

---

## 6. awesome-mcp-servers

Requires a Glama **server** listing with score badge first.

Draft entry (Utilities / datasets style — adjust section to match README headings):

```markdown
- [agentbits](https://github.com/rwaldman/agentbits) - Machine-readable utilities and datasets for AI agents (remote MCP + HTTP + x402) [![rwaldman/agentbits MCP server](https://glama.ai/mcp/servers/rwaldman/agentbits/badges/score.svg)](https://glama.ai/mcp/servers/rwaldman/agentbits)
```

Then open a PR against https://github.com/punkpeye/awesome-mcp-servers

---

## 7. GitHub MCP Registry / ecosystem

- GitHub topics on this repo (set in GitHub UI): `mcp`, `mcp-server`, `ai-agents`, `agent-tools`, `x402`, `cloudflare-workers`
- Repository description: `Machine-readable utilities and datasets for AI agents. MCP + HTTP + x402.`
- GitHub’s curated MCP Registry currently emphasizes partner/official listings; community self-publish is rolling out. Publishing to the **official MCP Registry** remains the portable path that GitHub and clients can ingest.

Monitor: https://github.blog/ai-and-ml/generative-ai/how-to-find-install-and-manage-mcp-servers-with-the-github-mcp-registry/

---

## Verification checklist

| Surface | Artifact ready | Needs owner account action |
| --- | --- | --- |
| Official MCP Registry | `server.json` | `mcp-publisher login github && publish` |
| Smithery | URL + server-card | Publish at smithery.ai/new |
| Glama connector | MCP URL | Submit connector |
| Glama server | `glama.json` | Add server + claim |
| MCP.so | docs links | Web submit |
| PulseMCP | — | After official publish (auto) |
| awesome-mcp-servers | draft entry | PR after Glama score |
| GitHub topics | docs | Set topics/description in UI |

<!-- mcp-name: io.github.rwaldman/agentbits -->
