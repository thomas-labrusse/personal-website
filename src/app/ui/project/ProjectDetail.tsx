import { Project } from "@/app/projects";
import { Locale } from "@/i18n/routing";
import { useLocale } from "next-intl";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const locale = useLocale() as Locale;
  const { name, description, externalLink } = project;

  return (
    <div>
      <h1>Project: {name}</h1>
      <h1>Locale: {locale}</h1>
      <p>Description: {description[locale]}</p>
      {externalLink && <a>{externalLink}</a>}
    </div>
  );
}
