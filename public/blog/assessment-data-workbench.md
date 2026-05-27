---
title: "Assessment Data Workbench: What I Built and What It Achieved"
date: "2026-05-27"
description: "A local-first Streamlit workbench to review assessment evidence, catch data issues early, and draft reports with data kept on local machines."
tags: ["Python", "Data", "Streamlit", "Assessment"]
published: true
---

Library assessment work arrives in pieces: survey exports, usage data, comments, and draft reports. Teams need one place to review the full evidence set.

I built the [Assessment Data Workbench](https://github.com/synnbad/Library-Assessment-Decision-Support-System) (`Library-Assessment-Decision-Support-System`) as a local-first Python app for reviewing, cleaning, and questioning assessment data before reporting.

## The problem

Teams needed a way to:

- import mixed assessment files in one workflow
- catch duplicates and weak metadata before analysis
- review evidence in one place
- keep sensitive data on local machines
- draft reports grounded in what the data supports

Manual spreadsheet review was slow, inconsistent, and hard to hand off.

## What I built

A Streamlit workbench with:

- **Imports and local storage** — SQLite-backed workflow for survey results, usage exports, and comments
- **Duplicate checks** — flag repeated records before they skew review
- **Metadata review** — validate fields and structure before deeper analysis
- **Local retrieval** — ChromaDB + Ollama for question-and-answer over stored evidence on local machines
- **Report drafting** — outline findings from available data only

Stack: Python, Streamlit, SQLite, ChromaDB, Ollama, Pandas, NLP.

## What I achieved

- **One review surface** for evidence that used to live in separate files
- **Earlier error detection** through duplicate and metadata checks
- **Privacy-conscious workflow** — data stays local; review runs on local machines only
- **Clearer handoff** — reviewers can see what was checked, what failed, and what supports each claim
- **Grounded reporting** — draft output tied to imported evidence, reducing overstatement risk

## Impact

The workbench turned fragmented assessment inputs into a repeatable local process: import, validate, review, question, then draft.

GitHub: [Library-Assessment-Decision-Support-System](https://github.com/synnbad/Library-Assessment-Decision-Support-System)
