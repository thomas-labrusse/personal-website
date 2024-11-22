import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import "@/app/globals.css";
import React from "react";
import { getMessages, setRequestLocale } from "next-intl/server";
import Header from "@/app/ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import { myTheme } from "@/app/theme";
import styles from "@/app/rootlayout.module.css";
import Footer from "@/app/ui/Footer";

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Thomas Labrusse",
  description: "TL - Portfolio",
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  setRequestLocale(params.locale);
  const { locale } = params;
  const messages = await getMessages();
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={myTheme}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
