# country_lookup

Look up metadata for an ISO 3166-1 alpha-2 country code. Use this when an agent needs a country's name, currency, language, calling code, region, or related standardized country metadata.

## What it does

Look up metadata for an ISO 3166-1 alpha-2 country code. Use this when an agent needs a country's name, currency, language, calling code, region, or related standardized country metadata.

## When an agent should use it

Use this tool when you need metadata for a country identified by an ISO 3166-1 alpha-2 code (for example CA, US, JP), including common name, official name, region, currency, calling code, or languages.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

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

## Limitations

- Accepts ISO 3166-1 alpha-2 codes only in v1.
- Dataset is a curated subset/versioned snapshot, not a live geopolitical feed.

## Version

1
