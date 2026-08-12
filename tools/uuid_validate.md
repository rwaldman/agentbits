# uuid_validate

Validate whether a string is a UUID and identify UUID version/variant metadata when possible.

## What it does

Validate whether a string is a UUID and identify UUID version/variant metadata when possible.

## When an agent should use it

Use this tool when you need to check if a value is a valid UUID, including common version 4 identifiers.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/uuid/validate`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `uuid_validate`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "550e8400-e29b-41d4-a716-446655440000"
  },
  "output": {
    "valid": true,
    "version": 4,
    "variant": "rfc4122",
    "normalized": "550e8400-e29b-41d4-a716-446655440000"
  }
}
```

## Limitations

- None documented.

## Version

1
