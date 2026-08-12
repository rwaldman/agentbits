# timestamp_convert

Convert Unix epoch seconds/milliseconds to ISO-8601, or ISO-8601 to Unix epoch values.

## What it does

Convert Unix epoch seconds/milliseconds to ISO-8601, or ISO-8601 to Unix epoch values.

## When an agent should use it

Use this tool when you need deterministic conversion between Unix timestamps and ISO-8601 datetimes.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

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

## Limitations

- None documented.

## Version

1
