import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/features/proofpath/pages";
export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Build My Profile | ProofPath" },
      {
        name: "description",
        content:
          "Organise your professional experience, education and skills without requiring certificates.",
      },
      { property: "og:title", content: "Build My Profile | ProofPath" },
      {
        property: "og:description",
        content:
          "Organise your professional experience, education and skills without requiring certificates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProfilePage,
});
