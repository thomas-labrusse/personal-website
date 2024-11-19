import { PROJECTS } from "@/app/projects";
import ProjectDetail from "@/app/ui/project/ProjectDetail";
// import { Locale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

// export const dynamicParams = false;

export async function generateStaticParams() {
  const params = PROJECTS.map((project) => project.slug);

  return params;
}

export default function Page({
  params,
}: {
  params: { project: string; locale: string };
}) {
  setRequestLocale(params.locale);
  //   const locale = params.locale as Locale;
  const project = PROJECTS.find((p) => p.slug === params.project);
  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} />;
}
