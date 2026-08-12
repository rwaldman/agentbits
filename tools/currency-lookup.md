# Currency Lookup

Resolve an ISO 4217 currency code such as USD, EUR, or JPY to its name, symbol, decimal places, and which countries use it when you need currency metadata rather than a live exchange rate.

Canonical name: `currency_lookup`

## When to use this

- What is the symbol and number of decimal places for EUR?
- Which countries use currency code JPY?
- Get ISO 4217 name and metadata for USD

## Do not use when

- Convert amounts between currencies or fetch live FX rates
- Find which currency a country uses when you only have a country code (use country_lookup)
- Validate payment-card-like numbers (use luhn_validate)

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

## Related capabilities

- [`country_lookup`](/tools/country-lookup)
- [`luhn_validate`](/tools/luhn-validate)

## Limitations

- None documented.

## Version

1
