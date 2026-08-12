# uuid_validate

Validate whether a string is a UUID and identify UUID version/variant metadata when possible.

## What it does

Validate whether a string is a UUID and identify UUID version/variant metadata when possible.

## When an agent should use it

Use this tool when you need to check if a value is a valid UUID, including common version 4 identifiers.

## Input

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "string",
      "description": "UUID candidate string"
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
    "version": {
      "anyOf": [
        {
          "type": "integer",
          "minimum": -9007199254740991,
          "maximum": 9007199254740991
        },
        {
          "type": "null"
        }
      ]
    },
    "variant": {
      "anyOf": [
        {
          "type": "string"
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
    "version",
    "variant",
    "normalized"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/uuid/validate`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `uuid_validate`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "550e8400-e29b-41d4-a716-446655440000"
  },
  "output": {
    "valid": true,
    "version": 4,
    "variant": "rfc4122",
    "normalized": "550e8400-e29b-41d4-a716-446655440000"
  }
}
```

## Limitations

- None documented.

## Version

1
