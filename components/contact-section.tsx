import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="page-width contact-inner">
          <div>
            <p className="eyebrow section-kicker">03 / Get in touch</p>
            <h2>
              Let’s shape
              <br />
              something better.
            </h2>
            <p>
              Open to opportunities, ideas, and conversations
              <br className="desktop-break" /> about the future of our
              communities.
            </p>
          </div>
          <div className="contact-links">
            <a
              className="contact-email"
              href="mailto:nomzamokhanye72@gmail.com"
            >
              Start a conversation <ArrowUpRight size={27} />
            </a>
            <a
              className="contact-address"
              href="mailto:nomzamokhanye72@gmail.com"
            >
              nomzamokhanye72@gmail.com
            </a>
            <div className="contact-secondary">
              <a href="tel:+27638908334">+27 63 890 8334</a>
              <a
                href="https://www.linkedin.com/in/nomzamo-khanye/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="page-width site-footer">
        <a href="#hero" className="wordmark" aria-label="Back to top">
          nk<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Natasha Nomzamo Khanye</p>
        <span>Thoughtfully planned. In South Africa.</span>
        <a href="#hero" className="footer-top">
          Back to top <ArrowUpRight size={14} />
        </a>
      </footer>
    </>
  );
}
