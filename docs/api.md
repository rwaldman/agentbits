# HTTP API

## Base URLs

- API root: `https://agentbits.dev/api`
- Versioned routes: `https://agentbits.dev/v1/...`
- OpenAPI: [`../openapi.json`](../openapi.json)

## Conventions

- JSON-first
- Schema-defined request and response bodies
- Stable error codes
- Versioned public contracts
- Cache-friendly where capability semantics allow

## Intended route style

Prefer predictable resource-oriented paths, for example:

```text
/v1/timezone/convert
/v1/countries/CA
/v1/currencies/USD
```

Exact routes are published as capabilities become available.

## Errors

```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "Human-readable explanation.",
    "field": "optional_field_name"
  }
}
```

## Status

The OpenAPI document currently contains a health skeleton only. Capability endpoints will be added when published.
