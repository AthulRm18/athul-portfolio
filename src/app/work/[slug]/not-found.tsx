import { EmptyState } from "@/components/ui/EmptyState";

export default function NotFound() {
  return (
    <main className="max-w-6xl mx-auto px-6 min-h-screen flex items-center justify-center py-24">
      <EmptyState
        title="Project not found"
        description="This project doesn't exist yet. Head back to browse your portfolio."
        action={{ label: "Back to projects", href: "/#work" }}
      />
    </main>
  );
}
