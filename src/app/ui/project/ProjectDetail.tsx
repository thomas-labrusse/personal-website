"use client";

import { Project } from "@/app/projects";
import { Locale } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Carousel from "@/app/ui/carousel/Carousel";
import Box from "@mui/material/Box";
import { Button, Chip, Typography } from "@mui/material";
import StackList from "./StackList";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Projects.ProjectDetail");
  const router = useRouter();
  const {
    name,
    projectType,
    longDescription,
    techDescription,
    externalLink,
    images,
    stack,
  } = project;

  const onButtonClick = () => {
    router.back();
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{
          alignSelf: "flex-start",
          marginBottom: "1rem",
        }}
        onClick={onButtonClick}
      >
        {t("back")}
      </Button>
      <Carousel images={images} options={{ loop: true }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "1.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography variant="h1">{name}</Typography>
            <Chip
              label={projectType[locale]}
              color="primary"
              size="small"
              variant={projectType.type === "hobby" ? "outlined" : "filled"}
            />
          </Box>
          <p>{longDescription[locale]}</p>
          {externalLink && (
            <a
              target="_blank"
              href={externalLink}
              style={{
                textDecoration: "underline",
              }}
            >
              {t("visitSite")}
            </a>
          )}
          <StackList stack={stack} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            backgroundColor: "primary.main",
            padding: "1rem",
            borderRadius: "1rem",
          }}
        >
          <BuildCircleOutlinedIcon
            fontSize="large"
            sx={{
              color: "white",
            }}
          />
          <Typography variant="body1" color="#fff">
            {techDescription[locale]}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
