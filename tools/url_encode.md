# url_encode

Apply encodeURIComponent-style percent-encoding to a string.

## What it does

Apply encodeURIComponent-style percent-encoding to a string.

## When an agent should use it

Use this tool when you need deterministic URL component encoding.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/url/encode`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `url_encode`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "a b&c"
  },
  "output": {
    "encoded": "a%20b%26c"
  }
}
```

## Limitations

- None documented.

## Version

1
