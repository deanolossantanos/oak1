import { router } from "https://esm.sh/@hattip/router";
import { compose } from "https://esm.sh/hattip";

const routes = router();

// Basic route
routes.get("/", () => new Response("Hello from Hattip on Deno Deploy!"));

// Example dynamic route
routes.get("/hello/:name", ({ params }) =>
  new Response(`Hello ${params.name}`)
);

// Example JSON API
routes.get("/api/info", () =>
  new Response(
    JSON.stringify({ status: "ok", time: new Date().toISOString() }),
    { headers: { "Content-Type": "application/json" } }
  )
);

// Optional middleware (logging)
const logger = async (ctx, next) => {
  console.log("Request:", ctx.request.method, ctx.request.url);
  return next();
};

// Export a single fetch handler (required by Deno Deploy)
export default compose([logger, routes.buildHandler()]);
