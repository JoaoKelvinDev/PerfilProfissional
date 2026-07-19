import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
  }),
  component: Index,
});

function Index() {
  return <Landing />;
}
