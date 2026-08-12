# Unit Convert

Convert a numeric value between supported length, mass, or temperature units—for example miles to kilometers or Celsius to Fahrenheit—when you need a deterministic unit conversion.

Canonical name: `unit_convert`

## When to use this

- Convert 10 miles to kilometers
- What is 25°C in Fahrenheit?
- Convert a mass value between kilograms and pounds

## Do not use when

- Convert currencies or fetch exchange rates (use currency_lookup for metadata only)
- Convert timestamps or timezones (use timestamp_convert / timezone_convert)
- Convert unsupported unit categories outside length, mass, and temperature

## Input

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "number"
    },
    "from_unit": {
      "type": "string"
    },
    "to_unit": {
      "type": "string"
    }
  },
  "required": [
    "value",
    "from_unit",
    "to_unit"
  ],
  "additionalProperties": false
}
```

## Output

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "number"
    },
    "from_unit": {
      "type": "string"
    },
    "to_unit": {
      "type": "string"
    }
  },
  "required": [
    "value",
    "from_unit",
    "to_unit"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/unit/convert`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `unit_convert`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": 10,
    "from_unit": "mi",
    "to_unit": "km"
  },
  "output": {
    "value": 16.0934,
    "from_unit": "mi",
    "to_unit": "km"
  }
}
```

## Related capabilities

- [`currency_lookup`](/tools/currency-lookup)
- [`timestamp_convert`](/tools/timestamp-convert)
- [`timezone_convert`](/tools/timezone-convert)

## Limitations

- Supports a curated set of length, mass, and temperature units in v1.

## Version

1
