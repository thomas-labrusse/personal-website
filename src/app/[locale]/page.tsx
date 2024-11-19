import { useTranslations } from "next-intl";
import { Box, Container } from "@mui/material";
import ProjectCard from "@/app/ui/project/ProjectCard";
import { PROJECTS } from "@/app/projects";

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
      <p>{t("title")}</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
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
