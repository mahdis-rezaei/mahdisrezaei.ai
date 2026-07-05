import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/building";
import { CaseStudy } from "@/components/case-study";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return {
    title: study.title,
    description: study.tagline,
    alternates: { canonical: `/building/${slug}` },
  };
}

export default async function BuildingCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();
  return <CaseStudy study={study} />;
}
