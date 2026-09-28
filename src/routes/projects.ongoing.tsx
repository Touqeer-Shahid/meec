import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/ongoing")({
  beforeLoad: () => {
    throw redirect({ to: "/projects", search: { filter: "ongoing" } });
  },
});
