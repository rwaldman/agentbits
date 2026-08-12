# Tld Lookup

Identify what a DNS top-level domain such as com, io, or ai is classified as and commonly used for when classifying domains or answering TLD questions.

Canonical name: `tld_lookup`

## When to use this

- What kind of TLD is .io?
- Is .ai a country-code or generic top-level domain?
- Get curated metadata for DNS TLD com

## Do not use when

- Check whether a full domain name is registered or available
- Resolve DNS records or WHOIS ownership
- Look up MIME types for file extensions (use mime_lookup)

## Input

```json
{
  "type": "object",
  "properties": {
    "tld": {
      "type": "string",
      "minLength": 2
    }
  },
  "required": [
    "tld"
  ],
  "additionalProperties": false
}
```

## Output

```json
{
  "type": "object",
  "properties": {
    "tld": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "description": {
      "type": "string"
    }
  },
  "required": [
    "tld",
    "type",
    "description"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`GET https://agentbits.dev/v1/tlds/{tld}`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `tld_lookup`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "tld": "ai"
  },
  "output": {
    "tld": "ai",
    "type": "country-code",
    "description": "Anguilla; popular with AI products"
  }
}
```

## Related capabilities

- [`mime_lookup`](/tools/mime-lookup)

## Limitations

- None documented.

## Version

1
