"use client";
import { usePathname, useRouter, routing, Locale } from "@/i18n/routing";
import { Box, Link, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import { Fragment } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locales = routing.locales;
  const locale = useLocale() as Locale;

  const onLocaleClick = (lang: Locale) => {
    router.replace(pathname, { locale: lang });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.8,
      }}
    >
      {locales.map((lang, id) => (
        <Fragment key={lang}>
          <Link
            component="button"
            variant="body1"
            underline="hover"
            color="#fff"
            sx={{
              fontWeight: "bold",
              textDecoration: locale === lang ? "underline" : "none",
            }}
            onClick={() => onLocaleClick(lang)}
          >
            {lang}
          </Link>
          {id !== locales.length - 1 && (
            <Typography variant="body1" color="white">
              |
            </Typography>
          )}
        </Fragment>
      ))}
    </Box>
  );
}
