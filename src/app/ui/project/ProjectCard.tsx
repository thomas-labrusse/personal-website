"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Avatar,
} from "@mui/material";
import { Locale, useRouter } from "@/i18n/routing";
import { Project } from "@/app/projects";
import { useLocale } from "next-intl";
import styles from "@/app/ui/project/ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  const locale = useLocale() as Locale;
  const { name, slug, featureImage, description, stack } = project;

  const handleCardClick = () => {
    router.push(`/projects/${slug}`);
  };
  return (
    <Card
      sx={{ display: "flex", mb: 4, width: "100%" }}
      className={styles.card}
      onClick={() => handleCardClick()}
    >
      <CardMedia
        component="img"
        sx={{ width: 360, height: 270 }} // 4:3 aspect ratio
        image={featureImage}
        alt={name}
      />
      {/* <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}> */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          width: "100%",
        }}
      >
        <Box>
          <Typography
            component="div"
            variant="h5"
            sx={{
              mb: 1,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description[locale]}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "0.7rem" }}>
          {stack.map((tech) => (
            <Chip
              key={tech.name}
              avatar={<Avatar src={tech.icon} />}
              label={tech.name}
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
      {/* </Box> */}
    </Card>
  );
}
