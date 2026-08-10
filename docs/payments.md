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

## Status

No paid capabilities are published yet.
