import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/features/proofpath/pages";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProofPath — Your skills deserve to be seen." },
      {
        name: "description",
        content:
          "Make your professional experience visible. Create a skills profile, demonstrate your abilities and build an Evidence Passport.",
      },
      { property: "og:title", content: "ProofPath — Your skills deserve to be seen." },
      {
        property: "og:description",
        content:
          "Make your professional experience visible. Create a skills profile, demonstrate your abilities and build an Evidence Passport.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
