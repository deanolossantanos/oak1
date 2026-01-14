import { Elysia } from "https://esm.sh/elysia";

const app = new Elysia()
  .get("/", () => "Hello World");

export default app.fetch;

