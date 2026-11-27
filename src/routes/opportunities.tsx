import { createFileRoute } from "@tanstack/react-router";
import { OpportunitiesPage } from "@/features/proofpath/pages";
export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunity Pathways | ProofPath" },
      {
        name: "description",
        content:
          "Explore illustrative pathways to employment, mentorship and professional training.",
      },
      { property: "og:title", content: "Opportunity Pathways | ProofPath" },
      {
        property: "og:description",
        content:
          "Explore illustrative pathways to employment, mentorship and professional training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OpportunitiesPage,
});
