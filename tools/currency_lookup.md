# currency_lookup

Look up currency metadata for an ISO 4217 code, including name, symbol, decimals, and related countries.

## What it does

Look up currency metadata for an ISO 4217 code, including name, symbol, decimals, and related countries.

## When an agent should use it

Use this tool when you need metadata for a currency code such as USD, EUR, or JPY.

## Input

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "minLength": 3,
      "maxLength": 3
    }
  },
  "required": [
    "code"
  ],
  "additionalProperties": false
}
```

## Output

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "symbol": {
      "type": "string"
    },
    "decimals": {
      "type": "integer",
      "minimum": -9007199254740991,
      "maximum": 9007199254740991
    },
    "countries": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dataset_version": {
      "type": "string"
    }
  },
  "required": [
    "code",
    "name",
    "symbol",
    "decimals",
    "countries",
    "dataset_version"
  ],
  "additionalProperties": false
}
```

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
