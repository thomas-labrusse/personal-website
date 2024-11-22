"use client";

import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          backgroundColor: "primary.main",
          color: "white",
          width: "100%",
          height: "5rem",
          marginTop: "5rem",
        }}
      >
        <p>{t("createdBy")}</p>
        <p>© 2024</p>
      </Box>
    </footer>
  );
}
