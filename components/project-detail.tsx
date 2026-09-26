"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProjectData } from "@/lib/projects-data";
import Navigation from "@/components/navigation";
import ProjectGallery from "@/components/project-gallery";

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="case-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
export default function ProjectDetail({ project }: { project: ProjectData }) {
  const [tab, setTab] = useState("overview");
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      if (
        [
          "overview",
          "methodology",
          "findings",
          "gallery",
          "report",
          "impact",
        ].includes(hash)
      )
        setTab(hash);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  return (
    <>
      <Navigation />
      <main id="main-content" className="page-width case-study">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={15} /> Selected work
        </Link>
        <div className="case-heading">
          <p className="eyebrow section-kicker">
            0{project.id} / {project.category}
          </p>
          <h1>{project.title}</h1>
          <p>{project.fullDescription}</p>
        </div>
        <dl className="case-meta">
          <div>
            <dt>Location</dt>
            <dd>{project.location}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{project.duration}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{project.category}</dd>
          </div>
        </dl>
        <div className="case-cover">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 1280px"
          />
        </div>
        <Tabs
          value={tab}
          onValueChange={(value) => {
            setTab(value);
            window.history.replaceState(null, "", `#${value}`);
          }}
          className="case-content"
        >
          <TabsList className="case-tabs" aria-label="Project sections">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
            <TabsTrigger value="findings">Findings</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="report">Report</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="case-columns">
              <ListSection
                title="Project objectives"
                items={project.objectives}
              />
              <ListSection
                title="Key achievements"
                items={project.highlights}
              />
            </div>
            <div className="case-tools" aria-label="Tools and methods">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="methodology">
            <div className="case-columns">
              <ListSection
                title="Research & approach"
                items={project.methodology}
              />
              <ListSection
                title="Challenges addressed"
                items={project.challenges}
              />
            </div>
          </TabsContent>
          <TabsContent value="findings">
            <div className="case-columns">
              <ListSection
                title="Planning solutions"
                items={project.solutions}
              />
              <ListSection title="Project outcomes" items={project.outcomes} />
              <ListSection
                title="Recommendations"
                items={project.recommendations}
              />
            </div>
          </TabsContent>
          <TabsContent value="gallery">
            <ProjectGallery images={project.gallery} title={project.title} />
          </TabsContent>
          <TabsContent value="report">
            {project.reportSections.map((section) => (
              <section className="report-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
            <a
              href={`mailto:nomzamokhanye72@gmail.com?subject=${encodeURIComponent(`Report request: ${project.title}`)}`}
              className="button-primary"
            >
              Request the full report <ArrowUpRight size={16} />
            </a>
          </TabsContent>
          <TabsContent value="impact">
            <div className="case-columns">
              <ListSection
                title="Sustainable development goals"
                items={project.sdgs}
              />
              <ListSection
                title="Outcomes & opportunities"
                items={project.outcomes}
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
