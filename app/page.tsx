"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const slides = [
    {
      id: 1,
      content: (
        <>
          <div className="bv-logo-placeholder">
            <h3>Bea&apos;Viewed</h3>
          </div>
          <h4>The Beauty-Tech Platform Solving Trust & Safety</h4>
          <p>
            Bea&apos;Viewed is a two-sided marketplace connecting consumers with
            verified beauty professionals.
          </p>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <h4>How It Works</h4>
          <div className="feature-grid">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <p>Verified professional profiles with credential checking</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">★</span>
              <p>Transparent, authentic reviews from real clients</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛡</span>
              <p>Deposit protection for both providers and consumers</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <p>Trust and safety features built from the ground up</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <div className="launch-badge">COMING SOON</div>
          <h4>Beta Launch</h4>
          <div className="launch-date">December 9th</div>
          <p className="launch-location">🍑 Atlanta First</p>
          <p className="launch-expansion">Expanding to other cities soon</p>
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <h4>Be Part of the Movement</h4>
          <p>
            Join the waitlist and be among the first to experience trust and
            safety in beauty services.
          </p>
          <a
            href="https://beaviewed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="waitlist-button"
          >
            Join the Waitlist
          </a>
        </>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <Link href="/" className="logo">
            Darrielle Evans
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("beaviewed")}>
              Bea&apos;Viewed
            </button>
            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>
            <button onClick={() => scrollToSection("speaking")}>
              Speaking
            </button>
            <button onClick={() => scrollToSection("community")}>
              Community
            </button>
            <button onClick={() => scrollToSection("tools")}>Tools</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line">SOFTWARE</span>
                <span className="title-line">ENGINEER</span>
                <span className="title-line">TURNED</span>
                <span className="title-line">FOUNDER,</span>
                <span className="title-line accent">SOLVING TRUST</span>
                <span className="title-line accent">IN BEAUTY</span>
                <span className="title-line accent">SERVICES</span>
              </h1>
            </div>
            <div className="hero-image">
              <Image
                src="/Canva4.svg"
                alt="Darrielle Evans"
                width={600}
                height={800}
                priority
                className="hero-image-actual"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section about-overlap">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="lead">
                I&apos;m Darrielle Evans, a software engineer turned founder who
                traded corporate tech for solving real problems in the beauty
                industry.
              </p>
              <p>
                After years of frustrating experiences trying to find reliable
                beauty professionals, I realized the industry desperately needed
                a trust and safety solution. That&apos;s why I founded
                Bea&apos;Viewed - a beauty-tech platform that brings
                transparency, verification, and protection to beauty services.
              </p>
              <p>
                My technical background combined with authentic consumer
                experience gives me a unique perspective on building technology
                for an underserved market. I&apos;m passionate about creating
                solutions that actually work for the people who need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bea'Viewed Section */}
      <section id="beaviewed" className="section beaviewed-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Bea&apos;Viewed</h2>
          </div>

          <div className="carousel-container">
            <button
              className="carousel-btn prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>

            <div className="carousel-track">
              <div
                className="carousel-slides"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`carousel-slide ${
                      index === 4 ? "cta-slide" : ""
                    }`}
                  >
                    {slide.content}
                  </div>
                ))}
              </div>
            </div>

            <button
              className="carousel-btn next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
          </div>

          <div className="experience-intro">
            <p>
              My journey into tech and entrepreneurship didn’t follow a straight
              line — it was built layer by layer. I started my career in tech
              support at Apple, then moved into the classroom, transitioned into
              software engineering at EY, and expanded into developer content
              work at HubSpot.
            </p>
            <p>
              Each role sharpened a skill I now use daily as a founder —
              communication, clarity, technical depth, and a deep respect for
              the user experience.
            </p>
          </div>

          <div className="companies">
            <div className="company-card">
              <div className="company-title">Engineering &amp; Product</div>

              <div className="company-body">
                EY — Software Engineer <br />
                HubSpot — Technical Content Writer
              </div>
            </div>

            <div className="company-card">
              <div className="company-title">
                Customer &amp; User Experience
              </div>

              <div className="company-body">Apple — Technical Advisor</div>
            </div>

            <div className="company-card">
              <div className="company-title">Communication &amp; Teaching</div>

              <div className="company-body">
                English Teacher — Middle &amp; High School
              </div>
            </div>
          </div>

          <p className="experience-note">
            Every chapter added a skill I needed to build Bea’Viewed.
          </p>
        </div>
      </section>

      <section id="speaking" className="section speaking-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Speaking &amp; Workshops</h2>
          </div>

          <p className="speaking-intro">
            I speak at conferences, founder events, and tech gatherings about
            building products, consumer trust, and the future of beauty-tech.
          </p>

          <div className="speaking-columns">
            <div className="speaking-topic">
              <h4>Building Trust in Marketplaces</h4>
              <p>
                How technology can solve trust, safety, and transparency in
                beauty services.
              </p>
            </div>

            <div className="speaking-topic">
              <h4>Engineer → Founder</h4>
              <p>
                Lessons from transitioning from software engineer and technical
                writer to full-time founder.
              </p>
            </div>

            <div className="speaking-topic">
              <h4>Tech for Underserved Markets</h4>
              <p>
                Why cultural nuance and lived experience matter when building
                for overlooked communities.
              </p>
            </div>

            <div className="speaking-topic">
              <h4>Systems, Automation &amp; ClickUp</h4>
              <p>
                How I run Bea’Viewed using automation, ClickUp, and modern
                operating systems as a solo founder.
              </p>
            </div>

            <div className="speaking-topic">
              <h4>Women in Tech &amp; Leadership</h4>
              <p>
                Navigating Apple, EY, HubSpot, and entrepreneurship while
                leading with clarity and empathy.
              </p>
            </div>

            <div className="speaking-topic">
              <h4>The Future of Beauty-Tech</h4>
              <p>
                Trends in consumer behavior and why beauty is shifting toward
                tech-first solutions.
              </p>
            </div>
          </div>

          <a href="#contact" className="cta-button">
            Book Me to Speak
          </a>
        </div>
      </section>

      <section id="community" className="section community-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Community & Conferences</h2>
          </div>

          <p className="speaking-intro">
            I actively show up in the tech and founder ecosystem through
            programs, conferences, and communities that invest in builders.
          </p>
          {/* Ongoing */}
          <div className="timeline-item">
            <div className="timeline-year">Ongoing</div>
            <div className="timeline-content">
              <h4>AfroTech Founder Circle</h4>
              <p>
                Member of AfroTech’s founder community, building Bea’Viewed in
                public.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">Ongoing</div>
            <div className="timeline-content">
              <h4>ClickUp Verified Community</h4>
              <p>
                ClickUp power user and verified community member, sharing
                systems and workflows.
              </p>
            </div>
          </div>

          <div className="timeline">
            {/* 2025 */}
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h4>BaddieCon — Entrepreneur Ticket Recipient</h4>
                <p>
                  Selected to attend BaddieCon 2025 as a founder building in
                  tech and beauty.
                </p>
              </div>
            </div>

            {/* 2024 */}
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>RenderATL Scholar</h4>
                <p>
                  Received a RenderATL 2024 scholarship and full conference
                  ticket.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Google Tech Equity Program</h4>
                <p>
                  Participated in Google’s Tech Equity initiative and attended
                  Google I/O–style developer programming sponsored by Google.
                </p>
              </div>
            </div>

            {/* 2023 */}
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>Brilliant Black Minds x RenderATL</h4>
                <p>
                  Earned a free RenderATL 2023 ticket through Brilliant Black
                  Minds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="section tools-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tools I Use</h2>
          </div>

          <p className="tools-intro">
            These are the tools that power my workflow, content, and the way I
            operate Bea’Viewed as a solo founder.
          </p>

          {/* Featured Badge */}
          <div className="clickup-feature">
            <img
              src="/clickupPowerUser.png"
              alt="ClickUp Verified Community Badge"
              className="clickup-badge"
            />
            <p className="badge-caption">
              ClickUp Verified Community — Power User
            </p>
          </div>

          {/* Tool Icons / Logo Strip */}
          <div className="tool-strip">
            <div className="tool-item">Google Workspace</div>
            <div className="tool-item">AWS Cloud</div>
            <div className="tool-item">Plausible Analytics</div>
            <div className="tool-item">Vercel</div>
            <div className="tool-item">Figma</div>
            <div className="tool-item">Canva</div>
            <div className="tool-item">Higgsfield AI</div>
            <div className="tool-item">CapCut</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let&apos;s Connect</h2>
          </div>
          <div className="contact-content">
            <div className="contact-text">
              <p className="contact-lead">
                Interested in speaking engagements, collaborations, or just want
                to connect?
              </p>
              <a href="mailto:info@darrielleevans.com" className="email-link">
                info@darrielleevans.com
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/darrielleevans/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/darrielleevans/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@darrielleevans"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Darrielle Evans. All rights reserved.</p>
            <p className="footer-tagline">
              Building in public. Building with purpose.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
