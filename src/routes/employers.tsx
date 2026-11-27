import { createFileRoute } from "@tanstack/react-router";
import { EmployerPage } from "@/features/proofpath/pages";
export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "Employer & Mentor Portal | ProofPath" },
      {
        name: "description",
        content: "Explore clearly labelled demonstration candidates and their Evidence Passports.",
      },
      { property: "og:title", content: "Employer & Mentor Portal | ProofPath" },
      {
        property: "og:description",
        content: "Explore clearly labelled demonstration candidates and their Evidence Passports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmployerPage,
});
