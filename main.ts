import { router as rutt } from "https://deno.land/x/rutt/mod.ts";

const defs = {};

function route({ method, path, handler }) {
  defs[method] ??= {};
  defs[method][path] = () => new Response(handler());
}

route({
  method: "GET",
  path: "/hello",
  handler: () => "Hello from Pogo",
});

const handle = rutt(defs);

Deno.serve(handle);
