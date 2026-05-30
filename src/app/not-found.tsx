import { EmptyState } from "@/components/ui/EmptyState";

export default function NotFound() {
  return (
    <main className="max-w-6xl mx-auto px-6 min-h-screen flex items-center justify-center py-24">
      <EmptyState
        title="Page not found"
        description="This page doesn't exist."
        action={{ label: "Back home", href: "/" }}
      />
    </main>
  );
}
