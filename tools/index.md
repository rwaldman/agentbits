# Tools

Canonical capability pages for Agent Bits tools.

- [base64_decode](/tools/base64-decode) — Decode a Base64 string into UTF-8 text and report invalid payloads as errors when recovering embedded credentials, tokens, or transport-encoded content.
- [base64_encode](/tools/base64-encode) — Convert a UTF-8 string into standard Base64 when you need a portable text encoding for credentials, binary-safe transport, or embedding data in JSON/HTTP fields.
- [countries_bulk](/tools/countries-bulk) — Download the complete versioned countries dataset as JSON for caching, offline use, or multi-country analysis when a single country_lookup call is not enough.
- [country_lookup](/tools/country-lookup) — Resolve an ISO 3166-1 alpha-2 country code (for example CA, US, JP) to official name, region, currency, calling code, languages, and related country metadata when you already have the two-letter code.
- [currency_lookup](/tools/currency-lookup) — Resolve an ISO 4217 currency code such as USD, EUR, or JPY to its name, symbol, decimal places, and which countries use it when you need currency metadata rather than a live exchange rate.
- [http_status_lookup](/tools/http-status-lookup) — Explain what a numeric HTTP status code such as 404 or 429 means by returning its standard reason phrase and a short description for debugging or API responses.
- [isbn_validate](/tools/isbn-validate) — Verify whether an ISBN-10 or ISBN-13 passes checksum rules and return normalized digits when checking book identifiers before catalog or purchase flows.
- [json_validate](/tools/json-validate) — Parse a string as JSON to confirm it is well-formed and return a normalized representation when possible before further processing or storage.
- [language_lookup](/tools/language-lookup) — Resolve an ISO 639-1 language code such as en, fr, or ja to its English name and native name when you need language metadata from a two-letter code.
- [luhn_validate](/tools/luhn-validate) — Run the Luhn checksum on a numeric string such as a payment-card-like identifier to verify the check digit before accepting or storing the value.
- [mime_lookup](/tools/mime-lookup) — Map a file extension such as webp or png, or a MIME type string, to curated Content-Type metadata when setting headers, validating uploads, or choosing a media type.
- [timestamp_convert](/tools/timestamp-convert) — Convert Unix epoch seconds or milliseconds to ISO-8601, or an ISO-8601 datetime to Unix epoch values, when bridging APIs that disagree on time formats.
- [timezone_convert](/tools/timezone-convert) — Convert an ISO-8601 datetime from one IANA timezone to another while preserving the same instant, including daylight-saving-aware wall times such as Toronto to Tokyo.
- [tld_lookup](/tools/tld-lookup) — Identify what a DNS top-level domain such as com, io, or ai is classified as and commonly used for when classifying domains or answering TLD questions.
- [unit_convert](/tools/unit-convert) — Convert a numeric value between supported length, mass, or temperature units—for example miles to kilometers or Celsius to Fahrenheit—when you need a deterministic unit conversion.
- [url_decode](/tools/url-decode) — Decode a percent-encoded URL component into plain text when reading query parameters, path segments, or form values that contain escaped characters.
- [url_encode](/tools/url-encode) — Apply encodeURIComponent-style percent-encoding so query parameters, path segments, or form values are safe to place in a URL.
- [uuid_validate](/tools/uuid-validate) — Check whether a string is a well-formed UUID and, when recognizable, report its version and variant so you can accept or reject identifier inputs confidently.
