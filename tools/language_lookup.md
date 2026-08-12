# language_lookup

Look up language name and native name for an ISO 639-1 code.

## What it does

Look up language name and native name for an ISO 639-1 code.

## When an agent should use it

Use this tool when you need metadata for a language code such as en, fr, or ja.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`GET https://agentbits.dev/v1/languages/{code}`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `language_lookup`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "code": "ja"
  },
  "output": {
    "code": "ja",
    "name": "Japanese",
    "native_name": "日本語",
    "dataset_version": "1"
  }
}
```

## Limitations

- None documented.

## Version

1
