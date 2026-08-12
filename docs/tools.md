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

- [`country_lookup`](../tools/country_lookup.md) — free ISO country metadata lookup
- [`countries_bulk`](../tools/countries_bulk.md) — paid bulk countries dataset download
