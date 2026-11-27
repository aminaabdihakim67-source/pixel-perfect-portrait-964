import { createFileRoute } from "@tanstack/react-router";
import { PassportPage } from "@/features/proofpath/pages";
export const Route = createFileRoute("/passport")({
  head: () => ({
    meta: [
      { title: "My Evidence Passport | ProofPath" },
      {
        name: "description",
        content:
          "Create and print a structured record of your self-reported experience and prototype skill demonstrations.",
      },
      { property: "og:title", content: "My Evidence Passport | ProofPath" },
      {
        property: "og:description",
        content:
          "Create and print a structured record of your self-reported experience and prototype skill demonstrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PassportPage,
});
