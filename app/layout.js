import "swiper/css";
import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "photoswipe/dist/photoswipe.css";
import "tippy.js/dist/tippy.css";
import ClientLayout from "@/components/ClientLayout";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = "https://verdant-transformations.com";

const defaultTitle = "Verdant Transformations — Luxury Landscaping, Florida";
const defaultDescription =
  "Verdant Transformations crafts extraordinary outdoor environments across Florida — maintenance, installation, and landscape design for discerning clients.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    type: "website",
    siteName: "Verdant Transformations",
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    images: [
      {
        url: `${basePath}/assets/images/demo-elegant/section-bg-1.png`,
        width: 1672,
        height: 941,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Verdant Transformations",
  description: defaultDescription,
  url: siteUrl,
  telephone: "+1-863-214-0553",
  email: "verdanttransformations@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7032 Pioneer Rd",
    addressLocality: "Sebring",
    addressRegion: "FL",
    postalCode: "33876",
    addressCountry: "US",
  },
  areaServed: "Florida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-mobile no-touch ">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="appear-animate body">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
