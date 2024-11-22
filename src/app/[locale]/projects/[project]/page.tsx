import { PROJECTS } from "@/app/projects";
import ProjectDetail from "@/app/ui/project/ProjectDetail";
import Container from "@mui/material/Container";
import { setRequestLocale } from "next-intl/server";

export const dynamicParams = true;

export async function generateStaticParams() {
  const params = PROJECTS.map((project) => ({ project: project.slug }));

  return params;
}

export default function Page({
  params,
}: {
  params: { project: string; locale: string };
}) {
  setRequestLocale(params.locale);
  const project = PROJECTS.find((p) => p.slug === params.project);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "1rem",
        width: "100%",
        maxWidth: "1024px",
      }}
    >
      <ProjectDetail project={project} />;
    </Container>
  );
}
