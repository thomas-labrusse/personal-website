import { PROJECTS } from "@/app/projects";
import { Container } from "@mui/material";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Params = Promise<{ locale: string }>;

export const dynamicParams = true;

export function generateStaticParams() {
  const params = PROJECTS.map((project) => ({ project: project.slug }));

  return params;
}

export default function Layout(props: {
  children: React.ReactNode;
  params: Params;
}) {
  const params = use(props.params);
  setRequestLocale(params.locale);
  return <Container disableGutters>{props.children}</Container>;
}
