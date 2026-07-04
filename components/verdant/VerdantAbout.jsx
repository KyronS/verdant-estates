import Image from "next/image";
import { assetUrl } from "@/lib/assetUrl";

const features = [
  { text: "Licensed Florida Landscape Architects" },
  { text: "20+ Years of Estate Experience" },
  { text: "Native & Tropical Plant Specialists" },
  { text: "Full-Service: Design to Maintenance" },
];

export default function VerdantAbout() {
  return (
    <section className="page-section scrollSpysection pb-0" id="about">
      <div className="container position-relative">
        <div className="row">

          {/* Images — Left Column */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="w-100 pe-lg-5">
              <div className="composition-5">
                <div className="composition-5-decoration opacity-065">
                  <Image
                    src={assetUrl("/assets/images/demo-slick/decoration-1.svg")}
                    alt=""
                    width={228}
                    height={228}
                  />
                </div>
                <div className="composition-5-image-1">
                  <div className="composition-5-image-1-inner">
                    <Image
                      src={assetUrl("/assets/images/demo-slick/hs-image-3.png")}
                      alt="Verdant Estates landscape installation"
                      width={850}
                      height={914}
                      className="wow scaleOutIn"
                      data-wow-offset={200}
                    />
                  </div>
                </div>
                <div className="composition-5-image-2">
                  <div className="composition-5-image-2-inner">
                    <Image
                      src={assetUrl("/assets/images/demo-slick/hs-image-4.png")}
                      alt="Garden detail"
                      width={400}
                      height={400}
                      className="wow scaleOutIn"
                      data-wow-offset={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text — Right Column (first on mobile) */}
          <div className="col-lg-6 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
            <div className="w-100 wow fadeInUp">
              <p
                className="mb-30 mb-sm-20"
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c8a84b",
                }}
              >
                About Verdant Estates
              </p>
              <h3 className="section-title mb-30">
                Florida&apos;s Premier Landscape Studio
              </h3>
              <p className="text-gray mb-40">
                Founded in Miami, Verdant Estates brings together master
                horticulturalists, landscape architects, and irrigation engineers
                to deliver outdoor environments of rare distinction. From
                sprawling private estates to landmark public institutions, every
                project reflects our commitment to precision, beauty, and the
                unique character of Florida&apos;s natural landscape.
              </p>

              <div className="row features-list mt-n20 mb-50 mb-sm-30">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                  >
                    <div className="features-list-icon">
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">{feature.text}</div>
                  </div>
                ))}
              </div>

              <div className="local-scroll wch-unset">
                <a
                  href="#contact"
                  className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                >
                  <span>Request a Consultation</span>
                </a>{" "}
                <a
                  href="#services"
                  className="link-hover-anim ms-2 ms-sm-5 me-2"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Our Services{" "}
                    <i className="mi-arrow-right size-24" aria-hidden="true" />
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Our Services{" "}
                    <i className="mi-arrow-right size-24" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
