# Timestamp Convert

Convert Unix epoch seconds or milliseconds to ISO-8601, or an ISO-8601 datetime to Unix epoch values, when bridging APIs that disagree on time formats.

Canonical name: `timestamp_convert`

## When to use this

- Convert this Unix timestamp to ISO-8601
- Turn an ISO-8601 datetime into epoch milliseconds
- Bridge APIs that mix Unix seconds and ISO-8601 strings

## Do not use when

- Convert a datetime between IANA timezones while preserving the instant (use timezone_convert)
- Convert length, mass, or temperature units (use unit_convert)
- Interpret relative phrases like 'next Tuesday' or 'in 3 hours'

## Input

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "string",
      "description": "Unix timestamp or ISO-8601 datetime"
    },
    "input_format": {
      "type": "string",
      "enum": [
        "unix_seconds",
        "unix_milliseconds",
        "iso8601"
      ],
      "description": "Format of value"
    }
  },
  "required": [
    "value",
    "input_format"
  ],
  "additionalProperties": false
}
```

## Output

```json
{
  "type": "object",
  "properties": {
    "iso": {
      "type": "string"
    },
    "unix_seconds": {
      "type": "integer",
      "minimum": -9007199254740991,
      "maximum": 9007199254740991
    },
    "unix_milliseconds": {
      "type": "integer",
      "minimum": -9007199254740991,
      "maximum": 9007199254740991
    }
  },
  "required": [
    "iso",
    "unix_seconds",
    "unix_milliseconds"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/timestamp/convert`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `timestamp_convert`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "1710000000",
    "input_format": "unix_seconds"
  },
  "output": {
    "iso": "2024-03-09T16:00:00.000Z",
    "unix_seconds": 1710000000,
    "unix_milliseconds": 1710000000000
  }
}
```

## Related capabilities

- [`timezone_convert`](/tools/timezone-convert)
- [`unit_convert`](/tools/unit-convert)

## Limitations

- None documented.

## Version

1
