---
titulo: MatterIA
resumen: Science hub I founded, with AI as a copilot, our own GPUs and a training campus. Self-hosted infrastructure in production, with three services online.
privado: true
sitio: https://matter-ia.dev
stack: [TypeScript, Docker, NodeBB, Moodle, n8n, MCP]
estado: activo
anio: 2026
destacado: true
orden: 2
---

MatterIA is a science hub I founded, built on self-hosted infrastructure rather
than third-party services. It is in production, with three public services
online.

## Services

- **[matter-ia.dev](https://matter-ia.dev)**: the public landing page, in
  several languages.
- **[hub.matter-ia.dev](https://hub.matter-ia.dev)**: the community hub, built
  on NodeBB with a custom layer on top.
- **[campus.matter-ia.dev](https://campus.matter-ia.dev)**: the training campus,
  on Moodle.

## Infrastructure

The full deployment is self-hosted: Docker containers, tunnels to expose the
services, automated backups, and agentic workflows orchestrated with n8n and
custom MCP servers.

Choosing our own infrastructure over SaaS was deliberate: it keeps research
data under our control and lets us run our own GPU workloads without depending
on a third party's pricing.

The code lives in the [matter-ia](https://github.com/matter-ia) organization
and is private.
