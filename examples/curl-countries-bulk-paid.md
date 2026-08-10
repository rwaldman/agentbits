# Example: paid countries bulk download

Unpaid request:

```bash
curl -i https://agentbits.dev/v1/datasets/countries/v1.json
```

Expect HTTP `402` with a machine-readable payment challenge.

After satisfying the payment protocol challenge for the hosted environment, retry with the payment credential headers required by the active adapter (x402 `PAYMENT-SIGNATURE` in production configurations).
