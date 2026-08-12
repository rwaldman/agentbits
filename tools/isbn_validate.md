# isbn_validate

Validate ISBN-10/ISBN-13 identifiers using checksum rules and return normalized digits.

## What it does

Validate ISBN-10/ISBN-13 identifiers using checksum rules and return normalized digits.

## When an agent should use it

Use this tool when you need to determine whether an ISBN is checksum-valid.

## Input

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "string",
      "description": "ISBN-10 or ISBN-13 candidate"
    }
  },
  "required": [
    "value"
  ],
  "additionalProperties": false
}
```

## Output

```json
{
  "type": "object",
  "properties": {
    "valid": {
      "type": "boolean"
    },
    "type": {
      "anyOf": [
        {
          "type": "string",
          "enum": [
            "isbn10",
            "isbn13"
          ]
        },
        {
          "type": "null"
        }
      ]
    },
    "normalized": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "valid",
    "type",
    "normalized"
  ],
  "additionalProperties": false
}
```

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
