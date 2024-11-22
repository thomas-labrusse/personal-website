"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Chip,
} from "@mui/material";
import { Locale, useRouter } from "@/i18n/routing";
import { Project } from "@/app/projects";
import { useLocale } from "next-intl";
import StackList from "./StackList";

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  const locale = useLocale() as Locale;
  const { name, slug, featureImage, projectType, description, stack } = project;

  const handleCardClick = () => {
    router.push(`/projects/${slug}`);
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "360px",
        height: "520px",
      }}
    >
      <CardActionArea
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        onClick={() => handleCardClick()}
      >
        <CardMedia
          component="img"
          sx={{ width: 360, height: 270 }} // 4:3 aspect ratio
          image={featureImage}
          alt={name}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            width: "100%",
            height: "100%",
            p: 2,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component="div"
                variant="h3"
                sx={{
                  mb: 1,
                }}
              >
                {name}
              </Typography>
              <Chip
                label={projectType[locale]}
                color="primary"
                size="small"
                variant={projectType.type === "hobby" ? "outlined" : "filled"}
              />
            </Box>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {description[locale]}
            </Typography>
          </Box>
          <StackList stack={stack} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
