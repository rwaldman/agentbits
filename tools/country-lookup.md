# Country Lookup

Resolve an ISO 3166-1 alpha-2 country code (for example CA, US, JP) to official name, region, currency, calling code, languages, and related country metadata when you already have the two-letter code.

Canonical name: `country_lookup`

## When to use this

- What currency and calling code does country code JP use?
- Get official name, region, and languages for ISO country CA
- Look up standardized metadata for a two-letter ISO 3166-1 country code

## Do not use when

- Download the full countries dataset for offline or multi-country use (use countries_bulk)
- Look up currency symbol or decimals by ISO 4217 code alone (use currency_lookup)
- Search for a country when you only know its English name and not the ISO code

## Input

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "minLength": 2,
      "maxLength": 2,
      "pattern": "^[A-Za-z]{2}$",
      "description": "ISO 3166-1 alpha-2 country code, for example CA or JP"
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
    },
    "dataset_version": {
      "type": "string"
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
    "languages",
    "dataset_version"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`GET https://agentbits.dev/v1/countries/{code}`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `country_lookup`

## Pricing

Free

## Examples

```json
{
  "title": "Canada",
  "input": {
    "code": "CA"
  },
  "output": {
    "code": "CA",
    "code3": "CAN",
    "numeric": "124",
    "name": "Canada",
    "official_name": "Canada",
    "region": "Americas",
    "subregion": "Northern America",
    "currency": "CAD",
    "calling_code": "+1",
    "languages": [
      "en",
      "fr"
    ],
    "dataset_version": "1"
  }
}
```

## Related capabilities

- [`countries_bulk`](/tools/countries-bulk)
- [`currency_lookup`](/tools/currency-lookup)

## Limitations

- Accepts ISO 3166-1 alpha-2 codes only in v1.
- Dataset is a curated subset/versioned snapshot, not a live geopolitical feed.

## Version

1
