# timezone_convert

Convert an ISO-8601 datetime from one IANA timezone to another, preserving the instant.

## What it does

Convert an ISO-8601 datetime from one IANA timezone to another, preserving the instant.

## When an agent should use it

Use this tool when you need to convert a datetime between IANA timezones, including daylight-saving-time-aware conversions.

## Input

```json
{
  "type": "object",
  "properties": {
    "datetime": {
      "type": "string",
      "description": "ISO-8601 datetime, with or without offset"
    },
    "from_timezone": {
      "type": "string",
      "description": "IANA timezone for interpreting naive datetimes"
    },
    "to_timezone": {
      "type": "string",
      "description": "IANA timezone for output"
    }
  },
  "required": [
    "datetime",
    "from_timezone",
    "to_timezone"
  ],
  "additionalProperties": false
}
```

## Output

```json
{
  "type": "object",
  "properties": {
    "source": {
      "type": "object",
      "properties": {
        "datetime": {
          "type": "string"
        },
        "timezone": {
          "type": "string"
        }
      },
      "required": [
        "datetime",
        "timezone"
      ],
      "additionalProperties": false
    },
    "target": {
      "type": "object",
      "properties": {
        "datetime": {
          "type": "string"
        },
        "timezone": {
          "type": "string"
        }
      },
      "required": [
        "datetime",
        "timezone"
      ],
      "additionalProperties": false
    },
    "utc": {
      "type": "string"
    }
  },
  "required": [
    "source",
    "target",
    "utc"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/timezone/convert`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `timezone_convert`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "datetime": "2024-07-01T15:00:00",
    "from_timezone": "America/Toronto",
    "to_timezone": "Asia/Tokyo"
  },
  "output": {
    "source": {
      "datetime": "2024-07-01T15:00:00",
      "timezone": "America/Toronto"
    },
    "target": {
      "datetime": "2024-07-02T04:00:00",
      "timezone": "Asia/Tokyo"
    },
    "utc": "2024-07-01T19:00:00.000Z"
  }
}
```

## Limitations

- Relies on the runtime IANA timezone database via Intl.

## Version

1
