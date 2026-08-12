# base64_encode

Encode a UTF-8 string into standard Base64.

## What it does

Encode a UTF-8 string into standard Base64.

## When an agent should use it

Use this tool when you need deterministic Base64 encoding of text.

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

## Limitations

- None documented.

## Version

1
