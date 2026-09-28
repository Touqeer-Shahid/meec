import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/completed")({
  beforeLoad: () => {
    throw redirect({ to: "/projects", search: { filter: "completed" } });
  },
});
