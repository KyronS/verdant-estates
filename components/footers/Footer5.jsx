import React from "react";

export default function Footer5() {
  return (
    <div className="container position-relative text-center pt-140 pb-80 pb-sm-50">
      {/* Scroll Up */}
      <div className="local-scroll link-to-top-2-wrap">
        <a href="#top" className="link-to-top-2">
          Back to top
        </a>
      </div>
      {/* End Scroll Up */}
      {/* Footer Text */}
      <div className="footer-text">
        <div>© Verdant Estates {new Date().getFullYear()}. All rights reserved.</div>
        <div className="footer-made">Created by WebDev Studios</div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
