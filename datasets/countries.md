# Countries

Versioned curated country metadata dataset used by country_lookup and countries_bulk.

Canonical name: `countries`

## When to use this

- Download the full countries reference dataset
- Need every ISO country record in one request

## Do not use when

- Look up a single country by ISO code (use country_lookup, free)

## Access

- Bulk/versioned HTTP: `GET https://agentbits.dev/v1/datasets/countries/v1.json`

- Related lookup tools may be free even when bulk access is paid.

## Pricing

paid 0.001 USDC/request via x402

## Payment discovery

```json
{
  "protocol": "x402",
  "network": "eip155:8453",
  "currency": "USDC",
  "price": "0.001",
  "amount": "0.001",
  "unit": "request",
  "account_required": false,
  "api_key_required": false,
  "signup_required": false,
  "notes": "No account. No API key. No signup. Agents can pay programmatically via x402."
}
```

No account. No API key. No signup. Agents can pay programmatically via x402.

## Version

1

## Limitations

- Bulk download is paid.
- Single-country lookup via country_lookup remains free.
