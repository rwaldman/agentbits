# Http Status Lookup

Explain what a numeric HTTP status code such as 404 or 429 means by returning its standard reason phrase and a short description for debugging or API responses.

Canonical name: `http_status_lookup`

## When to use this

- What does HTTP status 404 mean?
- Get the standard name and description for status code 429
- Explain an HTTP response code returned by an API

## Do not use when

- Decide whether a request succeeded without needing the status name
- Look up MIME types or content-type headers (use mime_lookup)
- Diagnose TLS, DNS, or network failures that are not HTTP status codes

## Input

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "integer",
      "minimum": 100,
      "maximum": 599
    }
  },
  "required": [
    "code"
  ],
  "additionalProperties": false
}
```

## Output

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "integer",
      "minimum": -9007199254740991,
      "maximum": 9007199254740991
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    }
  },
  "required": [
    "code",
    "name",
    "description"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`GET https://agentbits.dev/v1/http-status/{code}`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `http_status_lookup`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "code": 404
  },
  "output": {
    "code": 404,
    "name": "Not Found",
    "description": "Resource does not exist."
  }
}
```

## Related capabilities

- [`mime_lookup`](/tools/mime-lookup)

## Limitations

- None documented.

## Version

1
