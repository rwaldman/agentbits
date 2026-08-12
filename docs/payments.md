# Payments

Agent Bits capabilities may be:

- free
- paid through a machine-payment protocol adapter

## Design intent

Payment is an access-policy concern, not a tool-implementation concern.

Agents should:

1. discover pricing from catalog/docs;
2. invoke the capability;
3. satisfy any machine-readable payment challenge;
4. retry/continue according to the protocol response.

## Initial direction

Paid access uses x402 on Base (`eip155:8453`) in production.

Unpaid requests receive HTTP `402` with a machine-readable payment challenge. Clients satisfy the challenge and retry with a payment signature header.

## Important notes

- Not every capability will be paid.
- Pricing is part of the public contract for each paid capability.
- Ambiguous billing behavior is considered a defect.

## Current paid capabilities

- `countries_bulk` / `GET /v1/datasets/countries/v1.json` — `0.001 USDC` per request on Base mainnet

### Payment succeeds, execution fails

If payment verification succeeds but capability execution fails, Agent Bits returns the execution error and includes payment receipt metadata when available. It does not automatically refund or credit. Settlement signatures are not replayable.

## Status

Paid access uses the x402 protocol adapter in production. Development/testing may use a mock adapter on test networks.
