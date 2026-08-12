# Url Encode

Apply encodeURIComponent-style percent-encoding so query parameters, path segments, or form values are safe to place in a URL.

Canonical name: `url_encode`

## When to use this

- Percent-encode this string for a query parameter
- Make a path segment URL-safe with encodeURIComponent-style encoding
- Encode special characters before inserting text into a URL

## Do not use when

- Decode a percent-encoded string (use url_decode)
- Encode binary data as Base64 (use base64_encode)
- Build or rewrite a full absolute URL structure beyond component encoding

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

`POST https://agentbits.dev/v1/url/encode`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `url_encode`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "value": "a b&c"
  },
  "output": {
    "encoded": "a%20b%26c"
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
