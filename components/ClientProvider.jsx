"use client";
import { NextIntlProvider } from "next-intl";

export default function ClientProvider({ children, messages, locale }) {
  return (
    <NextIntlProvider messages={messages} locale={locale}>
      {children}
    </NextIntlProvider>
  );
}
