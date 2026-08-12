# luhn_validate

Validate identifiers such as payment-card-like numbers using the Luhn algorithm.

## What it does

Validate identifiers such as payment-card-like numbers using the Luhn algorithm.

## When an agent should use it

Use this tool when you need to verify a number with a Luhn check digit.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/luhn/validate`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `luhn_validate`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "79927398713"
  },
  "output": {
    "valid": true,
    "normalized": "79927398713"
  }
}
```

## Limitations

- None documented.

## Version

1
