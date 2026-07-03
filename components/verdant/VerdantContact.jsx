"use client";
import { contactItems } from "@/data/contact";
import React from "react";

export default function VerdantContact() {
  return (
    <div className="row wow fadeInUp">

      {/* Left Column — dark info panel */}
      <div className="col-lg-5 mb-md-50 mb-sm-30 d-flex align-items-stretch">
        <div
          className="bg-dark-1 light-content w-100 round overflow-hidden px-4 px-sm-5 py-5"
          style={{ borderTop: "3px solid #c8a84b" }}
        >
          {contactItems.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`contact-item ${
                  index !== contactItems.length - 1 ? "mb-40 mb-sm-20" : ""
                }`}
              >
                <div className="ci-icon">
                  <i className={item.iconClass} style={{ color: "#c8a84b" }} />
                </div>
                <h4 className="ci-title">{item.title}</h4>
                <div className="ci-text large">{item.text}</div>
                <div className="ci-link">
                  <a
                    href={item.link.url}
                    target={item.link.target}
                    rel={item.link.rel}
                  >
                    {item.link.text}
                  </a>
                </div>
              </div>
              {index !== contactItems.length - 1 && (
                <hr
                  className="mt-0 mb-40 mb-sm-20"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right Column — contact form */}
      <div className="col-lg-7 d-flex align-items-stretch">
        <div
          className="round w-100 px-4 px-sm-5 py-5"
          style={{ border: "1px solid rgba(200,168,75,0.25)" }}
        >
          <h3 className="section-title-small mt-n10 mb-40 mb-sm-30">
            We&apos;d love to hear from you
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form"
            id="contact_form"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your name"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 132 }}
                placeholder="Enter your message"
                defaultValue={""}
              />
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-7 d-flex align-items-center">
                <div className="form-tip w-100 pt-3">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </div>
              </div>
              <div className="col-md-6 col-xl-5 mt-sm-20">
                <div className="pt-3 text-md-end">
                  <button
                    type="submit"
                    className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                    id="submit_btn"
                    aria-controls="result"
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
      </div>

    </div>
  );
}
