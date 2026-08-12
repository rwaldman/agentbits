# Tools

Tools are schema-defined capabilities exposed through MCP and HTTP.

## Naming

Tool names are lowercase `snake_case` and describe the capability, for example:

```text
timezone_convert
country_lookup
isbn_validate
```

## Documentation

Each published tool has a page under [`../tools/`](../tools/) containing:

- what it does
- when an agent should use it
- input/output/error schemas
- HTTP and MCP invocation details
- pricing
- examples
- limitations
- version

## Published tools

See [`../catalog.json`](../catalog.json) for the complete machine-readable list.

Highlights:

- Deterministic utilities: `uuid_validate`, `isbn_validate`, `luhn_validate`, `base64_encode`, `base64_decode`, `url_encode`, `url_decode`, `json_validate`, `timestamp_convert`, `timezone_convert`, `unit_convert`
- Lookups: `country_lookup`, `currency_lookup`, `mime_lookup`, `language_lookup`, `http_status_lookup`, `tld_lookup`
- Paid bulk: `countries_bulk`
