# mime_lookup

Resolve a file extension or MIME type to curated MIME metadata.

## What it does

Resolve a file extension or MIME type to curated MIME metadata.

## When an agent should use it

Use this tool when you need the MIME type for a file extension such as webp, or metadata for a MIME type string.

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

## Limitations

- None documented.

## Version

1
