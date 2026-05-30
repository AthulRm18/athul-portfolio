export type ProjectCategory =
  | "machine-learning"
  | "kubernetes"
  | "full-stack"
  | "geospatial";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectMediaAsset {
  type: "video" | "gif" | "image";
  src: string;
  poster?: string;
}

export interface ProjectSections {
  overview: string;
  highlights: string[];
  idea: string;
  problem: string;
  thoughtProcess: string;
  architecture: string[];
  results: string;
  limitations: string;
}

export interface Project {
  id: string;
  slug: string;
  index: string;
  title: string;
  tagline: string;
  /** One line for project cards — keep it short */
  hook: string;
  /** Shown as "01 | LABEL" on cards */
  cardLabel: string;
  description: string;
  categories: string[];
  categoryType: ProjectCategory;
  metrics?: ProjectMetric[];
  status: "published" | "coming-soon";
  readTime?: string;
  github?: string;
  event?: string;
  terminalCommand?: string;
  /** Drop files in public/projects/ — see public/projects/README.md */
  media?: ProjectMediaAsset;
  sections: ProjectSections;
}

export const projects: Project[] = [
  {
    id: "2",
    slug: "search-reranker",
    index: "01",
    title: "Search Re-Ranker",
    tagline: "Ecommerce search that weighs trust, not just relevance.",
    hook: "Ranking that weighs trust alongside relevance — down to the browser.",
    cardLabel: "ML · FULL STACK",
    description:
      "What if search optimized for user trust, not just clicks and ads? An end-to-end pipeline with learning-to-rank, live review trust scoring, FastAPI backend, React dashboard, and a Chrome extension that reorders Amazon results with ranking insights.",
    categories: ["Learning-to-Rank", "FastAPI", "React", "Chrome Extension"],
    categoryType: "full-stack",
    metrics: [
      { value: "3", label: "Ranking modes (relevance / trust / balanced)" },
      { value: "E2E", label: "Model → API → UI → browser extension" },
    ],
    status: "published",
    readTime: "7 min",
    github: "https://github.com/AthulRm18/search-reranker",
    terminalCommand: "uvicorn api.main:app --reload",
    media: {
      type: "gif",
      src: "/projects/search-reranker.gif",
    },
    sections: {
      overview:
        "Search Re-Ranker explores a question I find very interesting: what would ecommerce search look like if it optimized more for user trust instead of just clicks, ads, and platform priorities? I built an end-to-end pipeline that combines a learning-to-rank model, trust scoring from live review signals, and a re-ranking layer that balances relevance, trust, and sponsored-result penalties.",
      highlights: [
        "Learning-to-rank model with explicit trust and sponsored penalties",
        "FastAPI backend + React dashboard for ranking modes and tradeoffs",
        "Chrome extension reorders Amazon search results with overlay insights",
        "Multiple ranking modes instead of one \u201cperfect\u201d formula",
        "Pushed beyond \u201ctrain a model and report accuracy\u201d into product thinking",
      ],
      idea:
        "Marketplace search often looks good enough on the surface but is not always aligned with what a user actually wants. A result can be technically relevant while still being misleading, over-sponsored, or backed by suspicious review behavior. I wanted to ask: not just \u201cdoes this match?\u201d but \u201cshould this rank highly for the user?\u201d",
      problem:
        "Most search systems retrieve relevant products, but relevance alone does not always produce the best experience. Low-trust listings, heavy sponsorship, and weak review patterns can still rank highly. This project tries to improve quality by combining relevance with trust-aware signals.",
      thoughtProcess:
        "I approached ranking as a multi-objective challenge. Relevance still matters, but it should not dominate everything else. I built modes where tradeoffs between relevance, trust, and fairness can be controlled and exposed \u2014 ranking as a product decision, not just an ML task.",
      architecture: [
        "Learning-to-rank model for base relevance scoring",
        "Trust heuristics from live review signals",
        "Re-ranking layer with sponsored-result penalties",
        "FastAPI backend serving ranking endpoints",
        "React dashboard for mode selection and transparency",
        "Chrome extension for in-browser Amazon result reordering",
      ],
      results:
        "The system works well as a prototype that demonstrates end-to-end ML product thinking \u2014 from model to API to frontend to a real user workflow in the browser.",
      limitations:
        "Live trust scoring is still heuristic, not a definitive fake-review detector. Browser scraping can break when site structure changes. The full data pipeline is heavier than what is bundled in the repository. Ranking systems are iterative \u2014 shaped by tradeoffs, data quality, and changing interfaces.",
    },
  },
  {
    id: "1",
    slug: "cortex",
    index: "02",
    title: "CorteX",
    tagline: "Self-healing Kubernetes when chaos hits your cluster.",
    hook: "Chaos in, recovery out \u2014 roughly fifteen seconds later.",
    cardLabel: "HACKATHON · KUBERNETES",
    description:
      "Built in 36 hours at Tech Solstice with my teammates \u2014 an end-to-end platform that injects real faults, detects anomalies with Isolation Forest, and triggers self-healing through a custom Kubernetes operator. Recovery in ~15 seconds, zero human intervention.",
    categories: [
      "Kubernetes",
      "Chaos Engineering",
      "Isolation Forest",
      "Prometheus",
    ],
    categoryType: "kubernetes",
    metrics: [
      { value: "~15s", label: "Autonomous recovery time" },
      { value: "36h", label: "Built at Tech Solstice" },
    ],
    status: "published",
    readTime: "6 min",
    github:
      "https://github.com/Floccinauci-nihilipilification/Self_healing_optimizer",
    event: "Tech Solstice \u00b7 36-hour hackathon",
    terminalCommand: "kubectl apply -f chaos/inject-fault.yaml",
    media: {
      type: "video",
      src: "/projects/cortex.mp4",
      poster: "/projects/cortex-poster.jpg",
    },
    sections: {
      overview:
        "CorteX was our attempt to make distributed systems more resilient under failure. We designed an end-to-end platform that injects real faults into a Kubernetes-based microservice application, monitors live telemetry with Prometheus, uses an Isolation Forest model to detect anomalies, and triggers self-healing actions through a custom Kubernetes operator. The entire loop is visualized through a live SRE dashboard.",
      highlights: [
        "Closed the loop between fault injection, anomaly detection, and automated recovery",
        "Custom Kubernetes operator for self-healing actions",
        "Live SRE dashboard with Prometheus telemetry",
        "Isolation Forest ML model for anomaly detection on synthetic telemetry",
        "Built collaboratively under a 36-hour hackathon deadline",
      ],
      idea:
        "Modern systems are good at showing failures, but not always good at responding fast enough. We wanted to move beyond passive monitoring and actually close the loop between detection and recovery \u2014 simulating incidents and recovering from them in a controlled environment.",
      problem:
        "Distributed microservices fail in complex ways. Traditional monitoring alerts humans, but response time still depends on manual intervention. We asked: can we detect abnormal behavior and heal the system automatically before an incident escalates?",
      thoughtProcess:
        "We combined chaos engineering, machine learning, Kubernetes automation, and real-time visualization into one workflow. Instead of building disconnected components, we focused on making them work together as one resilient loop \u2014 fault \u2192 telemetry \u2192 anomaly score \u2192 operator action \u2192 dashboard feedback.",
      architecture: [
        "Kubernetes microservice demo app as the fault target",
        "Chaos injection layer for controlled, real failures",
        "Prometheus for live metrics and telemetry collection",
        "Isolation Forest model trained on synthetic telemetry for anomaly detection",
        "Custom Kubernetes operator to execute self-healing actions",
        "SRE dashboard for real-time visualization of the full recovery loop",
      ],
      results:
        "The system achieved roughly 15-second recovery times with zero human intervention in our demo environment. CorteX reflects strong collaboration, ambitious systems thinking, and the ability to turn a complex idea into a working product under tight time constraints.",
      limitations:
        "The ML model was trained on synthetic telemetry. Healing decisions were partly heuristic. The system was designed around a demo environment rather than production-scale infrastructure \u2014 but even with those tradeoffs, it shows how we think about resilient, autonomous systems.",
    },
  },
  {
    id: "3",
    slug: "surge-engine",
    index: "03",
    title: "Surge Engine",
    tagline: "Forecast city demand before the surge shows up.",
    hook: "Hex-grid forecasts for where demand moves next.",
    cardLabel: "GEOSPATIAL · FORECASTING",
    description:
      "Inspired by how Uber and Swiggy anticipate demand before peaks \u2014 H3 hexagonal indexing, time-series forecasting, and geospatial visualization to predict surge hotspots and guide drivers before congestion forms.",
    categories: ["H3 Geospatial", "Forecasting", "Python", "Visualization"],
    categoryType: "geospatial",
    metrics: [
      { value: "H3", label: "Hexagonal spatial indexing" },
      { value: "Proactive", label: "Demand before peaks, not after" },
    ],
    status: "published",
    readTime: "6 min",
    github: "https://github.com/AthulRm18/surge-engine",
    terminalCommand: "python forecast.py --city grid --horizon 15m",
    media: {
      type: "video",
      src: "/projects/surge-engine.mp4",
    },
    sections: {
      overview:
        "The Surge Demand Intelligence Engine models city demand spatially and temporally using H3 hexagonal indexing, time-series forecasting logic, and geospatial visualization. Instead of treating the city as a flat map, I structured it as a dynamic grid to predict where demand is likely to surge \u2014 and translate that into location-based movement guidance for drivers.",
      highlights: [
        "H3 hex grid for spatial demand representation",
        "Causal pipeline design to avoid future information leakage",
        "Probabilistic forecasting instead of false point certainty",
        "Geospatial visualization from raw data to actionable hotspots",
        "Shift from analytics dashboard to operational decision support",
      ],
      idea:
        "Modern mobility and delivery platforms are prediction systems disguised as consumer apps. They constantly ask: where will demand emerge next? I wanted to build my own version of that intelligence layer.",
      problem:
        "Most systems react once congestion or shortage is already visible. When drivers are positioned badly, customers wait longer and pricing spikes only after the system is under stress. This project tries to make demand handling proactive.",
      thoughtProcess:
        "I treated the city as a living spatial system. H3 indexing gave cleaner geographic units than arbitrary zones. The hard part was temporal: representing moving demand without leaking future information. I focused on a causal pipeline so predictions reflect a realistic deployment scenario.",
      architecture: [
        "H3 hexagonal indexing for spatial demand units",
        "Time-series forecasting with probabilistic outputs",
        "Causal feature pipeline (no future leakage)",
        "Geospatial visualization layer for hotspot mapping",
        "Decision layer: where should a driver go in the next few minutes?",
      ],
      results:
        "A research prototype that combines forecasting, geospatial reasoning, and product-oriented thinking \u2014 moving from \u201chere is a prediction\u201d to \u201chere is where you should go.\u201d",
      limitations:
        "Urban demand is sensitive to weather, events, road conditions, and behavioral shifts \u2014 simulated or incomplete inputs limit accuracy. There is also a gap between a research prototype and a production dispatch system, especially around live data ingestion and operational integration.",
    },
  },
  {
    id: "4",
    slug: "hotel-booking-prediction",
    index: "04",
    title: "Hotel Cancellations",
    tagline: "Predict hotel cancellations before they hit revenue.",
    hook: "Cancellation risk on holdout data \u2014 pipeline built to rerun cleanly.",
    cardLabel: "ML · TABULAR",
    description:
      "A business-focused prediction pipeline \u2014 clean preprocessing, mutual information feature selection, and reproducible sklearn workflows to identify bookings at higher cancellation risk. ~83% accuracy on unseen data.",
    categories: ["Scikit-learn", "Feature Selection", "Pipelines", "Jupyter"],
    categoryType: "machine-learning",
    metrics: [
      { value: "~83%", label: "Accuracy on unseen data" },
      { value: "MI", label: "Mutual information feature selection" },
    ],
    status: "published",
    readTime: "5 min",
    github: "https://github.com/AthulRm18/Hotel-Booking-Prediction",
    terminalCommand: "jupyter notebook hotel_cancellation.ipynb",
    sections: {
      overview:
        "Hotel booking cancellations create uncertainty in revenue planning, room allocation, staffing, and pricing. This project uses historical booking data to identify reservations more likely to be canceled \u2014 with a strong focus on clean preprocessing, feature selection, and leakage-safe model training.",
      highlights: [
        "Structured preprocessing with reproducible sklearn pipelines",
        "Mutual information for principled feature selection",
        "Leakage-safe training \u2014 methodology you can defend",
        "Business-oriented problem: cancellations affect real operations",
        "~83% accuracy on held-out data",
      ],
      idea:
        "I wanted a prediction task with clear economic consequences. Hotel cancellations directly affect occupancy, revenue forecasting, and operational efficiency \u2014 even moderate predictive power can be useful.",
      problem:
        "Hotels need to identify which bookings are at higher risk of cancellation so they can respond through overbooking strategy, pricing adjustments, staffing preparation, or targeted interventions.",
      thoughtProcess:
        "I focused on reliability over complexity. Instead of chasing the most advanced model immediately, I spent more time on preprocessing quality, feature relevance, and leakage prevention. A trustworthy baseline is often more valuable than a flashy but fragile result.",
      architecture: [
        "Historical booking dataset with structured cleaning",
        "Preprocessing pipeline (encoding, scaling, imputation)",
        "Mutual information-based feature selection",
        "Sklearn Pipeline for end-to-end reproducibility",
        "Hold-out evaluation on unseen data",
      ],
      results:
        "A model that performs well on unseen data and provides a practical foundation for demand and capacity planning \u2014 reflecting a mindset where ML helps organizations make better decisions under uncertainty.",
      limitations:
        "83% accuracy is useful but not the whole story. Cancellation behavior shifts with seasonality, market conditions, and policy changes. In production I would add monitoring, periodic retraining, and business-oriented metrics beyond overall accuracy.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const CASE_STUDY_SECTIONS = [
  "Overview",
  "Highlights",
  "Context",
  "Architecture",
  "Results",
] as const;

export type CaseStudySectionId = (typeof CASE_STUDY_SECTIONS)[number];
