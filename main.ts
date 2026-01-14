// main.ts

const html = (body: string) =>
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Deno Deploy Website</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        margin: 0;
        padding: 2rem;
        background: #0f172a;
        color: #e5e7eb;
      }
      .card {
        max-width: 640px;
        margin: 0 auto;
        background: #020617;
        border-radius: 0.75rem;
        padding: 2rem;
        box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(148, 163, 184, 0.25);
      }
      a {
        color: #38bdf8;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.75rem;
        border-radius: 999px;
        background: rgba(15, 118, 110, 0.25);
        color: #a5f3fc;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: .08em;
      }
      .muted {
        color: #9ca3af;
        font-size: 0.9rem;
        line-height: 1.5;
      }
      .routes {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(75, 85, 99, 0.7);
        font-size: 0.9rem;
      }
      code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        background: rgba(15, 23, 42, 0.9);
        padding: 0.1rem 0.3rem;
        border-radius: 0.25rem;
      }
    </style>
  </head>
  <body>
    <main class="card">
      <div class="pill">Deno Deploy · Simple Site</div>
      <h1 style="margin: 1.25rem 0 0.75rem;">Hello from Deno Deploy</h1>
      <p class="muted">
        This page is served by a single <code>main.ts</code> file using the standard
        <code>fetch</code> handler — no frameworks, no extra config.
      </p>
      <div class="routes">
        <p><strong>Available routes:</strong></p>
        <ul style="margin: 0.5rem 0 0 1.25rem;">
          <li><code>/</code> — this page</li>
          <li><code>/time</code> — returns the current server time as JSON</li>
        </ul>
      </div>
    </main>
  </body>
</html>`;

// Single entrypoint for Deno Deploy
export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);

  // Simple JSON route
  if (url.pathname === "/time") {
    return new Response(
      JSON.stringify({ now: new Date().toISOString() }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      },
    );
  }

  // Default: serve HTML page
  return new Response(html(""), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
