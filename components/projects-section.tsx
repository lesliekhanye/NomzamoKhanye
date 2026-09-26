import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/lib/projects-data";

const titles = [
  "A greener urban future.",
  "Stronger communities, by design.",
  "A place to call home.",
];
const descriptions = [
  "Exploring green infrastructure and climate-resilient design for South African cities.",
  "A community-centred approach to upgrading informal settlements and improving access to services.",
  "An integrated approach to affordable housing and neighbourhood development in Turffontein.",
];
export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section section-space">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-kicker">01 / Selected work</p>
            <h2>Places with purpose.</h2>
          </div>
          <p>
            A selection of planning research and projects.
            <br />
            From the bigger picture to everyday life.
          </p>
        </div>
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="project-card"
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
                <span className="project-number">0{index + 1}</span>
                <span className="project-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>
              <p className="project-category">{project.category}</p>
              <h3>{titles[index]}</h3>
              <p className="project-description">{descriptions[index]}</p>
              <span className="project-link">
                View project <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
