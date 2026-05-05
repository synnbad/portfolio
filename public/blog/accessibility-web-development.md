---
title: "Accessibility Work Is Workflow Work"
date: "2025-09-18"
description: "A practical note on treating accessibility as part of CMS and web operations."
tags: ["Accessibility", "CMS", "WCAG"]
published: true
---

Accessibility work is easier to sustain when it is treated as part of the publishing workflow, not a last-minute audit. In CMS migrations and web-system maintenance, the same issues tend to repeat: headings drift, link text becomes vague, images lose context, and content structures stop matching how people navigate.

## What I Check First

My first pass usually looks for:

- heading hierarchy
- keyboard navigation
- link text clarity
- color contrast risk
- form labels and instructions
- alt text strategy
- focus states
- CMS-specific patterns that contributors can actually maintain

## Why CMS Context Matters

A remediation recommendation is only useful if the team can apply it in the system they use. Drupal, WordPress, Omeka, and Umbraco each shape the contributor experience differently. Good accessibility work has to respect that context.

## The Maintenance Test

The test I care about is simple: can the next person publish or update content without reintroducing the same barrier? If not, the fix probably needs a clearer pattern, better documentation, or a workflow change.
