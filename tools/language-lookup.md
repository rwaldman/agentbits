# Language Lookup

Resolve an ISO 639-1 language code such as en, fr, or ja to its English name and native name when you need language metadata from a two-letter code.

Canonical name: `language_lookup`

## When to use this

- What language does ISO 639-1 code ja refer to?
- Get the native name for language code fr
- Resolve a two-letter language code to its English and native names

## Do not use when

- Translate text between languages
- Detect the language of arbitrary free-form text
- Look up country languages from a country code (use country_lookup)

## Input

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "minLength": 2,
      "maxLength": 3
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
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "native_name": {
      "type": "string"
    },
    "dataset_version": {
      "type": "string"
    }
  },
  "required": [
    "code",
    "name",
    "native_name",
    "dataset_version"
  ],
  "additionalProperties": false
}
```

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`GET https://agentbits.dev/v1/languages/{code}`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `language_lookup`

## Pricing

Free

## Examples

```json
{
  "title": "Example",
  "input": {
    "code": "ja"
  },
  "output": {
    "code": "ja",
    "name": "Japanese",
    "native_name": "日本語",
    "dataset_version": "1"
  }
}
```

## Related capabilities

- [`country_lookup`](/tools/country-lookup)

## Limitations

- None documented.

## Version

1
