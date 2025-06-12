import { updateSession } from "@/utils/supabase/middleware";
import { type NextRequest, NextResponse } from "next/server";

const publicPaths = ["/about", "/contact", "/services"];
const authPaths = ["/sign-in", "/sign-up"];

export async function middleware(request: NextRequest) {
  const { origin, pathname, search, searchParams } = request.nextUrl;
  const { res, user } = await updateSession(request);

  if (pathname === "/") return res;

  // If user is logged in and tries to access auth pages
  if (user && authPaths.some((path) => pathname.startsWith(path))) {
    const returnUrl = decodeURIComponent(searchParams.get("returnUrl") || "");
    return NextResponse.redirect(new URL(returnUrl, origin));
  }

  // If user is not logged in and tries to access protected routes
  if (
    !user &&
    !publicPaths.some((path) => pathname.startsWith(path)) &&
    !authPaths.some((path) => pathname.startsWith(path))
  ) {
    const returnUrl = encodeURIComponent(pathname + search);
    return NextResponse.redirect(
      new URL(`/sign-in?returnUrl=${returnUrl}`, origin)
    );
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (SEO)
     * - sitemap.xml (SEO)
     * - site.webmanifest (SEO)
     * - monitoring (analytics)
     * Excludes files with the following extensions for static assets:
     * - svg
     * - png
     * - jpg
     * - jpeg
     * - pdf
     * - gif
     * - webp
     */

    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|site.webmanifest|monitoring|.*\\.(?:svg|png|jpg|jpeg|pdf|gif|webp)$).*)",
  ],
};
