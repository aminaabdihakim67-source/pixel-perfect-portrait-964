import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/features/proofpath/pages";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ProofPath | ProofPath" },
      {
        name: "description",
        content:
          "Learn how ProofPath supports skilled refugees in Dadaab and aligns with credential recognition and professional networks.",
      },
      { property: "og:title", content: "About ProofPath | ProofPath" },
      {
        property: "og:description",
        content:
          "Learn how ProofPath supports skilled refugees in Dadaab and aligns with credential recognition and professional networks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
