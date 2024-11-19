"use client";

import { useRouter } from "@/i18n/routing";
import styles from "@/app/ui/Header.module.css";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import LocaleSwitcher from "./LocaleSwitcher";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className={styles.header}>
      <Box
        component="div"
        onClick={handleLogoClick}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          padding: "0.5rem",
          marginRight: "2rem",
          color: "white",
        }}
      >
        <DocumentScannerIcon fontSize={"large"} color="inherit" />
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: "primary.contrastText",
          }}
        >
          {t("websiteName")}
        </Typography>
      </Box>
      <LocaleSwitcher />
    </header>
  );
}
