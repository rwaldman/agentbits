# isbn_validate

Validate ISBN-10/ISBN-13 identifiers using checksum rules and return normalized digits.

## What it does

Validate ISBN-10/ISBN-13 identifiers using checksum rules and return normalized digits.

## When an agent should use it

Use this tool when you need to determine whether an ISBN is checksum-valid.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/isbn/validate`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `isbn_validate`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "9780306406157"
  },
  "output": {
    "valid": true,
    "type": "isbn13",
    "normalized": "9780306406157"
  }
}
```

## Limitations

- None documented.

## Version

1
