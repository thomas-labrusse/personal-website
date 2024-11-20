import { Project } from "@/app/projects";
import { Locale } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Carousel from "@/app/ui/carousel/Carousel";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import StackList from "./StackList";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const locale = useLocale() as Locale;
  const { name, description, longDescription, externalLink, images, stack } =
    project;

  return (
    <div>
      <Carousel images={images} options={{ loop: true }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <Typography variant="h1">{name}</Typography>
        <p>Description: {description[locale]}</p>
        {externalLink && <a>{externalLink}</a>}
        <p>{longDescription[locale]}</p>
        <StackList stack={stack} />
      </Box>
    </div>
  );
}
