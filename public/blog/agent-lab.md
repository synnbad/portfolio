---
title: "agent-lab: Making AI-Assisted Work Repeatable"
date: "2026-05-28"
description: "A documentation-first operating system for agents, workflows, guardrails, and approval-gated delivery with versioned prompts, handoffs, and reviews."
tags: ["AI", "Workflow", "Automation", "Agents"]
published: true
---

AI-assisted work breaks on the second run. Steps, safety checks, and handoff notes stay in a chat window, so the next person cannot repeat the work.

I built [agent-lab](https://github.com/synnbad/agent-lab) as a Markdown-based operating system for reusable agents, skills, workflows, prompts, and guardrails—a structured repo you can version, review, and improve.

## The problem

When agent work is informal:

- roles blur between planning, implementation, and review
- safety rules get skipped under time pressure
- outputs vary because acceptance criteria are missing
- handoffs break because context lives in one session
- audits are hard because allowed actions are unclear

I wanted agent-assisted delivery to behave like operations: defined scope, guardrails, and artifacts another person can inspect.

## What I built

agent-lab organizes professional AI work into reusable layers:

- **Agents** — who does the work and what they are responsible for
- **Skills** — reusable capabilities (accessibility review, deployment checks, data validation, prompt hardening)
- **Workflows** — repeatable multi-step processes with clear entry and exit
- **Prompts** — activation packs that wire agents, skills, and workflows together
- **Guardrails and contracts** — safety policies, output shapes, and scope limits
- **Evals and observability** — rubrics, test cases, and run-log patterns for improvement over time

The repo also includes practical delivery support: templates, integration adapter notes, threat models, orchestration rules, and portfolio/client-website prompt packs I use in real projects.

**Documentation-first** is the core design choice. The system works with any AI platform and defines how work should run before any tool executes it.

## What I achieved

- **Repeatable agent behavior** — instructions live in versioned files
- **Clear separation of phases** — planning, implementation, critique, and review use different agents with different constraints
- **Safer defaults** — guardrails and approval-gated patterns keep automation within scope
- **Better handoffs** — workflows produce structured artifacts the next person can continue
- **Portfolio and client work integration** — the same repo powers site refreshes, accessibility checks, and delivery reviews I run locally

Recent work in the repo defines a **controlled autonomy** path: observe, draft, and dry-run locally. External mutations stay blocked until explicitly approved. Agents stay useful, bounded, and auditable.

## Impact

I use agent-lab daily for repetitive tasks. It brings the same repeatability I build into automation and data-quality work: easier to run, explain, and hand off.

GitHub: [agent-lab](https://github.com/synnbad/agent-lab)
