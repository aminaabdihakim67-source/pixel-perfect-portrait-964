import { createFileRoute } from "@tanstack/react-router";
import { SkillsPage } from "@/features/proofpath/pages";
export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Discover My Skills | ProofPath" },
      {
        name: "description",
        content:
          "Explore suggested transferable competencies from your work experience in English or Somali.",
      },
      { property: "og:title", content: "Discover My Skills | ProofPath" },
      {
        property: "og:description",
        content:
          "Explore suggested transferable competencies from your work experience in English or Somali.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});
