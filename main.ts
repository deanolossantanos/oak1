import { Router } from "https://deno.land/x/rutt/mod.ts";

const router = new Router();

// Basic route
router.get("/", () => new Response("Hello from Rutt!"));

// Functional pattern matching
router.get("/hello/:name", ({ params }) =>
  new Response(`Hello ${params.name}`)
);

// Query params
router.get("/search", ({ url }) => {
  const q = url.searchParams.get("q") ?? "nothing";
  return new Response(`You searched for: ${q}`);
});

// JSON API
router.post("/api/data", async ({ request }) => {
  const body = await request.json();
  return new Response(JSON.stringify({ received: body }), {
    headers: { "Content-Type": "application/json" }
  });
});

// Fallback route
router.all("*", () => new Response("Not found", { status: 404 }));

export default (req: Request) => router.handle(req);
