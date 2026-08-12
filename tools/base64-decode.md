# Base64 Decode

Decode a Base64 string into UTF-8 text and report invalid payloads as errors when recovering embedded credentials, tokens, or transport-encoded content.

Canonical name: `base64_decode`

## When to use this

- Decode this Base64 string to UTF-8 text
- Recover plain text from a Base64-encoded payload
- Check whether a Base64 string is valid and decode it

## Do not use when

- Encode plain text to Base64 (use base64_encode)
- Decode percent-encoded URL components (use url_decode)
- Decrypt ciphertext—Base64 decoding is not decryption

## Input

```json
{
  "type": "object",
  "properties": {
    "value": {
      "type": "string",
      "description": "Base64 text to decode"
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
    "decoded": {
      "type": "string"
    }
  },
  "required": [
    "decoded"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/base64/decode`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `base64_decode`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "aGVsbG8="
  },
  "output": {
    "decoded": "hello"
  }
}
```

## Related capabilities

- [`base64_encode`](/tools/base64-encode)
- [`url_decode`](/tools/url-decode)

## Limitations

- None documented.

## Version

1
