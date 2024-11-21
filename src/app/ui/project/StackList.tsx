"use client";

import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useTranslations } from "next-intl";

interface StackListProps {
  stack: { name: string; icon: string }[];
}

export default function StackList({ stack }: StackListProps) {
  const t = useTranslations("Projects.StackList");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "0.7rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
      mt={3}
    >
      <Typography variant="h6">{t("madeWith")}:</Typography>
      {stack.map((tech) => (
        <Chip
          key={tech.name}
          avatar={<Avatar src={tech.icon} />}
          label={tech.name}
          variant="outlined"
        />
      ))}
    </Box>
  );
}
