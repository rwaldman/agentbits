# countries_bulk

Retrieve the full versioned countries dataset used by Agent Bits country lookups. Use when an agent needs bulk offline country metadata rather than a single country lookup.

## What it does

Retrieve the full versioned countries dataset used by Agent Bits country lookups. Use when an agent needs bulk offline country metadata rather than a single country lookup.

## When an agent should use it

Use this tool when you need the complete countries dataset for a specific version (for caching, offline use, or multi-country analysis) instead of looking up one country code at a time.

## Input

See the hosted OpenAPI document and MCP tool schema for the canonical input schema.

## Output

Machine-readable JSON. See OpenAPI / MCP schema for fields.

## Errors

Stable machine-readable error codes such as `INVALID_INPUT` and `NOT_FOUND`.

## HTTP

`GET https://agentbits.dev/v1/datasets/countries/v1.json`

## MCP

Server: `https://agentbits.dev/mcp`  
Tool: `countries_bulk`

## Pricing

0.001 USDC per request via x402 on eip155:84532

## Examples

_See hosted service examples as they are published._

## Limitations

- Paid capability. Unpaid requests receive HTTP 402 / payment challenge.
- Returns the curated Agent Bits countries dataset, not a live feed.

## Version

1
