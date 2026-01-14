export default function handler(_req: Request): Response {
  return new Response("OK", {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handler(event.request));
});
