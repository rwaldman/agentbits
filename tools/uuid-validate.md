# Uuid Validate

Check whether a string is a well-formed UUID and, when recognizable, report its version and variant so you can accept or reject identifier inputs confidently.

Canonical name: `uuid_validate`

## When to use this

- Is this string a valid UUID?
- What version and variant is this UUID?
- Validate a UUID before using it as a primary key or request id

## Do not use when

- Generate a new UUID
- Validate ISBNs or other non-UUID identifiers (use isbn_validate)
- Validate JSON structure (use json_validate)

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

## Related capabilities

- [`isbn_validate`](/tools/isbn-validate)
- [`json_validate`](/tools/json-validate)

## Limitations

- None documented.

## Version

1
