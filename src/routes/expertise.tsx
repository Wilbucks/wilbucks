import { createFileRoute, redirect } from "@tanstack/react-router";

// Retired page: the preview now has only Home and the two director profiles.
export const Route = createFileRoute("/expertise")({
  beforeLoad: () => { throw redirect({ to: "/", statusCode: 301 }); },
});
