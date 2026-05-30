export default function CaseStudyLoading() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-24 animate-pulse">
      <div className="h-4 w-20 bg-surface-elevated rounded mb-12" />
      <div className="h-10 w-2/3 bg-surface-elevated rounded mb-4" />
      <div className="h-4 w-24 bg-surface-elevated rounded mb-10" />
      <div className="space-y-16">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4 pb-16 border-b border-border">
            <div className="h-3 w-24 bg-surface-elevated rounded" />
            <div className="h-4 w-full max-w-xl bg-surface-elevated rounded" />
            <div className="h-4 w-5/6 max-w-lg bg-surface-elevated rounded" />
          </div>
        ))}
      </div>
    </main>
  );
}
