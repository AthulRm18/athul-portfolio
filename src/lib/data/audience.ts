export type AudienceId =
  | "anyone"
  | "recruiters"
  | "engineers"
  | "researchers";

export type HeroVariant =
  | "default"
  | "recruiters"
  | "engineers"
  | "researchers";

export interface AudienceCopy {
  id: AudienceId;
  label: string;
  hero: HeroVariant;
  subtext: string;
}

/** Hero copy variants — Engineers view uses code-infused typography */
export const audiences: AudienceCopy[] = [
  {
    id: "anyone",
    label: "For anyone",
    hero: "default",
    subtext:
      "I'm a CS undergrad who got tired of toy problems — so I started building the kind of systems that make you think about edge cases at 2am. ML pipelines, chaos-tested infra, geospatial forecasting. The kind of work that has to survive contact with reality.",
  },
  {
    id: "recruiters",
    label: "Recruiters",
    hero: "recruiters",
    subtext:
      "No full-time experience yet — but a track record of shipping systems that do something real: self-healing Kubernetes infra, end-to-end ML pipelines, a Chrome extension reranking live Amazon results. Open to internships and new-grad roles in ML or backend.",
  },
  {
    id: "engineers",
    label: "Engineers",
    hero: "engineers",
    subtext:
      "College-built, production-minded. PyTorch · FastAPI · Kubernetes · Docker · H3 · Prometheus. I think about data pipelines as products and treat leakage prevention like a first-class concern. Happy to dig into architecture and tradeoffs.",
  },
  {
    id: "researchers",
    label: "Researchers",
    hero: "researchers",
    subtext:
      "Self-driven experiments with reproducible pipelines, ablations, and honest limitation sections. Interested in research internships — especially anything at the intersection of ML systems and the real world.",
  },
];
