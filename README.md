# WasteLens — Terranova

WasteLens is the intelligence and operations layer of **Terranova**, an innovation project created by members of **Junior Achievement Nigeria (JAN)**.

## Implemented prototype capabilities

- Predictive hotspot analysis and collection forecasting
- AI-generated operational recommendations
- Runtime waste-event storage and TideTrap telemetry ingestion
- Image upload and computer-vision prototype inference
- Real-time node monitoring with live polling
- Role-based prototype authentication: admin, operator, analyst
- Historical analytics and CSV reporting
- Logistics/SMS provider adapter with a mock provider
- Circular-economy routing from captured material to micro-factory output

## Architecture

This repository is provider-neutral. It contains no deployment-platform analytics SDK or platform-specific runtime code. Standard Next.js route handlers expose the prototype API.

The current store is an in-memory runtime store seeded with TideTrap telemetry. It resets when the server restarts. Replace the store with a durable database for production. The CV and SMS adapters are isolated so they can later be replaced with a trained waste-specific detector and a real messaging/logistics provider.

## Demo accounts

- admin@wastelens.local / admin123
- operator@wastelens.local / operator123
- analyst@wastelens.local / analyst123

These are demonstration credentials only.

## Run

    pnpm install
    pnpm dev

WasteLens is part of the wider **Terranova** project created by members of **Junior Achievement Nigeria (JAN)**.