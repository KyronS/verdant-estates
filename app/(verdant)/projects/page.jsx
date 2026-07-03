import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import Portfolio from "@/components/homes/home-5/Portfolio";
import Link from "next/link";
import Image from "next/image";
import { verdantMenu } from "@/data/menu";

export const metadata = {
  title: "Projects — Verdant Estates",
  description:
    "Explore Verdant Estates' portfolio of luxury landscaping projects across Florida — from private estates to the grounds of Vizcaya Museum & Gardens.",
};

export default function ProjectsPage() {
  return (
    <div className="theme-elegant theme-verdant">
      <div className="page" id="top">

        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <Header5 links={verdantMenu} />
        </nav>

        <main id="main">

          {/* ── Page Banner ── */}
          <section
            className="page-section bg-dark-alpha-50 light-content"
            style={{
              backgroundImage:
                "url(/assets/images/demo-elegant/section-bg-2.jpg)",
            }}
            id="home"
          >
            <div className="container position-relative pt-20 pt-sm-20 text-center">
              <p
                className="mb-20 wow fadeInDownShort"
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c8a84b",
                }}
              >
                Our Work
              </p>
              <h1
                className="hs-title-3 mb-10 wow fadeInUpShort"
                data-wow-duration="0.6s"
              >
                Featured Projects
              </h1>
              <div className="row wow fadeIn" data-wow-delay="0.2s">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <p className="section-title-tiny mb-0 opacity-075">
                    Each project is a collaboration between craft, ecology, and enduring beauty.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Featured: Museum ── */}
          <section className="page-section pb-0">
            <div className="container position-relative">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-md-50">
                  <div className="call-action-1-images" style={{ position: "relative", paddingBottom: 60 }}>
                    <div className="call-action-1-image-1 round">
                      <Image
                        src="/assets/images/demo-elegant/portfolio/1.jpg"
                        width={680}
                        height={760}
                        className="w-100"
                        alt="Vizcaya Museum & Gardens"
                        style={{ borderRadius: 8 }}
                      />
                    </div>
                    <div
                      className="call-action-1-image-2"
                      style={{ position: "absolute", bottom: 0, right: 0, width: "42%" }}
                    >
                      <Image
                        src="/assets/images/demo-elegant/portfolio/2.jpg"
                        width={300}
                        height={380}
                        alt="Garden detail"
                        style={{ borderRadius: 6, width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="wow linesAnimIn" data-splitting="lines">
                    <p
                      className="mb-20"
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "'Poppins', sans-serif",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "#c8a84b",
                      }}
                    >
                      Landmark Commission
                    </p>
                    <h2 className="section-title mb-30">
                      Vizcaya Museum &amp; Gardens
                    </h2>
                    <div className="text-gray mb-30">
                      <p>
                        Vizcaya&apos;s ten acres of formal Italian Renaissance gardens
                        represent one of Florida&apos;s most significant cultural
                        landscapes. Verdant Estates serves as the estate&apos;s
                        primary landscape partner — maintaining historical
                        authenticity while adapting the grounds to Florida&apos;s
                        unique subtropical conditions.
                      </p>
                      <p>
                        Our scope spans the formal parterre gardens, the
                        Casino terraces, native hammock restoration along the
                        bay front, and the introduction of drought-tolerant
                        cultivars that reduce irrigation demand without
                        compromising visual grandeur.
                      </p>
                    </div>
                    <div className="row mb-0" style={{ gap: "1rem 0" }}>
                      <div className="col-6">
                        <p
                          style={{
                            fontSize: "0.68rem",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#c8a84b",
                            marginBottom: 4,
                          }}
                        >
                          Services
                        </p>
                        <p className="mb-0 text-gray" style={{ fontSize: "0.9rem" }}>
                          Maintenance · Installation
                        </p>
                      </div>
                      <div className="col-6">
                        <p
                          style={{
                            fontSize: "0.68rem",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#c8a84b",
                            marginBottom: 4,
                          }}
                        >
                          Location
                        </p>
                        <p className="mb-0 text-gray" style={{ fontSize: "0.9rem" }}>
                          Miami, Florida
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Stats row ── */}
          <section className="small-section">
            <div className="container">
              <div className="row text-center">
                {[
                  { number: "10", label: "Acres of Grounds" },
                  { number: "3+", label: "Years of Partnership" },
                  { number: "4", label: "Seasonal Rotations / Year" },
                ].map((stat, i) => (
                  <div key={i} className="col-md-4 mb-md-30">
                    <div
                      className="wow fadeInUp"
                      data-wow-delay={`${i * 0.15}s`}
                    >
                      <div
                        style={{
                          fontSize: "clamp(2rem, 5vw, 3.5rem)",
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontWeight: 300,
                          color: "#1c4530",
                          lineHeight: 1,
                          marginBottom: "0.4rem",
                        }}
                      >
                        {stat.number}
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          fontFamily: "'Poppins', sans-serif",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#777",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="mt-0 mb-0" />

          {/* ── Portfolio Grid ── */}
          <section className="page-section pb-0">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    <span className="text-gray">All</span> Projects
                    <span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    A curated selection of our landscape maintenance and
                    installation commissions across South Florida.
                  </div>
                </div>
              </div>
            </div>
            <Portfolio />
          </section>

          {/* ── CTA ── */}
          <section className="page-section">
            <div className="container position-relative">
              <div className="row text-center wow fadeInUp">
                <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                  <p className="section-descr mb-50 mb-sm-30">
                    Interested in commissioning a project? We work with private
                    homeowners, estates, and institutions across Florida.
                  </p>
                  <Link
                    href="/contact"
                    className="btn btn-mod btn-large btn-circle btn-hover-anim"
                  >
                    <span>Begin Your Project</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>

        <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
          <Footer5 />
        </footer>

      </div>
    </div>
  );
}
