# Payments

Agent Bits capabilities may be:

- free
- paid through a machine-payment protocol adapter

## Design intent

Payment is an access-policy concern and a **discovery feature**, not only a billing mechanism.

Agents should:

1. discover pricing and payment metadata from catalog/docs;
2. invoke the capability;
3. satisfy any machine-readable payment challenge;
4. retry/continue according to the protocol response.

## x402 discovery metadata

Paid capabilities publish payment fields such as:

```json
{
  "payment": {
    "protocol": "x402",
    "network": "eip155:8453",
    "currency": "USDC",
    "price": "0.001",
    "account_required": false,
    "api_key_required": false,
    "signup_required": false,
    "notes": "No account. No API key. No signup. Agents can pay programmatically via x402."
  }
}
```

**No account. No API key. No signup. Agents can pay programmatically.**

## 402 responses

Unpaid requests receive HTTP `402` with an informative body, for example:

- human summary of price and network
- `protocol: x402`
- `currency: USDC`
- `network` / Base label
- machine-readable `accepts` plus `X-PAYMENT-REQUIRED`
- explicit retry instruction after payment

The agent should not need to leave the request to understand what happened.

## Current paid capabilities

- `countries_bulk` / `GET /v1/datasets/countries/v1.json` — `0.001 USDC` per request on Base mainnet

### Payment succeeds, execution fails

If payment verification succeeds but capability execution fails, Agent Bits returns the execution error and includes payment receipt metadata when available. It does not automatically refund or credit. Settlement signatures are not replayable.

## Status

Paid access uses the x402 protocol adapter in production. Development/testing may use a mock adapter on test networks.
