# Base64 Encode

Convert a UTF-8 string into standard Base64 when you need a portable text encoding for credentials, binary-safe transport, or embedding data in JSON/HTTP fields.

Canonical name: `base64_encode`

## When to use this

- Encode this UTF-8 string as Base64
- Convert plain text into standard Base64 for transport
- Produce a Base64 representation of a credential or payload string

## Do not use when

- Decode Base64 back to text (use base64_decode)
- Percent-encode URL components (use url_encode)
- Hash or encrypt data for security—Base64 is encoding only

## Input

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "string",
      "description": "Text to encode"
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
    "encoded": {
      "type": "string"
    }
  },
  "required": [
    "encoded"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/base64/encode`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `base64_encode`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "hello"
  },
  "output": {
    "encoded": "aGVsbG8="
  }
}
```

## Related capabilities

- [`base64_decode`](/tools/base64-decode)
- [`url_encode`](/tools/url-encode)

## Limitations

- None documented.

## Version

1
