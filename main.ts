import { Elysia } from "https://esm.sh/elysia?target=denonext";

const app = new Elysia()
  .get("/", () => "Hello World");

export default app.fetch;

