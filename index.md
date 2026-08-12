# Agent Bits

Machine-readable utilities and datasets for AI agents.

https://agentbits.dev

## Capabilities

────────────────────────────────────────

base64_decode
Decode a Base64 string into UTF-8 text and report invalid payloads as errors when recovering embedded credentials, tokens, or transport-encoded content.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/base64-decode

base64_encode
Convert a UTF-8 string into standard Base64 when you need a portable text encoding for credentials, binary-safe transport, or embedding data in JSON/HTTP fields.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/base64-encode

countries_bulk
Download the complete versioned countries dataset as JSON for caching, offline use, or multi-country analysis when a single country_lookup call is not enough.
$0.001 USDC
HTTP · MCP · x402
Docs: https://agentbits.dev/tools/countries-bulk

country_lookup
Resolve an ISO 3166-1 alpha-2 country code (for example CA, US, JP) to official name, region, currency, calling code, languages, and related country metadata when you already have the two-letter code.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/country-lookup

currency_lookup
Resolve an ISO 4217 currency code such as USD, EUR, or JPY to its name, symbol, decimal places, and which countries use it when you need currency metadata rather than a live exchange rate.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/currency-lookup

http_status_lookup
Explain what a numeric HTTP status code such as 404 or 429 means by returning its standard reason phrase and a short description for debugging or API responses.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/http-status-lookup

isbn_validate
Verify whether an ISBN-10 or ISBN-13 passes checksum rules and return normalized digits when checking book identifiers before catalog or purchase flows.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/isbn-validate

json_validate
Parse a string as JSON to confirm it is well-formed and return a normalized representation when possible before further processing or storage.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/json-validate

language_lookup
Resolve an ISO 639-1 language code such as en, fr, or ja to its English name and native name when you need language metadata from a two-letter code.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/language-lookup

luhn_validate
Run the Luhn checksum on a numeric string such as a payment-card-like identifier to verify the check digit before accepting or storing the value.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/luhn-validate

mime_lookup
Map a file extension such as webp or png, or a MIME type string, to curated Content-Type metadata when setting headers, validating uploads, or choosing a media type.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/mime-lookup

timestamp_convert
Convert Unix epoch seconds or milliseconds to ISO-8601, or an ISO-8601 datetime to Unix epoch values, when bridging APIs that disagree on time formats.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/timestamp-convert

timezone_convert
Convert an ISO-8601 datetime from one IANA timezone to another while preserving the same instant, including daylight-saving-aware wall times such as Toronto to Tokyo.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/timezone-convert

tld_lookup
Identify what a DNS top-level domain such as com, io, or ai is classified as and commonly used for when classifying domains or answering TLD questions.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/tld-lookup

unit_convert
Convert a numeric value between supported length, mass, or temperature units—for example miles to kilometers or Celsius to Fahrenheit—when you need a deterministic unit conversion.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/unit-convert

url_decode
Decode a percent-encoded URL component into plain text when reading query parameters, path segments, or form values that contain escaped characters.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/url-decode

url_encode
Apply encodeURIComponent-style percent-encoding so query parameters, path segments, or form values are safe to place in a URL.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/url-encode

uuid_validate
Check whether a string is a well-formed UUID and, when recognizable, report its version and variant so you can accept or reject identifier inputs confidently.
Free
HTTP · MCP
Docs: https://agentbits.dev/tools/uuid-validate

## For agents

───────────

Catalog:
https://agentbits.dev/catalog.json

MCP:
https://agentbits.dev/mcp

OpenAPI:
https://agentbits.dev/openapi.json

Documentation:
https://agentbits.dev/docs/

Agent guide:
https://agentbits.dev/for-agents

Official MCP registry:
https://agentbits.dev/server.json

llms.txt:
https://agentbits.dev/llms.txt

## Payments

Paid capabilities use x402 on Base with USDC.
No account. No API key. No signup. Agents can pay programmatically.

GitHub: https://github.com/rwaldman/agentbits
