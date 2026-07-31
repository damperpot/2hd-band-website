import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { getServiceArea, serviceAreas } from "@/data/areas";
import { bandMembers, site } from "@/data/site";

type CountyPageProps = {
  params: Promise<{ county: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ county: area.slug }));
}

export async function generateMetadata({ params }: CountyPageProps): Promise<Metadata> {
  const { county } = await params;
  const area = getServiceArea(county);

  if (!area) {
    return {};
  }

  const path = `/cover-band/${area.slug}/`;
  const title = `Live Covers Band in ${area.county}`;

  return {
    title,
    description: area.metaDescription,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: `${title} | 2HD`,
      description: area.metaDescription,
      url: path,
      siteName: site.fullName,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "/assets/images/2hd-band-social.jpg",
          width: 1200,
          height: 630,
          alt: "The four members of 2HD together after a live show"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | 2HD`,
      description: area.metaDescription,
      images: ["/assets/images/2hd-band-social.jpg"]
    }
  };
}

export default async function CountyPage({ params }: CountyPageProps) {
  const { county } = await params;
  const area = getServiceArea(county);

  if (!area) {
    notFound();
  }

  const pageUrl = `${site.domain}/cover-band/${area.slug}/`;
  const faqItems = [
    {
      question: `Can I book 2HD for an event in ${area.county}?`,
      answer: `Yes. 2HD welcomes enquiries for pubs, clubs, festivals and private functions across ${area.county}. Availability depends on the date and location, so include both in your enquiry.`
    },
    {
      question: "What kind of music does 2HD play?",
      answer:
        "The repertoire brings together rock, punk, indie, new wave and alternative pop, mixing well-loved classics with songs audiences may have forgotten they loved."
    },
    {
      question: "Can 2HD play a more relaxed event?",
      answer:
        "Yes. Alongside the full electric four-piece show, 2HD Unplugged offers a stripped-back option for pubs, beer gardens, parties and private functions."
    },
    {
      question: "What should I include in a booking enquiry?",
      answer:
        "Send the event date, venue or location, event type and a little about the atmosphere you want. That is enough for 2HD to check availability and start the right conversation."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": `${site.domain}/#band`,
        name: site.fullName,
        alternateName: site.name,
        url: site.domain,
        description:
          "Four-piece live covers band based near Daventry in West Northamptonshire, playing rock, punk, indie, new wave and alternative pop.",
        image: `${site.domain}/assets/images/2hd-band-social.jpg`,
        genre: ["Rock", "Punk", "Indie", "New Wave", "Alternative Pop"],
        location: {
          "@type": "Place",
          name: "Daventry, West Northamptonshire"
        },
        areaServed: serviceAreas.map((serviceArea) => ({
          "@type": "AdministrativeArea",
          name: serviceArea.county
        })),
        member: bandMembers.map((member) => ({
          "@type": "OrganizationRole",
          roleName: member.role,
          member: { "@type": "Person", name: member.name }
        })),
        sameAs: Object.values(site.socials)
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Live covers band for events in ${area.county}`,
        serviceType: "Live band performance",
        description: area.metaDescription,
        provider: { "@id": `${site.domain}/#band` },
        areaServed: {
          "@type": "AdministrativeArea",
          name: area.county
        },
        url: pageUrl
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Live Covers Band in ${area.county} | 2HD`,
        description: area.metaDescription,
        isPartOf: { "@id": `${site.domain}/#website` },
        about: { "@id": `${pageUrl}#service` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "2HD",
            item: site.domain
          },
          {
            "@type": "ListItem",
            position: 2,
            name: `Cover band in ${area.county}`,
            item: pageUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-black pb-20 pt-32 md:pb-28 md:pt-40">
          <Image
            src="/assets/images/gallery-stage-wide.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,104,116,0.22),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.45),#090909_92%)]" />
          <div className="section-shell relative">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm font-bold text-fog">
              <Link className="transition hover:text-white" href="/">2HD</Link>
              <span aria-hidden="true" className="mx-3 text-rose">/</span>
              <span>Covers band in {area.county}</span>
            </nav>
            <p className="eyebrow mb-5">Live music for {area.county}</p>
            <h1 className="display-heading max-w-5xl text-6xl md:text-8xl lg:text-9xl">
              A live covers band for {area.county}.
            </h1>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white md:text-xl">
              {area.introduction}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href="/#book">Ask about your date</Link>
              <Link className="button-secondary" href="/#watch">Watch 2HD live</Link>
            </div>
          </div>
        </section>

        <section className="section-band py-20 md:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow mb-4">Your local event</p>
              <h2 className="display-heading text-6xl md:text-8xl">
                Live, local and built for the room.
              </h2>
            </div>
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-wide text-white">
                Our local booking area is roughly 50 miles around Daventry.
              </p>
              <p className="text-lg leading-8 text-fog">{area.localContext}</p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label={`Places served around ${area.county}`}>
                {area.towns.map((town) => (
                  <li className="why-pill min-h-0 px-4 py-3" key={town}>{town}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-charcoal py-20 md:py-28">
          <div className="section-shell">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow mb-4">Choose the feel</p>
              <h2 className="display-heading text-6xl md:text-8xl">Electric or unplugged.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="border border-white/10 bg-ink p-7 md:p-10">
                <p className="eyebrow mb-5">The full band</p>
                <h3 className="text-2xl font-black text-white">The energetic four-piece show</h3>
                <p className="mt-4 leading-7 text-fog">
                  Powerful vocals, driving guitars, solid bass and dynamic drums for pubs, clubs,
                  festivals and private functions that need a full live-band lift.
                </p>
              </article>
              <article className="border border-white/10 bg-ink p-7 md:p-10">
                <p className="eyebrow mb-5 text-[#d7a86e]">2HD Unplugged</p>
                <h3 className="text-2xl font-black text-white">The same songs, stripped back</h3>
                <p className="mt-4 leading-7 text-fog">
                  A more relaxed, intimate take on rock and pop favourites for beer gardens,
                  parties, private functions and settings where a lighter feel suits the occasion.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-ink py-20 md:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow mb-4">Plan your booking</p>
              <h2 className="display-heading text-6xl md:text-8xl">Start with the useful details.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-fog">{area.planningNote}</p>
            </div>
            <ol className="grid gap-px bg-white/10">
              {[
                ["01", "Your date", "Share the event date so we can check the band’s availability."],
                ["02", "Your location", "Add the venue, town or event location and the type of occasion."],
                ["03", "Your atmosphere", "Tell us whether you want full electric energy or a more intimate unplugged set."]
              ].map(([number, heading, copy]) => (
                <li className="grid grid-cols-[3.5rem_1fr] gap-4 bg-charcoal p-6" key={number}>
                  <span className="display-heading text-4xl text-rose">{number}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{heading}</h3>
                    <p className="mt-2 leading-7 text-fog">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-charcoal py-20 md:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow mb-4">Good to know</p>
              <h2 className="display-heading text-6xl md:text-8xl">Questions, answered.</h2>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqItems.map((item) => (
                <details className="group py-6" key={item.question}>
                  <summary className="cursor-pointer list-none pr-8 text-lg font-black text-white">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-2xl leading-7 text-fog">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band py-20 md:py-28">
          <div className="section-shell">
            <div className="grid gap-8 border border-white/10 bg-charcoal p-7 md:grid-cols-[1fr_auto] md:items-end md:p-10">
              <div>
                <p className="eyebrow mb-4">Book 2HD</p>
                <h2 className="display-heading max-w-3xl text-6xl md:text-8xl">
                  Planning live music in {area.county}?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-fog">
                  Check the public availability calendar or send the date, venue and event details
                  for a direct reply from the band.
                </p>
              </div>
              <Link className="button-primary" href="/#book">Send an enquiry</Link>
            </div>

            <nav aria-label="Other areas served" className="mt-12">
              <p className="mb-4 text-sm font-black uppercase tracking-wide text-white">
                Explore nearby areas
              </p>
              <div className="flex flex-wrap gap-3">
                {serviceAreas
                  .filter((serviceArea) => serviceArea.slug !== area.slug)
                  .map((serviceArea) => (
                    <Link
                      className="button-secondary"
                      href={`/cover-band/${serviceArea.slug}/`}
                      key={serviceArea.slug}
                    >
                      {serviceArea.county}
                    </Link>
                  ))}
              </div>
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
