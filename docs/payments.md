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

The initial paid-access adapter is expected to use x402 on supported networks.

Development and testing use test networks. Production payment details will be published intentionally when paid capabilities launch.

## Important notes

- Not every capability will be paid.
- Pricing is part of the public contract for each paid capability.
- Ambiguous billing behavior is considered a defect.

## Current paid capabilities

- `countries_bulk` / `GET /v1/datasets/countries/v1.json`

Unpaid requests receive HTTP `402` with a machine-readable payment challenge.

### Payment succeeds, execution fails

If payment verification succeeds but capability execution fails, Agent Bits returns the execution error and includes payment receipt metadata when available. It does not silently invent refunds or credits.

## Status

Paid access uses protocol adapters. Unpaid requests receive a machine-readable payment challenge. When payment is configured for production, Agent Bits verifies and settles through an x402 facilitator and returns receipt metadata on success. Development/testing may use a mock adapter on test networks. Production recipient/facilitator configuration is operator-managed.
