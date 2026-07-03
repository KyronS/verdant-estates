import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import VerdantContact from "@/components/verdant/VerdantContact";
import { verdantMenu } from "@/data/menu";

export const metadata = {
  title: "Contact — Verdant Estates",
  description:
    "Get in touch with Verdant Estates to discuss your landscaping project in Florida. We serve residential estates, commercial properties, and institutional clients.",
};

export default function ContactPage() {
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
                "url(/assets/images/demo-elegant/section-bg-4.jpg)",
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
                Let&apos;s Talk
              </p>
              <h1
                className="hs-title-3 mb-10 wow fadeInUpShort"
                data-wow-duration="0.6s"
              >
                Get in Touch
              </h1>
              <div className="row wow fadeIn" data-wow-delay="0.2s">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <p className="section-title-tiny mb-0 opacity-075">
                    We&apos;d love to learn about your property and your vision for it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Contact Info + Form ── */}
          <section className="page-section" id="contact">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    <span className="text-gray">Our</span> Studio
                    <span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    Based in Miami, we serve clients across South Florida —
                    from the Keys to Palm Beach.
                  </div>
                </div>
              </div>
              <VerdantContact />
            </div>
          </section>

          {/* ── Process note ── */}
          <section
            className="page-section bg-dark-1 bg-dark-alpha-70 bg-scroll light-content"
            style={{
              backgroundImage:
                "url(/assets/images/demo-elegant/section-bg-3.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                {[
                  {
                    num: "01",
                    title: "Initial Consultation",
                    desc: "We visit your property to understand the space, your lifestyle, and your aesthetic goals.",
                  },
                  {
                    num: "02",
                    title: "Bespoke Proposal",
                    desc: "Our team prepares a tailored plan covering design, plant selection, timeline, and investment.",
                  },
                  {
                    num: "03",
                    title: "Seamless Execution",
                    desc: "Our crews install and maintain your landscape to the highest standard, season after season.",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="col-md-4 mb-md-50 wow fadeInUp"
                    data-wow-delay={`${i * 0.15}s`}
                  >
                    <div
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "#c8a84b",
                        marginBottom: "1rem",
                      }}
                    >
                      {step.num}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        color: "#fff",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.92rem", lineHeight: 1.9 }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
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
