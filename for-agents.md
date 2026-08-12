# Agent Bits for AI Agents

Tell an AI agent everything it needs to know to use Agent Bits.

Machine-readable utilities and datasets for AI agents.

## Discover capabilities

GET https://agentbits.dev/catalog.json

Each capability includes name, description, use_when, do_not_use_when,
input/output JSON Schema, HTTP binding, MCP tool name, pricing, and payment metadata.

## Connect via MCP

https://agentbits.dev/mcp

Example client config:

```json
{
  "mcpServers": {
    "agentbits": {
      "url": "https://agentbits.dev/mcp"
    }
  }
}
```

Use Streamable HTTP. Protocol methods are JSON-RPC POST requests to `/mcp`.

## REST API

OpenAPI: https://agentbits.dev/openapi.json
Versioned routes: https://agentbits.dev/v1/...

## MCP registries

- Official MCP Registry manifest: https://agentbits.dev/server.json (`io.github.rwaldman/agentbits`)
- Smithery server card: https://agentbits.dev/.well-known/mcp/server-card.json
- Directory checklist: https://agentbits.dev/docs/mcp-registries.md

## Documentation

- Concise index: https://agentbits.dev/llms.txt
- Full docs: https://agentbits.dev/llms-full.txt
- Human docs: https://agentbits.dev/docs/
- Tools: https://agentbits.dev/tools/
- Datasets: https://agentbits.dev/datasets/

## Payments

Paid capabilities use x402.
No account. No API key. No signup. Agents can pay programmatically.

When a paid resource is requested without payment, the service returns HTTP 402 with:

- protocol: x402
- network: Base (`eip155:8453`)
- currency: USDC
- amount / price
- machine-readable `accepts` / `X-PAYMENT-REQUIRED`

After payment, retry the same request with the payment credential.

### Current paid capabilities

- `countries` — 0.001 USDC — https://agentbits.dev/datasets/countries
- `countries_bulk` — 0.001 USDC — https://agentbits.dev/tools/countries-bulk

## Capability index

### base64_decode

Decode a Base64 string into UTF-8 text and report invalid payloads as errors when recovering embedded credentials, tokens, or transport-encoded content.

Use when:
- Decode this Base64 string to UTF-8 text
- Recover plain text from a Base64-encoded payload
- Check whether a Base64 string is valid and decode it

Do not use when:
- Encode plain text to Base64 (use base64_encode)
- Decode percent-encoded URL components (use url_decode)
- Decrypt ciphertext—Base64 decoding is not decryption

Docs: https://agentbits.dev/tools/base64-decode

### base64_encode

Convert a UTF-8 string into standard Base64 when you need a portable text encoding for credentials, binary-safe transport, or embedding data in JSON/HTTP fields.

Use when:
- Encode this UTF-8 string as Base64
- Convert plain text into standard Base64 for transport
- Produce a Base64 representation of a credential or payload string

Do not use when:
- Decode Base64 back to text (use base64_decode)
- Percent-encode URL components (use url_encode)
- Hash or encrypt data for security—Base64 is encoding only

Docs: https://agentbits.dev/tools/base64-encode

### countries_bulk

Download the complete versioned countries dataset as JSON for caching, offline use, or multi-country analysis when a single country_lookup call is not enough.

Use when:
- Download the full countries dataset as JSON
- Cache the complete versioned countries snapshot for offline use
- Analyze or filter many countries without repeated single-code lookups

Do not use when:
- Look up metadata for a single country by ISO code (use country_lookup instead)
- Look up one currency or language code (use currency_lookup / language_lookup)
- Fetch live geopolitical or exchange-rate feeds

Docs: https://agentbits.dev/tools/countries-bulk

### country_lookup

Resolve an ISO 3166-1 alpha-2 country code (for example CA, US, JP) to official name, region, currency, calling code, languages, and related country metadata when you already have the two-letter code.

Use when:
- What currency and calling code does country code JP use?
- Get official name, region, and languages for ISO country CA
- Look up standardized metadata for a two-letter ISO 3166-1 country code

Do not use when:
- Download the full countries dataset for offline or multi-country use (use countries_bulk)
- Look up currency symbol or decimals by ISO 4217 code alone (use currency_lookup)
- Search for a country when you only know its English name and not the ISO code

Docs: https://agentbits.dev/tools/country-lookup

### currency_lookup

Resolve an ISO 4217 currency code such as USD, EUR, or JPY to its name, symbol, decimal places, and which countries use it when you need currency metadata rather than a live exchange rate.

Use when:
- What is the symbol and number of decimal places for EUR?
- Which countries use currency code JPY?
- Get ISO 4217 name and metadata for USD

Do not use when:
- Convert amounts between currencies or fetch live FX rates
- Find which currency a country uses when you only have a country code (use country_lookup)
- Validate payment-card-like numbers (use luhn_validate)

Docs: https://agentbits.dev/tools/currency-lookup

### http_status_lookup

Explain what a numeric HTTP status code such as 404 or 429 means by returning its standard reason phrase and a short description for debugging or API responses.

Use when:
- What does HTTP status 404 mean?
- Get the standard name and description for status code 429
- Explain an HTTP response code returned by an API

Do not use when:
- Decide whether a request succeeded without needing the status name
- Look up MIME types or content-type headers (use mime_lookup)
- Diagnose TLS, DNS, or network failures that are not HTTP status codes

Docs: https://agentbits.dev/tools/http-status-lookup

### isbn_validate

Verify whether an ISBN-10 or ISBN-13 passes checksum rules and return normalized digits when checking book identifiers before catalog or purchase flows.

Use when:
- Is this ISBN valid?
- Check the checksum for an ISBN-13 book identifier
- Normalize and validate an ISBN-10 or ISBN-13 string

Do not use when:
- Look up book title, author, or cover metadata from an ISBN
- Validate UUIDs (use uuid_validate) or payment-card Luhn numbers (use luhn_validate)
- Validate arbitrary barcode formats that are not ISBN-10/13

Docs: https://agentbits.dev/tools/isbn-validate

### json_validate

Parse a string as JSON to confirm it is well-formed and return a normalized representation when possible before further processing or storage.

Use when:
- Is this string valid JSON?
- Parse and normalize a JSON payload before processing
- Check whether agent or user-supplied text is well-formed JSON

Do not use when:
- Validate against a specific JSON Schema or OpenAPI model beyond well-formedness
- Encode or decode Base64 (use base64_encode / base64_decode)
- Validate UUID or ISBN identifier formats

Docs: https://agentbits.dev/tools/json-validate

### language_lookup

Resolve an ISO 639-1 language code such as en, fr, or ja to its English name and native name when you need language metadata from a two-letter code.

Use when:
- What language does ISO 639-1 code ja refer to?
- Get the native name for language code fr
- Resolve a two-letter language code to its English and native names

Do not use when:
- Translate text between languages
- Detect the language of arbitrary free-form text
- Look up country languages from a country code (use country_lookup)

Docs: https://agentbits.dev/tools/language-lookup

### luhn_validate

Run the Luhn checksum on a numeric string such as a payment-card-like identifier to verify the check digit before accepting or storing the value.

Use when:
- Does this number pass a Luhn check?
- Validate a payment-card-like identifier checksum
- Verify a numeric ID that uses a Luhn check digit

Do not use when:
- Charge a card, tokenize payments, or call a payment processor
- Validate ISBNs (use isbn_validate) or UUIDs (use uuid_validate)
- Look up currency metadata (use currency_lookup)

Docs: https://agentbits.dev/tools/luhn-validate

### mime_lookup

Map a file extension such as webp or png, or a MIME type string, to curated Content-Type metadata when setting headers, validating uploads, or choosing a media type.

Use when:
- What MIME type should I use for a .webp file?
- Look up metadata for Content-Type application/json
- Resolve a file extension to the correct MIME type for an upload or response header

Do not use when:
- Sniff or detect MIME type from raw file bytes
- Encode or decode Base64 file payloads (use base64_encode / base64_decode)
- Look up DNS top-level domain metadata (use tld_lookup)

Docs: https://agentbits.dev/tools/mime-lookup

### timestamp_convert

Convert Unix epoch seconds or milliseconds to ISO-8601, or an ISO-8601 datetime to Unix epoch values, when bridging APIs that disagree on time formats.

Use when:
- Convert this Unix timestamp to ISO-8601
- Turn an ISO-8601 datetime into epoch milliseconds
- Bridge APIs that mix Unix seconds and ISO-8601 strings

Do not use when:
- Convert a datetime between IANA timezones while preserving the instant (use timezone_convert)
- Convert length, mass, or temperature units (use unit_convert)
- Interpret relative phrases like 'next Tuesday' or 'in 3 hours'

Docs: https://agentbits.dev/tools/timestamp-convert

### timezone_convert

Convert an ISO-8601 datetime from one IANA timezone to another while preserving the same instant, including daylight-saving-aware wall times such as Toronto to Tokyo.

Use when:
- What time is 3pm Toronto in Tokyo?
- Convert an ISO-8601 datetime from America/New_York to Europe/London
- Show the same instant in another IANA timezone with DST-aware offsets

Do not use when:
- Only convert between Unix epoch and ISO-8601 without changing timezone (use timestamp_convert)
- Convert length, mass, or temperature units (use unit_convert)
- Guess a city timezone from a postal address without an IANA zone id

Docs: https://agentbits.dev/tools/timezone-convert

### tld_lookup

Identify what a DNS top-level domain such as com, io, or ai is classified as and commonly used for when classifying domains or answering TLD questions.

Use when:
- What kind of TLD is .io?
- Is .ai a country-code or generic top-level domain?
- Get curated metadata for DNS TLD com

Do not use when:
- Check whether a full domain name is registered or available
- Resolve DNS records or WHOIS ownership
- Look up MIME types for file extensions (use mime_lookup)

Docs: https://agentbits.dev/tools/tld-lookup

### unit_convert

Convert a numeric value between supported length, mass, or temperature units—for example miles to kilometers or Celsius to Fahrenheit—when you need a deterministic unit conversion.

Use when:
- Convert 10 miles to kilometers
- What is 25°C in Fahrenheit?
- Convert a mass value between kilograms and pounds

Do not use when:
- Convert currencies or fetch exchange rates (use currency_lookup for metadata only)
- Convert timestamps or timezones (use timestamp_convert / timezone_convert)
- Convert unsupported unit categories outside length, mass, and temperature

Docs: https://agentbits.dev/tools/unit-convert

### url_decode

Decode a percent-encoded URL component into plain text when reading query parameters, path segments, or form values that contain escaped characters.

Use when:
- Decode this percent-encoded URL component
- Convert %20-style escapes back to plain text
- Recover the original string from an encoded query parameter

Do not use when:
- Percent-encode text for a URL (use url_encode)
- Decode Base64 payloads (use base64_decode)
- Parse HTML entities that are not URL percent-encoding

Docs: https://agentbits.dev/tools/url-decode

### url_encode

Apply encodeURIComponent-style percent-encoding so query parameters, path segments, or form values are safe to place in a URL.

Use when:
- Percent-encode this string for a query parameter
- Make a path segment URL-safe with encodeURIComponent-style encoding
- Encode special characters before inserting text into a URL

Do not use when:
- Decode a percent-encoded string (use url_decode)
- Encode binary data as Base64 (use base64_encode)
- Build or rewrite a full absolute URL structure beyond component encoding

Docs: https://agentbits.dev/tools/url-encode

### uuid_validate

Check whether a string is a well-formed UUID and, when recognizable, report its version and variant so you can accept or reject identifier inputs confidently.

Use when:
- Is this string a valid UUID?
- What version and variant is this UUID?
- Validate a UUID before using it as a primary key or request id

Do not use when:
- Generate a new UUID
- Validate ISBNs or other non-UUID identifiers (use isbn_validate)
- Validate JSON structure (use json_validate)

Docs: https://agentbits.dev/tools/uuid-validate

Catalog version: 0.3.0
