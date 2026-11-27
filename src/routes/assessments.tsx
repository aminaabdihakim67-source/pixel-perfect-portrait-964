import { createFileRoute } from "@tanstack/react-router";
import { AssessmentPage } from "@/features/proofpath/pages";
export const Route = createFileRoute("/assessments")({
  head: () => ({
    meta: [
      { title: "Practical Assessments | ProofPath" },
      {
        name: "description",
        content:
          "Demonstrate teaching, administration, translation and IT skills with transparent prototype assessments.",
      },
      { property: "og:title", content: "Practical Assessments | ProofPath" },
      {
        property: "og:description",
        content:
          "Demonstrate teaching, administration, translation and IT skills with transparent prototype assessments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssessmentPage,
});
