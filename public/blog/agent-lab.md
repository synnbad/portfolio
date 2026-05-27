---
title: "agent-lab: Making AI-Assisted Work Repeatable"
date: "2026-05-28"
description: "How I built a documentation-first operating system for agents, workflows, guardrails, and approval-gated delivery—so prompts, handoffs, and reviews do not live only in chat."
tags: ["AI", "Workflow", "Automation", "Agents"]
published: true
---

Most AI-assisted work fails the second time you need it. The prompt worked once, but the steps, safety checks, and handoff notes stayed in a chat window. The next person cannot run it the same way.

I built [agent-lab](https://github.com/synnbad/agent-lab) to fix that. It is a Markdown-based operating system for reusable agents, skills, workflows, prompts, and guardrails—a structured repo you can version, review, and improve.

## The problem

When agent work is informal:

- roles blur between planning, implementation, and review
- safety rules are easy to skip under time pressure
- outputs vary because acceptance criteria are not written down
- handoffs break because context lives in one session
- it is hard to audit what the agent was allowed to do

I wanted agent-assisted delivery to behave more like operations: defined scope, guardrails, and artifacts another person can inspect.

## What I built

agent-lab organizes professional AI work into reusable layers:

- **Agents** — who does the work and what they are responsible for
- **Skills** — reusable capabilities (accessibility review, deployment checks, data validation, prompt hardening)
- **Workflows** — repeatable multi-step processes with clear entry and exit
- **Prompts** — activation packs that wire agents, skills, and workflows together
- **Guardrails and contracts** — safety policies, output shapes, and scope limits
- **Evals and observability** — rubrics, test cases, and run-log patterns for improvement over time

The repo also includes practical delivery support: templates, integration adapter notes, threat models, orchestration rules, and portfolio/client-website prompt packs I use in real projects.

A major design choice: **documentation-first**. The system does not require a specific AI platform. It defines how work should run before any tool executes it.

## What I achieved

- **Repeatable agent behavior** — instructions live in versioned files, not disappearing chat history
- **Clear separation of phases** — planning, implementation, critique, and review can use different agents with different constraints
- **Safer defaults** — guardrails and approval-gated patterns reduce “helpful but out of scope” automation
- **Better handoffs** — workflows produce structured artifacts the next person can continue
- **Portfolio and client work integration** — the same repo powers site refreshes, accessibility checks, and delivery reviews I run locally

Recent work in the repo also defines a **controlled autonomy** path: observe, draft, and dry-run locally—while keeping external mutations blocked until explicitly approved. That matches how I actually want to use agents: useful, bounded, and auditable.

## Impact

I use agent-lab daily to perform repetitive tasks.

That is the same principle behind my automation and data-quality projects—make repeated work easier to run, explain, and hand off. agent-lab applies it to agent-assisted delivery itself.

GitHub: [agent-lab](https://github.com/synnbad/agent-lab)
