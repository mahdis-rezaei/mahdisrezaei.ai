import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { workStudies } from "@/content/work-studies";
import { CaseStudy } from "@/components/case-study";

export function generateStaticParams() {
  return Object.keys(workStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = workStudies[slug];
  if (!study) return {};
  return {
    title: study.title,
    description: study.tagline,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = workStudies[slug];
  if (!study) notFound();
  return <CaseStudy study={study} backHref="/work" backLabel="Professional" />;
}
