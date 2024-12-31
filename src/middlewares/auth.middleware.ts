import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse,
} from "next/server";
import type { CustomMiddleware } from "./types";

export const withAuthMiddleware = (middleware: CustomMiddleware) => {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const { value: token } = request.cookies.get("token") ?? {};

    const passThroughRoute = absoluteRoutes.find((route) =>
      request.nextUrl.pathname.includes(route)
    );
    if (token) {
      if (passThroughRoute) {
        return NextResponse.redirect(new URL("/admin", request.url).toString());
      }

      return middleware(request, event, response);
    }

    if (!passThroughRoute) {
      return NextResponse.redirect(
        new URL("/auth/login", request.url).toString()
      );
    }

    return response;
  };
};

const absoluteRoutes = ["/auth/login", "/auth/register"];
