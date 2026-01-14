import { router as rutt } from "https://deno.land/x/rutt/mod.ts";

// -----------------------------
// Route definitions (generic)
// -----------------------------
const defs = [];
console.log("MAIN.TS IS RUNNING");

function route(definition) {
  defs.push(definition);
}

// Example route
route({
  method: "GET",
  path: "/hello",
  handler: () => "Hello from Pogo",
});

// -----------------------------
// Compiler: generic → Rutt table
// -----------------------------
function compileToRutt(defs) {
  const table = {};

  for (const def of defs) {
    const { method, path, handler } = def;
    const methods = Array.isArray(method) ? method : [method];

    for (const m of methods) {
      table[m] ??= {};
      table[m][path] = () => new Response(handler());
    }
  }

  return table;
}

// -----------------------------
// Build router + serve
// -----------------------------
const table = compileToRutt(defs);
const handle = rutt(table);

Deno.serve(handle);
