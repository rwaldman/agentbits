# url_decode

Decode a percent-encoded URL component into plain text.

## What it does

Decode a percent-encoded URL component into plain text.

## When an agent should use it

Use this tool when you need deterministic URL component decoding.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/url/decode`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `url_decode`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "a%20b%26c"
  },
  "output": {
    "decoded": "a b&c"
  }
}
```

## Limitations

- None documented.

## Version

1
