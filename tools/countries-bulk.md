# Countries Bulk

Download the complete versioned countries dataset as JSON for caching, offline use, or multi-country analysis when a single country_lookup call is not enough.

Canonical name: `countries_bulk`

## When to use this

- Download the full countries dataset as JSON
- Cache the complete versioned countries snapshot for offline use
- Analyze or filter many countries without repeated single-code lookups

## Do not use when

- Look up metadata for a single country by ISO code (use country_lookup instead)
- Look up one currency or language code (use currency_lookup / language_lookup)
- Fetch live geopolitical or exchange-rate feeds

## Input

```json
{
  "type": "object",
  "properties": {
    "version": {
      "default": "1",
      "description": "Dataset version to retrieve. Defaults to 1.",
      "type": "string"
    }
  },
  "required": [
    "version"
  ],
  "additionalProperties": false
}
```

## Output

```json
{
  "type": "object",
  "properties": {
    "dataset": {
      "type": "string"
    },
    "version": {
      "type": "string"
    },
    "revision": {
      "type": "string"
    },
    "generated": {
      "type": "string"
    },
    "count": {
      "type": "integer",
      "minimum": 0,
      "maximum": 9007199254740991
    },
    "records": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          },
          "code3": {
            "type": "string"
          },
          "numeric": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "official_name": {
            "type": "string"
          },
          "region": {
            "type": "string"
          },
          "subregion": {
            "type": "string"
          },
          "currency": {
            "type": "string"
          },
          "calling_code": {
            "type": "string"
          },
          "languages": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "code",
          "code3",
          "numeric",
          "name",
          "official_name",
          "region",
          "subregion",
          "currency",
          "calling_code",
          "languages"
        ],
        "additionalProperties": false
      }
    }
  },
  "required": [
    "dataset",
    "version",
    "revision",
    "generated",
    "count",
    "records"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`GET https://agentbits.dev/v1/datasets/countries/v1.json`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `countries_bulk`

## Pricing

0.001 USDC per request via x402 on eip155:8453

## Payment discovery

```json
{
  "protocol": "x402",
  "network": "eip155:8453",
  "currency": "USDC",
  "price": "0.001",
  "amount": "0.001",
  "unit": "request",
  "account_required": false,
  "api_key_required": false,
  "signup_required": false,
  "notes": "No account. No API key. No signup. Agents can pay programmatically via x402."
}
```

No account. No API key. No signup. Agents can pay programmatically via x402.

## Examples

_See hosted service examples as they are published._

## Related capabilities

- [`country_lookup`](/tools/country-lookup)
- [`currency_lookup`](/tools/currency-lookup)
- [`language_lookup`](/tools/language-lookup)

## Limitations

- Paid capability. Unpaid requests receive HTTP 402 / payment challenge.
- Returns the curated Agent Bits countries dataset, not a live feed.

## Version

1
