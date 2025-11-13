import EditUser from "@/pages/EditUser";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/edituser")({
  component: EditUser,
  validateSearch: (search: Record<string, unknown>) => ({
    id: search.id ? Number(search.id) : undefined,
  }),
});
