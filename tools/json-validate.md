# Json Validate

Parse a string as JSON to confirm it is well-formed and return a normalized representation when possible before further processing or storage.

Canonical name: `json_validate`

## When to use this

- Is this string valid JSON?
- Parse and normalize a JSON payload before processing
- Check whether agent or user-supplied text is well-formed JSON

## Do not use when

- Validate against a specific JSON Schema or OpenAPI model beyond well-formedness
- Encode or decode Base64 (use base64_encode / base64_decode)
- Validate UUID or ISBN identifier formats

## Input

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "string"
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
    },
    "error": {
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
    "normalized",
    "error"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/json/validate`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `json_validate`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "{\"a\":1}"
  },
  "output": {
    "valid": true,
    "normalized": "{\n  \"a\": 1\n}",
    "error": null
  }
}
```

## Related capabilities

- [`base64_decode`](/tools/base64-decode)
- [`base64_encode`](/tools/base64-encode)

## Limitations

- None documented.

## Version

1
