import { NextResponse } from "next/server";

export function middleware(request) {
  const cookie = request.cookies.get("admin-auth");

  if (
    request.nextUrl.pathname.startsWith("/admin/dashboard") &&
    !cookie
  ) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};