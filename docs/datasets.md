# Datasets

Datasets are curated, versioned, machine-readable collections with documented provenance and access methods.

## Access patterns

Where appropriate, Agent Bits may provide:

- lookup APIs
- bulk versioned dataset artifacts

## Versioning

Prefer explicit versions:

```text
/datasets/<name>/v1
```

Unversioned endpoints, if offered, point to the latest compatible version without silently changing meaning.

## Documentation

Each published dataset has a page under [`../datasets/`](../datasets/).

Public pages describe contracts and access methods. They do not embed proprietary dataset contents.

## Published datasets

- [`countries`](../datasets/countries.md) — versioned country metadata (`v1`)
