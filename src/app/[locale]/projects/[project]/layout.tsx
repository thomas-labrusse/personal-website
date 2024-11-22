import { PROJECTS } from "@/app/projects";
import { Container } from "@mui/material";
import { setRequestLocale } from "next-intl/server";

export const dynamicParams = true;

export async function generateStaticParams() {
  const params = PROJECTS.map((project) => project.slug);

  return params;
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { project: string; locale: string };
}) {
  setRequestLocale(params.locale);
  return <Container disableGutters>{children}</Container>;
}
