# mime_lookup

Resolve a file extension or MIME type to curated MIME metadata.

## What it does

Resolve a file extension or MIME type to curated MIME metadata.

## When an agent should use it

Use this tool when you need the MIME type for a file extension such as webp, or metadata for a MIME type string.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/mime/lookup`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `mime_lookup`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "query": "webp"
  },
  "output": {
    "extension": "webp",
    "mime": "image/webp",
    "compressible": false,
    "dataset_version": "1"
  }
}
```

## Limitations

- None documented.

## Version

1
