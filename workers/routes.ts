import type { Request } from "@cloudflare/workers-types";
import { createCors } from "itty-cors";
import { Router } from "itty-router";
import { error, json } from "itty-router-extras";

// create the CORS pair
const { preflight, corsify } = createCors({
  methods: ["GET", "HEAD", "POST", "OPTIONS"],
  origins: ["https://cf-ej5.pages.dev"],
  // origins: ['http://127.0.0.1:5500'],
  headers: {},
});

// now let's create a router (note the lack of "new")
const router = Router();

router
  // embed preflight upstream to handle all OPTIONS requests
  .all("*", preflight);

// GET collection index
router.get("/api/todos", () => {
  const data = {
    hello: "world",
  };
  return data;
});

// GET item
router.get(
  "/api/todos/:id",
  ({ params }) => new Response(`Todo #${params.id}`)
);

// POST to the collection (we'll use async here)
router.post("/api/todos", async (request) => {
  const content: object = (await request.json()) as object;

  return new Response("Creating Todo: " + JSON.stringify(content));
});

// 404 for everything else
router.all("*", () => new Response("Not Found.", { status: 404 }));

export default {
  fetch: (request: Request, ...args: unknown[]) => {
    return (
      router
        .handle(request, ...args)

        // transform unformed responses
        .then(json)

        // catch any errors
        .catch((err) => error(500, (err as Error).stack))

        // add CORS headers to all requests,
        // including errors
        .then(corsify)
    );
  },
};
