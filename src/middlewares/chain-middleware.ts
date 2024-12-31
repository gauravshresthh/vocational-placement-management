import type { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import type { CustomMiddleware, MiddlewareFactory } from "./types";

export function chainMiddleware(
  functions: MiddlewareFactory[],
  index = 0,
): CustomMiddleware {
  const current = functions[index];

  if (current) {
    const next = chainMiddleware(functions, index + 1);
    return current(next);
  }

  return (
    _request: NextRequest,
    _event: NextFetchEvent,
    response: NextResponse,
  ) => {
    return response;
  };
}
