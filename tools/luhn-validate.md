# Luhn Validate

Run the Luhn checksum on a numeric string such as a payment-card-like identifier to verify the check digit before accepting or storing the value.

Canonical name: `luhn_validate`

## When to use this

- Does this number pass a Luhn check?
- Validate a payment-card-like identifier checksum
- Verify a numeric ID that uses a Luhn check digit

## Do not use when

- Charge a card, tokenize payments, or call a payment processor
- Validate ISBNs (use isbn_validate) or UUIDs (use uuid_validate)
- Look up currency metadata (use currency_lookup)

## Input

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "string",
      "description": "Numeric string to validate with Luhn"
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
    "normalized"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/luhn/validate`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `luhn_validate`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "79927398713"
  },
  "output": {
    "valid": true,
    "normalized": "79927398713"
  }
}
```

## Related capabilities

- [`currency_lookup`](/tools/currency-lookup)
- [`isbn_validate`](/tools/isbn-validate)
- [`uuid_validate`](/tools/uuid-validate)

## Limitations

- None documented.

## Version

1
