import { Elysia } from "https://deno.land/x/elysia/mod.ts";

const app = new Elysia()
  .get("/", () => "Hello World");

export default app.fetch;
