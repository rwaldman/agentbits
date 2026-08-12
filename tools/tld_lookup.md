# tld_lookup

Look up curated metadata for a DNS top-level domain such as com, io, or ai.

## What it does

Look up curated metadata for a DNS top-level domain such as com, io, or ai.

## When an agent should use it

Use this tool when you need to understand what a TLD is classified as or commonly used for.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`GET https://agentbits.dev/v1/tlds/{tld}`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `tld_lookup`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "tld": "ai"
  },
  "output": {
    "tld": "ai",
    "type": "country-code",
    "description": "Anguilla; popular with AI products"
  }
}
```

## Limitations

- None documented.

## Version

1
