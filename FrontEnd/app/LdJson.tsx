// app/LdJson.tsx
import { Organization, WithContext } from "schema-dts";

export default function LdJson() {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Media Sawocangkring",
    alternateName: "Sawocangkring Media",
    legalName: "Media Sawocangkring",
    description:
      "Media Informasi Seputar Desa Sawocangkring. Diramut arek-arek Sawocangkring.",
    url: "https://sawocangkring.my.id",
    logo: "https://sawocangkring.my.id/icon.png",
    email: "halo@sawocangkring.my.id",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+628155338525",
      email: "halo@sawocangkring.my.id",
      contactType: "Pengelola IT",
    },
    sameAs: ["https://www.instagram.com/mediasawocangkring"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Desa Sawocangkring",
      addressLocality: "Sawocangkring",
      addressRegion: "Jawa Timur",
      postalCode: "61261",
      addressCountry: "ID",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10",
    },
    foundingDate: "2021-08-01",
    foundingLocation: {
      "@type": "Place",
      name: "Desa Sawocangkring",
      address:
        "Desa Sawocangkring, Sawocangkring, Sidoarjo, Jawa Timur",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}