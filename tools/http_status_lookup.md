# http_status_lookup

Resolve a numeric HTTP status code to its standard name and a short description.

## What it does

Resolve a numeric HTTP status code to its standard name and a short description.

## When an agent should use it

Use this tool when you need the meaning of an HTTP status code such as 404 or 429.

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

## Limitations

- None documented.

## Version

1
