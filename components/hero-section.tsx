import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="hero page-width">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Urban & regional planner
          </p>
          <h1>
            Natasha Nomzamo Khanye<span className="name-dot">.</span>
          </h1>
          <p className="hero-statement">
            Thoughtful planning.
            <br />
            <span>Better places to live.</span>
          </p>
          <p className="hero-description">
            Shaping more inclusive, sustainable communities through urban
            design, green infrastructure, and people-centred planning.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore my work <ArrowUpRight size={16} />
            </a>
            <a href="#about" className="text-link">
              A little about me <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-location">
            <span className="location-cross">+</span> Based in South Africa{" "}
            <span className="location-divider" /> BSc Urban & Regional Planning
          </div>
        </div>
        <figure className="hero-map">
          <div className="hero-map-frame">
            <Image
              src="/project3.png"
              alt="Spatial analysis map of Johannesburg and its surrounding urban districts"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 54vw"
              className="hero-map-image"
            />
            <span className="map-location"><MapPin size={13} /> Johannesburg, South Africa</span>
          </div>
          <figcaption className="hero-map-caption">
            <span>Urban analysis</span>
            <span>Mapping places, patterns & possibilities</span>
          </figcaption>
        </figure>
      </div>
      <div className="hero-bottom">
        <span>People. Place. Possibility.</span>
        <a href="#projects">
          Discover the portfolio <ArrowDown size={14} />
        </a>
        <span className="hero-bottom-right">
          A considered approach to our cities
        </span>
      </div>
    </section>
  );
}
