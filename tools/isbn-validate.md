# Isbn Validate

Verify whether an ISBN-10 or ISBN-13 passes checksum rules and return normalized digits when checking book identifiers before catalog or purchase flows.

Canonical name: `isbn_validate`

## When to use this

- Is this ISBN valid?
- Check the checksum for an ISBN-13 book identifier
- Normalize and validate an ISBN-10 or ISBN-13 string

## Do not use when

- Look up book title, author, or cover metadata from an ISBN
- Validate UUIDs (use uuid_validate) or payment-card Luhn numbers (use luhn_validate)
- Validate arbitrary barcode formats that are not ISBN-10/13

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

## Related capabilities

- [`luhn_validate`](/tools/luhn-validate)
- [`uuid_validate`](/tools/uuid-validate)

## Limitations

- None documented.

## Version

1
