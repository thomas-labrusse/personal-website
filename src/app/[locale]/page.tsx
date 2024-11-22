import { useTranslations } from "next-intl";
import { Box, Container, Typography } from "@mui/material";
import ProjectCard from "@/app/ui/project/ProjectCard";
import { PROJECTS } from "@/app/projects";
import { setRequestLocale } from "next-intl/server";

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations("Home");
  setRequestLocale(params.locale);
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
