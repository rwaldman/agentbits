# currency_lookup

Look up currency metadata for an ISO 4217 code, including name, symbol, decimals, and related countries.

## What it does

Look up currency metadata for an ISO 4217 code, including name, symbol, decimals, and related countries.

## When an agent should use it

Use this tool when you need metadata for a currency code such as USD, EUR, or JPY.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`GET https://agentbits.dev/v1/currencies/{code}`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `currency_lookup`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "code": "JPY"
  },
  "output": {
    "code": "JPY",
    "name": "Yen",
    "symbol": "¥",
    "decimals": 0,
    "countries": [
      "JP"
    ],
    "dataset_version": "1"
  }
}
```

## Limitations

- None documented.

## Version

1
