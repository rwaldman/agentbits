# base64_decode

Decode a Base64 string into UTF-8 text, reporting invalid payloads as errors.

## What it does

Decode a Base64 string into UTF-8 text, reporting invalid payloads as errors.

## When an agent should use it

Use this tool when you need deterministic Base64 decoding.

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

## Limitations

- None documented.

## Version

1
