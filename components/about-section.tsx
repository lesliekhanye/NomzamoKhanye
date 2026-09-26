import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="about-section section-space page-width">
      <div className="about-intro">
        <p className="eyebrow section-kicker">02 / About me</p>
        <h2>
          Good places start
          <br />
          with people.
        </h2>
        <p className="about-lead">
          I’m Natasha, an Urban and Regional Planning graduate with an interest
          in how thoughtful design can make everyday life better.
        </p>
        <p className="body-copy">
          My approach connects the needs of communities with the possibilities
          of place. From informal settlement upgrading to green infrastructure,
          I’m interested in practical, inclusive ways to shape South Africa’s
          urban future.
        </p>
        <a
          className="text-link"
          href="https://www.linkedin.com/in/nomzamo-khanye/"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="about-details">
        <div className="education-row">
          <p className="small-label">Education</p>
          <h3>BSc Urban & Regional Planning</h3>
          <p>
            Northwest University <span>Class of 2023</span>
          </p>
        </div>
        <div className="focus-list">
          <p className="small-label">Areas of focus</p>
          {[
            "Sustainable planning & green infrastructure",
            "Informal settlement upgrading",
            "Housing development & urban design",
            "Community participation",
          ].map((item, index) => (
            <div className="focus-row" key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
        <div className="skills-line">
          <p className="small-label">In practice</p>
          <p>
            Spatial analysis · Research · Public participation · Urban design
          </p>
        </div>
      </div>
    </section>
  );
}
