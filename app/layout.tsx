import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Website Developer for Local Businesses | Mohit Singh",
  description:
    "Freelance web developer building high-converting websites for dentists, travel agencies and service businesses in India.",

  keywords: [
    "website developer for dentists",
    "dentist website design india",
    "travel agency website developer",
    "small business website developer india",
    "freelance web developer india"
  ],

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ]
  },

  openGraph: {
    title: "Mohit Singh — Web Developer",
    description:
      "Conversion-focused websites for dentists, travel agencies and local businesses.",
    url: "https://yourdomain.com",
    siteName: "Mohit.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630
      }
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohit Singh — Web Developer",
    description:
      "Conversion-focused websites for dentists, travel agencies and local businesses.",
    images: ["/og-image.png"]
  },

  metadataBase: new URL("https://yourdomain.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mohit Singh Web Development",
    "url": "https://yourdomain.com",
    "description": "Freelance web developer building conversion-focused websites for dentists, travel agencies, law firms and local businesses.",
    "areaServed": "India",
    "founder": {
      "@type": "Person",
      "name": "Mohit Singh"
    },
    "serviceType": [
      "Website Design",
      "Landing Page Development",
      "Website Optimization",
      "Dental Clinic Website Design",
      "Travel Agency Website Development"
    ],
    "sameAs": [
      "https://github.com/mohitsingh200429-max",
      "https://www.linkedin.com/in/mohit-kumar-796616235"
    ]
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body
        className="font-sans bg-[#F8F8F8] text-[#222222] antialiased selection:bg-[#222222] selection:text-white"
        suppressHydrationWarning
      >
        {children}

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}