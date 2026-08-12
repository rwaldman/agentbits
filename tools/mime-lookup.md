# Mime Lookup

Map a file extension such as webp or png, or a MIME type string, to curated Content-Type metadata when setting headers, validating uploads, or choosing a media type.

Canonical name: `mime_lookup`

## When to use this

- What MIME type should I use for a .webp file?
- Look up metadata for Content-Type application/json
- Resolve a file extension to the correct MIME type for an upload or response header

## Do not use when

- Sniff or detect MIME type from raw file bytes
- Encode or decode Base64 file payloads (use base64_encode / base64_decode)
- Look up DNS top-level domain metadata (use tld_lookup)

## Input

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "query"
  ],
  "additionalProperties": false
}
```

## Output

```json
{
  "type": "object",
  "properties": {
    "extension": {
      "type": "string"
    },
    "mime": {
      "type": "string"
    },
    "compressible": {
      "type": "boolean"
    },
    "dataset_version": {
      "type": "string"
    }
  },
  "required": [
    "extension",
    "mime",
    "compressible",
    "dataset_version"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`POST https://agentbits.dev/v1/mime/lookup`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `mime_lookup`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "query": "webp"
  },
  "output": {
    "extension": "webp",
    "mime": "image/webp",
    "compressible": false,
    "dataset_version": "1"
  }
}
```

## Related capabilities

- [`base64_decode`](/tools/base64-decode)
- [`base64_encode`](/tools/base64-encode)
- [`tld_lookup`](/tools/tld-lookup)

## Limitations

- None documented.

## Version

1
