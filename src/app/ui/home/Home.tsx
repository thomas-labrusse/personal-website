import { PROJECTS } from "@/app/projects";
import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import ProjectCard from "@/app/ui/project/ProjectCard";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "1rem",
        width: "100%",
      }}
    >
      <Typography variant="h1" textAlign={"center"}>
        {t("title")}
      </Typography>
      <Typography
        variant="caption"
        textAlign={"center"}
        sx={{
          marginBottom: "2rem",
        }}
      >
        {t("greeting")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          flexWrap: "wrap",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Box>
    </Container>
  );
}
