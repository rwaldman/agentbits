# Url Decode

Decode a percent-encoded URL component into plain text when reading query parameters, path segments, or form values that contain escaped characters.

Canonical name: `url_decode`

## When to use this

- Decode this percent-encoded URL component
- Convert %20-style escapes back to plain text
- Recover the original string from an encoded query parameter

## Do not use when

- Percent-encode text for a URL (use url_encode)
- Decode Base64 payloads (use base64_decode)
- Parse HTML entities that are not URL percent-encoding

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

`POST https://agentbits.dev/v1/url/decode`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `url_decode`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "a%20b%26c"
  },
  "output": {
    "decoded": "a b&c"
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
