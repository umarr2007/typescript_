import { createFileRoute } from "@tanstack/react-router";
import UserDetail from "@/pages/UserDetail"; // pages ichidagi fayl

export const Route = createFileRoute("/userdetail")({
  component: UserDetail,
  validateSearch: (search: Record<string, unknown>) => ({
    id: search.id ? Number(search.id) : undefined,
  }),
});
