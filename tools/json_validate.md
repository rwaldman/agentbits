# json_validate

Parse and validate a JSON string, returning whether it is valid and a normalized form when possible.

## What it does

Parse and validate a JSON string, returning whether it is valid and a normalized form when possible.

## When an agent should use it

Use this tool when you need to verify that text is valid JSON before further processing.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/json/validate`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `json_validate`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "{\"a\":1}"
  },
  "output": {
    "valid": true,
    "normalized": "{\n  \"a\": 1\n}",
    "error": null
  }
}
```

## Limitations

- None documented.

## Version

1
