# Example: country_lookup via HTTP

```bash
curl -sS https://agentbits.dev/v1/countries/CA
```

Expected shape:

```json
{
  "code": "CA",
  "code3": "CAN",
  "name": "Canada",
  "currency": "CAD",
  "calling_code": "+1"
}
```
