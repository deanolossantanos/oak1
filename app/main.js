import pogo from "https://deno.land/x/pogo/main.ts";

const server = pogo.server({ port: 3000 });

server.route({
  method: "GET",
  path: "/hello",
  handler: () => "Hello from Pogo",
});

await server.start();
