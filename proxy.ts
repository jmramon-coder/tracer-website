import { NextResponse, type NextRequest } from "next/server"

const APP_HOSTS = new Set(["app.tracersecurity.ca", "www.app.tracersecurity.ca"])
const NOINDEX_VALUE = "noindex, nofollow, noarchive"

function localeForPath(pathname: string) {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en"
}

function isAppHost(hostname: string) {
  return APP_HOSTS.has(hostname.toLowerCase().split(":")[0])
}

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-tracer-locale", localeForPath(request.nextUrl.pathname))

  const host = request.headers.get("host") || request.nextUrl.hostname

  if (isAppHost(host) && request.nextUrl.pathname === "/robots.txt") {
    return new NextResponse("User-agent: *\nDisallow: /\n", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": NOINDEX_VALUE,
      },
    })
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  if (isAppHost(host)) {
    response.headers.set("X-Robots-Tag", NOINDEX_VALUE)
  }

  return response
}

export const config = {
  matcher: [
    "/robots.txt",
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|mp4)$).*)",
  ],
}
