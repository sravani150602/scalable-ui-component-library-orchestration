# Scalable UI Component Library & Orchestration Layer

[![CI](https://github.com/sravani150602/scalable-ui-component-library-orchestration/actions/workflows/ci.yml/badge.svg)](https://github.com/sravani150602/scalable-ui-component-library-orchestration/actions/workflows/ci.yml)

**Built by [Sravani Elavarthi](https://github.com/sravani150602)**

A production-style React and TypeScript workspace demonstrating how a reusable UI component system and Node.js orchestration layer eliminate repeated data-shaping code across six independently lazy-loaded feature modules.

## Highlights

- Strictly typed Button, Card, DataTable, Metric, and StatusBadge primitives.
- Six modules: Catalog, Analytics, Workflows, Customers, Billing, and Settings.
- REST and GraphQL adapters normalize different responses into one entity contract.
- Zustand manages normalized entities, selection, and immutable status updates.
- React.lazy, Suspense, memoization, and Vite chunks optimize delivery and rendering.
- Node.js/Express exposes REST, GraphQL, and health endpoints.
- 200+ Vitest cases exercise shared components and a six-module interaction matrix.
- A 150-interaction performance test calculates p95 and enforces a 60 ms CI budget.
- Docker Compose runs the Nginx UI and orchestration service.

## Architecture

~~~mermaid
flowchart LR
  R[REST sources] --> O[Node orchestration]
  G[GraphQL sources] --> O
  O --> N[Typed normalizers]
  N --> Z[Zustand entity store]
  Z --> F[6 lazy feature modules]
  F --> C[Shared component library]
~~~

The orchestration boundary prevents feature components from knowing whether data arrived through REST or GraphQL. Both adapters produce NormalizedResult, so modules consume stable IDs and entity maps without duplicating transformation logic.

## Technology stack

| Layer | Technology | Responsibility |
|---|---|---|
| UI | React 19, TypeScript | Typed components and feature modules |
| Build | Vite | Development, production bundling, code splitting |
| State | Zustand | Normalized state and actions |
| Orchestration | Node.js, Express, GraphQL | Upstream aggregation and API boundary |
| Quality | Vitest, Testing Library, V8 | Unit, interaction, matrix, and performance testing |
| Delivery | Docker, Nginx, GitHub Actions | Reproducible builds and CI |

## Six feature modules

| Module | Purpose |
|---|---|
| Catalog | Product discovery and inventory views |
| Analytics | Reporting and KPI surfaces |
| Workflows | Operational process tracking |
| Customers | Customer lifecycle views |
| Billing | Invoice and account views |
| Settings | Configuration and access surfaces |

Each module is loaded through a dynamic import. Adding a seventh module requires only a feature definition and lazy import; the table, metrics, normalization, and store logic remain shared.

## Quick start

    git clone https://github.com/sravani150602/scalable-ui-component-library-orchestration.git
    cd scalable-ui-component-library-orchestration
    npm ci
    npm run server

In a second terminal:

    npm run dev

Open http://localhost:5173. Vite proxies API requests to port 3001.

## API contracts

REST endpoints:

    GET /api/rest/entities
    GET /health

GraphQL:

    query { entities { id name status score updatedAt } }

Both transports become the same typed entity map and ordered ID list before reaching UI modules.

## Testing and performance

    npm run lint
    npm test
    npm run build

Vitest uses V8 coverage with 90% thresholds for lines, functions, and statements. The suite collects over 200 cases, primarily from a six-module by 34-interaction matrix plus component, normalization, and performance tests.

The performance test runs 150 normalization interactions concurrently, sorts observed durations, calculates p95, and fails above 60 ms. This is a reproducible client-orchestration guard, not a universal browser/network claim. Production render claims should include Chrome traces, hardware, browser version, dataset size, and raw results.

## Optimization design

- **Code splitting:** every feature is a separate lazy chunk.
- **Memoization:** tables, columns, and derived lists avoid unnecessary recalculation.
- **Normalized state:** a single entity map replaces six copies of response-shaping logic.
- **Stable contracts:** REST and GraphQL adapters are interchangeable.
- **Vendor chunk:** React, ReactDOM, and Zustand cache separately from feature code.
- **Focused subscriptions:** components read only the Zustand state they need.

## Docker

    docker compose up --build

The optimized UI is served by Nginx on port 8080. The Node orchestration API runs on port 3001.

## CI/CD

Every push and pull request performs dependency installation, ESLint, Vitest with coverage thresholds, strict TypeScript compilation, Vite production build, Docker image build, and coverage artifact upload.

## Repository map

    src/components/   reusable typed UI primitives
    src/features/     six lazy feature modules
    src/lib/          REST and GraphQL normalization
    src/store/        Zustand state
    src/test/         component, matrix, and performance tests
    server/           Node orchestration service

## Resume interpretation

The repository verifies 200+ cases and the under-60 ms p95 orchestration budget in CI. Reduced duplicate logic is demonstrated structurally by six feature modules importing one shared panel and component library. Any production percentage should be supported by a tagged baseline and raw benchmark artifacts.

## Author

**Sravani Elavarthi** — [GitHub profile](https://github.com/sravani150602)

## License

MIT
