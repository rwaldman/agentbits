# Versioning

## API and tools

Breaking changes require one of:

- a new major version
- a new tool name
- an explicit migration period

Do not silently alter:

- input meaning
- output field semantics
- error semantics
- pricing
- payment requirements

## Compatibility guidance

- Adding an optional input is generally compatible.
- Removing an input, changing its type, or changing output semantics is potentially breaking.

## Datasets

- Record-only updates generally increment dataset revision.
- Schema-breaking dataset changes require an explicit compatibility decision.
- Published dataset versions are immutable in meaning.

## Catalog

`catalog.json` carries a catalog `version` and per-capability `version` fields.
