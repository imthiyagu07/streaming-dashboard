## AI Usage Report

This document explains how AI tools were used during the development of the **Streaming Dashboard** project.

## Overview

AI (ChatGPT) was used as a **support tool** during development to help with debugging, error explanations, and technical clarifications.
All code in the project was written, structured, and verified manually.

## How AI Assisted

AI was used in the following ways:

1. Debugging Errors

* Understanding error messages related to Next.js App Router, dynamic routes, and TMDB API integration.

* Getting explanations for issues such as:

    * Invalid TMDB IDs

    * Missing environment variables

    * Next.js 16 async params behavior

    * Source map warnings

    * Image domain configuration

2. Clarifying Concepts

AI was used to clarify:

* How to correctly configure Bearer Token authentication for TMDB

* Why params must be awaited in Next.js server components

* Proper folder structure and routing behavior in App Router

* Tailwind CSS utilities for UI alignment and styling

* How scroll hiding, overlays, gradients, and responsiveness work

3. Troubleshooting UI and Styling

AI helped explain:

* Why certain UI elements were misaligned

* How to fix gradient overlays

* How to hide scrollbars while keeping scroll functionality

* How to improve responsiveness on desktop and mobile

4. Asking for Best Practices

AI provided general guidance on:

* Organizing components and folders

* Handling fallback images

* Writing cleaner TypeScript types

* Improving UI polish

## What AI Was Not Used For

* AI did not generate full components or entire pages for copy-paste use.

* AI did not write large chunks of code directly included in the final project.

* All logic, structure, UI, and final code were written and implemented manually.

* AI was not used to auto-generate the main project files.

AI acted only as a debugging assistant and technical explainer, similar to searching documentation or StackOverflow.

## Verification

All code was:

* Tested manually

* Adjusted and implemented by hand

* Reviewed to ensure accuracy, security, and performance

* Fully validated in both development and production builds

No API keys or sensitive information were shared with AI.

Project Links

GitHub Repository: https://github.com/imthiyagu07/streaming-dashboard

Live Deployment (Vercel): https://streaming-dashboard-xi.vercel.app/