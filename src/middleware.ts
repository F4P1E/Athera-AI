import { updateSession } from "@/utils/supabase/middleware";
import { type NextRequest, NextResponse } from "next/server";

const publicPaths = ["/", "/about", "/contact", "/services"];

const authPaths = ["/sign-in", "/sign-up"];

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const { res, user } = await updateSession(request);

  // If user is logged in and tries to access auth pages
  if (user && authPaths.some((path) => path.startsWith(pathname))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If user is not logged in and tries to access protected routes
  if (
    !user &&
    !publicPaths.some((path) => path.startsWith(pathname)) &&
    !authPaths.some((path) => path.startsWith(pathname))
  ) {
    const returnUrl = encodeURIComponent(pathname + search);
    return NextResponse.redirect(
      new URL(`/sign-in?returnUrl=${returnUrl}`, request.url)
    );
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
