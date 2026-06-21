# AI_LOG.md

## Tools Used

- Claude (Anthropic) — used throughout for code review, bug fixes, restyling components, and debugging.
- OMDb API (omdbapi.com) — used instead of TMDB as the data source. Stated here and in the README.

## Best Prompts

**1. "I am using Next.js 15 (App Router), JavaScript, Axios, Tailwind CSS, and OMDb API. The assignment requires exactly 12 movies per page, but OMDb returns 10 results per API page. Design a custom pagination system that maps my UI pages (12 movies each) to OMDb API pages (10 movies each). Example: UI Page 1 should show movies 1-12, UI Page 2 should show movies 13-24, UI Page 3 should show movies 25-36. Provide the implementation and explain the algorithm."**
This worked well because it gave the full stack context up front and a concrete worked example of the mapping I needed, instead of just saying "pagination is broken." Spelling out the UI-page-to-API-page numbers made it easy to get back an algorithm I could actually verify by hand against the example before trusting it.

**2. "I am developing a Next.js Movie Discovery App and TMDB API requests are timing out. Error: curl: (28) Failed to connect to api.themoviedb.org port 443 after 21319 ms. My environment: Windows 11, Node.js, Next.js, Axios, Browser internet works normally, TMDB API key is valid. Help me identify the root cause. For each possible cause: explain why it could happen, give the exact command to test it, explain what output indicates success or failure, provide the fix."**
Structuring the prompt as "list causes, with a test command and pass/fail criteria for each" turned a vague network error into a methodical checklist I could work through myself, rather than getting one guess at a time. This is also what led to the decision to switch to OMDb instead of continuing to fight TMDB connectivity on this network.

## What I Fixed Manually

The AI's first version of the pagination logic (`hasNext={movies.length > 0}`) was wrong — it meant "Next" was enabled any time the current page had results at all, with no real check for whether a next page existed, and it didn't enforce the spec's "exactly 12 results per page" since OMDb's search endpoint only returns 10 per page natively. I had it rebuild this properly: fetching two adjacent OMDb pages and slicing exactly 12 results, using OMDb's `totalResults` field to compute real `hasNext`/`hasPrev` flags. I reviewed and tested this logic myself rather than assuming it worked, since incorrect pagination would have been a direct R1 violation.

OMDb's search endpoint returns a fixed 10 results per page with no parameter to change that — it's a hard constraint of the API, not something fixable in code alone. I had to catch this myself and decide on the two-page-fetch-and-slice approach to still satisfy the brief's "exactly 12 per page" requirement, rather than assuming the AI's first pagination draft would naturally produce 12.
