# Jarvis ↔ WFM AI Headquarters integration contract (draft v0.1)

Status: design only. No backend, authentication or real AI execution is connected yet.

## Roles
- Jarvis: mobile-first PWA command interface, voice/text interaction, notifications.
- Headquarters: interactive office, task monitoring, visual review, approvals.
- Obsidian: approved canonical project knowledge and handovers, not a live task queue.
- Shared service (future): authenticated task and event API, with persistence and audit history.

## Proposed minimal task object
```json
{
  "id": "uuid",
  "title": "Prepare a fictional WFM forecast example",
  "department": "wfm",
  "type": "forecast",
  "status": "queued",
  "source": "jarvis",
  "created_at": "ISO-8601",
  "updated_at": "ISO-8601",
  "assignee_id": null,
  "progress_percent": 0,
  "output_ref": null,
  "approval": "pending",
  "mode": "simulation"
}
```

## States
queued → assigned → working → review → approved | revision_requested | cancelled | failed.
Only authenticated user approval may mark an item approved. Each transition must record actor and time.

## API proposal
- POST /v1/tasks (idempotency key)
- GET /v1/tasks?since=...
- GET /v1/tasks/{id}
- GET /v1/tasks/{id}/events
- POST /v1/tasks/{id}/review
- GET /v1/health

Use short-lived user sessions, least-privilege scopes, rate limits, input validation, CORS allowlist and audit records. Do not put secrets in GitHub Pages JavaScript. Never trust a task's claimed completion without a verifiable output.

## Integration stages
1. Maintain working offline/local demo, explicitly labelled simulation.
2. Add opt-in backend and account authentication.
3. Synchronise task state between Jarvis and Headquarters.
4. Attach verifiable output artifacts and human review.
5. Add real execution providers only with explicit permission and supported billing arrangements.

Consumer subscriptions to Claude, ChatGPT and Gemini do not inherently provide programmatic API access. Do not bypass their terms or claim free autonomous execution.

## Next verification
Confirm Jarvis PWA repository and hosting choice with Claude. Agree on this schema before either app implements production task sync. Do not overwrite Obsidian notes or publish externally without approval.
