---
title: "Assessment Data Workbench: What I Built and What It Achieved"
date: "2026-05-27"
description: "How I built a local-first Streamlit workbench to review assessment evidence, catch data issues early, and draft reports without sending sensitive data to the cloud."
tags: ["Python", "Data", "Streamlit", "Assessment"]
published: true
---

Library assessment work often arrives in pieces: survey exports, usage data, comments, and draft reports. Each file can be valid on its own and still hard to review as one evidence set.

I built the [Assessment Data Workbench](https://github.com/synnbad/Library-Assessment-Decision-Support-System) (`Library-Assessment-Decision-Support-System`) to fix that. It is a local-first Python app for reviewing, cleaning, and questioning assessment data before anything gets published.

## The problem

Teams needed a way to:

- import mixed assessment files without losing context
- catch duplicates and weak metadata before analysis
- review evidence in one place
- keep sensitive data off external services
- draft reports grounded in what the data actually supports

Manual spreadsheet review was slow, inconsistent, and easy to hand off badly.

## What I built

A Streamlit workbench with:

- **Imports and local storage** — SQLite-backed workflow for survey results, usage exports, and comments
- **Duplicate checks** — flag repeated records before they skew review
- **Metadata review** — validate fields and structure before deeper analysis
- **Local retrieval** — ChromaDB + Ollama for question-and-answer over stored evidence without cloud upload
- **Report drafting** — outline findings from available data, not assumptions

Stack: Python, Streamlit, SQLite, ChromaDB, Ollama, Pandas, NLP.

## What I achieved

- **One review surface** for evidence that used to live in separate files
- **Earlier error detection** through duplicate and metadata checks
- **Privacy-conscious workflow** — data stays local; cloud tools are not required for core review
- **Clearer handoff** — reviewers can see what was checked, what failed, and what supports each claim
- **Grounded reporting** — draft output tied to imported evidence, reducing overstatement risk

## Impact

The workbench turned fragmented assessment inputs into a repeatable local process: import, validate, review, question, then draft. That is the outcome I care about — not a demo for its own sake, but a tool another person can run when assessment season starts again.

GitHub: [Library-Assessment-Decision-Support-System](https://github.com/synnbad/Library-Assessment-Decision-Support-System)
