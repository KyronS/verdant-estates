import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import Service from "@/components/homes/home-5/Service";
import Link from "next/link";
import { verdantMenu } from "@/data/menu";

export const metadata = {
  title: "Services — Verdant Estates",
  description:
    "Verdant Estates offers premium lawn maintenance, garden installation, irrigation, landscape design, tree care, and seasonal colour programmes across Florida.",
};

export default function ServicesPage() {
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
                "url(/assets/images/demo-elegant/section-bg-1.jpg)",
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
                What We Do
              </p>
              <h1
                className="hs-title-3 mb-10 wow fadeInUpShort"
                data-wow-duration="0.6s"
              >
                Our Services
              </h1>
              <div className="row wow fadeIn" data-wow-delay="0.2s">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <p className="section-title-tiny mb-0 opacity-075">
                    Precision care and inspired installation for Florida&apos;s finest outdoor spaces.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Services Grid ── */}
          <Service />

          {/* ── Maintenance Detail ── */}
          <section className="page-section">
            <div className="container position-relative">
              <div className="row align-items-center">
                <div className="col-lg-5 mb-md-50">
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
                      Service Detail
                    </p>
                    <h2 className="section-title mb-30">
                      Landscape Maintenance
                    </h2>
                    <div className="text-gray mb-30">
                      <p>
                        Florida&apos;s subtropical climate demands attentive, year-round
                        care. Our maintenance programmes are built around your
                        property&apos;s specific needs — from weekly turf management
                        to detailed seasonal transitions.
                      </p>
                      <ul style={{ paddingLeft: "1.2em", lineHeight: 2.2 }}>
                        <li>Precision mowing, edging &amp; trimming</li>
                        <li>Fertilisation &amp; soil health programmes</li>
                        <li>Pest and disease management</li>
                        <li>Irrigation monitoring and adjustment</li>
                        <li>Palm and tree trimming</li>
                        <li>Seasonal clean-ups and bed renewal</li>
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className="btn btn-mod btn-large btn-circle btn-hover-anim"
                    >
                      <span>Request a Maintenance Quote</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div
                    className="wow fadeIn"
                    style={{
                      background: "url(/assets/images/demo-elegant/section-image-1.jpg) center/cover",
                      borderRadius: 8,
                      minHeight: 480,
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className="mt-0 mb-0" />

          {/* ── Installation Detail ── */}
          <section className="page-section">
            <div className="container position-relative">
              <div className="row align-items-center flex-md-row-reverse">
                <div className="col-lg-5 offset-lg-1 mb-md-50">
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
                      Service Detail
                    </p>
                    <h2 className="section-title mb-30">
                      Landscape Installation
                    </h2>
                    <div className="text-gray mb-30">
                      <p>
                        From intimate courtyard gardens to multi-acre estate
                        grounds, our installation team executes each project with
                        meticulous attention to plant selection, soil
                        preparation, and long-term ecological balance.
                      </p>
                      <ul style={{ paddingLeft: "1.2em", lineHeight: 2.2 }}>
                        <li>Custom landscape design &amp; master planning</li>
                        <li>Native and tropical plant installation</li>
                        <li>Smart irrigation system design</li>
                        <li>Hardscape &amp; water feature integration</li>
                        <li>Lighting design for outdoor environments</li>
                        <li>Institutional &amp; commercial grounds</li>
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className="btn btn-mod btn-large btn-circle btn-hover-anim"
                    >
                      <span>Start an Installation Project</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="wow fadeIn"
                    style={{
                      background: "url(/assets/images/demo-elegant/section-image-2.jpg) center/cover",
                      borderRadius: 8,
                      minHeight: 480,
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="page-section">
            <div className="container position-relative">
              <div className="row text-center wow fadeInUp">
                <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                  <p className="section-descr mb-50 mb-sm-30">
                    Every great landscape begins with a single conversation. Tell us
                    about your property and your vision — we&apos;ll handle the rest.
                  </p>
                  <Link
                    href="/contact"
                    className="btn btn-mod btn-large btn-circle btn-hover-anim"
                  >
                    <span>Contact Us</span>
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
