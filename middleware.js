import { locales, defaultLocale } from "./messages/locales";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  // Si l'URL ne commence pas par une locale, on redirige
  if (!locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return Response.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}
export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
