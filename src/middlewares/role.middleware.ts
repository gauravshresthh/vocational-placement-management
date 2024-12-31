import { cookies } from "next/headers";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { CustomMiddleware } from "./types";
import { ApiResponseType } from "@/lib/apiResponseTypes";

export const withRoleMiddleware = (middleware: CustomMiddleware) => {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    const me = await getMe();

    if (!me) return middleware(request, event, response);

    const currentRoles = me?.payload?.roles?.map((role) => role.slug);
    const path = request?.nextUrl.pathname.split("/")[2];

    //FOR ADMIN
    if (currentRoles?.includes("admin")) {
      if (path?.includes("student")) {
        return NextResponse.redirect(
          new URL("/admin/dashboard", request?.url).toString(),
        );
      }

      return middleware(request, event, response);
    }
    //FOR STUDENT
    if (currentRoles?.includes("student")) {
      if (path?.includes("admin")) {
        return NextResponse.redirect(
          new URL("/student/dashboard", request?.url).toString(),
        );
      }

      return middleware(request, event, response);
    }

    return response;
  };
};

const getMe = async () => {
  const cookiesStore = await cookies(); // Await the cookies() promise.
  const token = cookiesStore.get("token")?.value;
  try {
    const response = await fetch(`${process.env.NEXT_BASE_API_URL}/get-me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return (await response.json()) as ApiResponseType<{
      roles: { id: string; name: string; slug: string }[];
    }>;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
