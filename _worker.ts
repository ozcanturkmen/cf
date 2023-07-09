import type {
  CfProperties,
  ExecutionContext,
  Request,
} from "@cloudflare/workers-types";
import apiRouter from "./workers/routes";

// Export a default object containing event handlers
export default {
  // The fetch handler is invoked when this worker receives a HTTP(S) request
  // and should return a Response (optionally wrapped in a Promise)

  // eslint-disable-next-line @typescript-eslint/require-await
  async fetch(
    request: Request,
    env: CfProperties<unknown>,
    ctx: ExecutionContext
  ): Promise<Response | undefined> {
    // You'll find it helpful to parse the request.url string into a URL object. Learn more at https://developer.mozilla.org/en-US/docs/Web/API/URL
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    const url: URL = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      // You can also use more robust routing
      return apiRouter.fetch(request, env, ctx) as Promise<Response>;
    } else return new Response(null, { status: 200 });
  },
};
