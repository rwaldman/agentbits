# unit_convert

Convert numeric values between supported units for length, mass, and temperature.

## What it does

Convert numeric values between supported units for length, mass, and temperature.

## When an agent should use it

Use this tool when you need deterministic unit conversion such as miles to kilometers or Celsius to Fahrenheit.

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

## Limitations

- Supports a curated set of length, mass, and temperature units in v1.

## Version

1
