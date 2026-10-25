# WFM AI Headquarters V8 — Cyberpunk District

## What is new
- Navigable actual Three.js 3D district: eight open-plan buildings, 15 stylized human-like workers per department (120 total), each with desk, monitor and chair area.
- Orbit, zoom and pan with touch/mouse via OrbitControls. Click worker or workstation monitor to inspect.
- Workers wander near their desks when idle, walk to seats when assigned, and react with humorous speech bubbles.
- Task packets move from the central router to a workstation. Task stages are visible, including interim work text and deterministic completed output.
- Human approval and revision requests, task history saved in localStorage, JSON export, copy and download output.
- Responsive mobile task panel, graphics-quality toggle, pause/resume.

## Run
Because this uses ES modules, serve the folder over HTTP (e.g. `python -m http.server 8000` then visit `http://localhost:8000`). On a phone, deploy the folder to GitHub Pages/Cloudflare Pages or another static HTTPS host. The browser must support WebGL and have internet access to load the Three.js library from jsDelivr.

## Honest limitations
This is a real navigable 3D scene, but the characters are lightweight procedurally modeled stylized people rather than professionally rigged/animated game assets. Agent actions and emotions are simulations, not actual AI execution. Work outputs are real local calculations or clearly labeled templates, not external model results or rendered videos. No AI accounts, APIs, third-party apps or publishing are connected. One workstation per employee (120) is rendered, which may strain older phones; toggle low detail if needed. The initial mobile view is a wide overview; pinch to zoom into rooms.

## Next production milestones
Replace procedural humanoids with licensed optimized glTF avatars and animation clips, add pathfinding and interdepartmental travel, implement real artifact adapters with verified connectors, add workstation UI textures that show live actual artifacts, performance test on Android, and implement explicit user approvals for publishing.
