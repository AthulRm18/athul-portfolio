import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { getProjectBySlug, projects } from "@/lib/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Athul R Mohan`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <CaseStudyLayout project={project} />
      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
        <Footer />
      </div>
    </>
  );
}
