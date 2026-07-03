import dynamic from "next/dynamic";
import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import Service from "@/components/homes/home-5/Service";
import VerdantAbout from "@/components/verdant/VerdantAbout";
import VerdantContact from "@/components/verdant/VerdantContact";
import Portfolio from "@/components/homes/home-5/Portfolio";
import AnimatedText from "@/components/common/AnimatedText";
import { verdantMenu } from "@/data/menu";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  { ssr: false }
);

export const metadata = {
  title: "Verdant Estates — Luxury Landscaping, Florida",
  description:
    "Verdant Estates crafts extraordinary outdoor environments across Florida — maintenance, installation, and landscape design for discerning clients.",
};

export default function VerdantHome() {
  return (
    <div className="theme-elegant theme-verdant">
      <div className="page" id="top">

        {/* ── Navigation ── */}
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <Header5 links={verdantMenu} />
        </nav>

        <main id="main">

          {/* ── Hero ── */}
          <ParallaxContainer
            className="home-section bg-dark-alpha-60 parallax-5 light-content z-index-1 scrollSpysection"
            style={{
              backgroundImage:
                "url(/assets/images/demo-elegant/section-bg-1.PNG)",
            }}
            id="home"
          >
            <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
              <div className="home-content text-center w-100">
                <h2
                  className="section-title-tiny mb-50 mb-sm-30 wow fadeInDownShort"
                  style={{ color: "#c8a84b" }}
                >
                  Florida&apos;s Luxury Landscaping Studio
                </h2>
                <h1 className="hs-title-3 mb-80 mb-sm-50 mb-xs-30">
                  <span className="wow charsAnimInLong" data-splitting="chars">
                    <AnimatedText text="Verdant Estates" />
                  </span>
                </h1>
                <p
                  className="wow fadeInUpShort mb-50"
                  data-wow-delay="0.3s"
                  style={{
                    fontSize: "1.05rem",
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "0.04em",
                    maxWidth: 520,
                    margin: "0 auto 3rem",
                  }}
                >
                  Cultivating extraordinary outdoor environments for the homes,
                  estates, and institutions that define Florida&apos;s finest
                  addresses.
                </p>
                <div className="local-scroll wow fadeInUpShort wch-unset" data-wow-delay="0.5s">
                  <a
                    href="#about"
                    className="link-hover-anim link-circle-1 align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered" style={{ color: "#fff" }}>
                      Discover Our Work{" "}
                      <i className="mi-arrow-right size-18 align-middle" aria-hidden="true" />
                    </span>
                    <span className="link-strong link-strong-hovered" aria-hidden="true" style={{ color: "#c8a84b" }}>
                      Discover Our Work{" "}
                      <i className="mi-arrow-right size-18 align-middle" aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="local-scroll scroll-down-3-wrap wow fadeInUp" data-wow-offset={0}>
                <a href="#about" className="scroll-down-3">Scroll Down</a>
              </div>
            </div>
          </ParallaxContainer>

          {/* ── About ── */}
          <VerdantAbout />

          {/* ── Marquee ── */}
          <div className="page-section overflow-hidden">
            <div className="marquee marquee-style-1 mb-30">
              <div className="marquee-track marquee-animation">
                {Array(12).fill("Florida&apos;s Finest Landscapes").map((_, i) => (
                  <div key={i} aria-hidden={i > 0 ? "true" : undefined}>
                    Florida&apos;s Finest Landscapes
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee marquee-style-1">
              <div className="marquee-track marquee-animation">
                {Array(12).fill("Crafted With Precision").map((_, i) => (
                  <div key={i} aria-hidden={i > 0 ? "true" : undefined}>
                    Crafted With Precision
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Services ── */}
          <section
            className="scrollSpysection"
            id="services"
          >
            <Service />
          </section>

          {/* ── CTA strip ── */}
          <section className="small-section bg-dark-1 light-content">
            <div className="container">
              <div className="row mb-n10">
                <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 mb-sm-30 text-center text-md-start">
                  <h2 className="section-title-small mb-0">
                    Ready to transform your outdoor space?
                  </h2>
                </div>
                <div className="col-md-4 col-lg-3 text-center text-md-end">
                  <div className="mt-n20">
                    <a
                      href="#contact"
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Request a Consultation
                      </span>
                      <span className="link-strong link-strong-hovered" aria-hidden="true">
                        Request a Consultation
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Portfolio ── */}
          <hr className="mt-0 mb-0" />
          <section
            className="page-section pb-0 scrollSpysection"
            id="projects"
          >
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    <span className="text-gray">Our</span> Projects
                    <span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    From intimate residential gardens to the sweeping grounds of
                    Florida&apos;s finest institutions — every project is a collaboration
                    with nature.
                  </div>
                </div>
              </div>
            </div>
            <Portfolio />
          </section>

          {/* ── Newsletter/Quote banner ── */}
          <section
            className="small-section bg-dark-1 bg-dark-alpha-85 bg-scroll light-content"
            style={{
              backgroundImage:
                "url(/assets/images/demo-elegant/section-bg-4.png)",
            }}
          >
            <div className="container">
              <div className="row text-center">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <h3
                    className="section-title mb-20"
                    style={{
                      fontStyle: "italic",
                      color: "#ffffff",
                      textShadow: "0 2px 12px rgba(0,0,0,0.55)",
                    }}
                  >
                    &ldquo;A garden is a grand teacher. It teaches patience and
                    careful watchfulness.&rdquo;
                  </h3>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#c8a84b",
                      textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                    }}
                  >
                    — Gertrude Jekyll
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Contact ── */}
          <section
            className="page-section scrollSpysection"
            id="contact"
          >
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    <span className="text-gray">Get in</span> Touch
                    <span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    Whether you&apos;re maintaining a cherished garden or beginning
                    an ambitious new installation — we&apos;d love to hear about
                    your vision.
                  </div>
                </div>
              </div>
              <VerdantContact />
            </div>
          </section>

        </main>

        {/* ── Footer ── */}
        <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
          <Footer5 />
        </footer>

      </div>
    </div>
  );
}
