# countries_bulk

Retrieve the full versioned countries dataset used by Agent Bits country lookups. Use when an agent needs bulk offline country metadata rather than a single country lookup.

## What it does

Retrieve the full versioned countries dataset used by Agent Bits country lookups. Use when an agent needs bulk offline country metadata rather than a single country lookup.

## When an agent should use it

Use this tool when you need the complete countries dataset for a specific version (for caching, offline use, or multi-country analysis) instead of looking up one country code at a time.

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

## Examples

_See hosted service examples as they are published._

## Limitations

- Paid capability. Unpaid requests receive HTTP 402 / payment challenge.
- Returns the curated Agent Bits countries dataset, not a live feed.

## Version

1
