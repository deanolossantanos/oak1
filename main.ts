import { Router } from "https://deno.land/x/rutt/mod.ts";

const router = new Router();

function route({ method, path, handler }) {
  router.add({
    method,
    pattern: path,
    handler: () => new Response(handler()),
  });
}

route({
  method: "GET",
  path: "/hello",
  handler: () => "Hello from Pogo",
});

Deno.serve((req) => router.handle(req));

