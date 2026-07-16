import Image from "next/image";
import { Availability } from "@/components/Availability";
import { BookingForm } from "@/components/BookingForm";
import { Header } from "@/components/Header";
import { SongExplorer } from "@/components/SongExplorer";
import { bandMembers, gigs, site, songs } from "@/data/site";

const genres = ["Rock", "Punk", "Indie", "New Wave", "Alternative Pop"];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: site.fullName,
    alternateName: site.name,
    url: site.domain,
    slogan: site.tagline,
    genre: genres,
    email: `mailto:${site.email}`,
    sameAs: Object.values(site.socials)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section id="home" className="relative min-h-screen overflow-hidden">
          <div className="hero-video absolute inset-0">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/images/hero-stage.png"
              aria-label="2HD live promo video"
            >
              <source src="/assets/video/promo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-shell relative z-10 flex min-h-screen items-end pb-16 pt-28 md:pb-24">
            <div className="max-w-4xl">
              <p className="eyebrow mb-4">2HD</p>
              <h1 className="display-heading text-[clamp(5.5rem,20vw,14rem)]">{site.tagline}</h1>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-sm bg-white px-6 text-sm font-black uppercase tracking-wide text-ink transition hover:bg-rose hover:text-white"
                  href="#watch"
                >
                  Watch Promo
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-6 text-sm font-black uppercase tracking-wide text-white transition hover:border-rose hover:text-rose"
                  href="#availability"
                >
                  Check Availability
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="bg-ink py-20 md:py-32">
          <div className="section-shell grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="eyebrow mb-4">Why 2HD</p>
              <h2 className="display-heading text-6xl md:text-8xl">Familiar songs. Fresh energy.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-fog">
              <p>
                2HD is a four-piece live band based in West Northamptonshire, delivering energetic
                performances that blend rock, punk, indie, new wave and alternative pop.
              </p>
              <p>
                Formed in 2019 and established in its current line-up since 2023, the band performs
                between 25 and 45 shows each year across pubs, clubs, festivals and private
                functions.
              </p>
            </div>
          </div>
        </section>

        <section id="watch" className="bg-charcoal py-20 md:py-32">
          <div className="section-shell">
            <p className="eyebrow mb-4">Watch us live</p>
            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-black shadow-glow">
                <Image
                  src="/assets/images/hero-stage.png"
                  alt="2HD live performance placeholder"
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <span className="text-sm font-black uppercase tracking-wide text-white">
                    Promo video slot
                  </span>
                  <span className="rounded-sm bg-white px-3 py-2 text-xs font-black uppercase text-ink">
                    Coming soon
                  </span>
                </div>
              </div>
              <div className="glass-line rounded-sm p-6 md:p-8">
                <h2 className="display-heading mb-6 text-6xl">Built to book.</h2>
                <p className="text-fog">
                  The homepage keeps the journey simple: watch the band, see the quality, check
                  availability, then enquire.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-ink py-20 md:py-32">
          <div className="section-shell">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow mb-4">Gallery</p>
                <h2 className="display-heading text-6xl md:text-8xl">Cinematic, curated, live.</h2>
              </div>
              <p className="max-w-md text-fog">
                This is ready for the strongest real performance photos: dramatic lighting, close
                connection, and audience energy.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[0, 1, 2].map((item) => (
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-sm bg-charcoal"
                  key={item}
                >
                  <Image
                    src="/assets/images/hero-stage.png"
                    alt="2HD gallery placeholder"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="band" className="bg-charcoal py-20 md:py-32">
          <div className="section-shell">
            <p className="eyebrow mb-4">Meet the band</p>
            <div className="grid gap-4 md:grid-cols-4">
              {bandMembers.map((member) => (
                <article className="glass-line rounded-sm p-6" key={member.name}>
                  <h3 className="display-heading text-5xl">{member.name}</h3>
                  <p className="mt-3 text-fog">{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="unplugged" className="bg-ink py-20 md:py-32">
          <div className="section-shell grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="eyebrow mb-4">2HD Unplugged</p>
              <h2 className="display-heading text-6xl md:text-8xl">The same songs, closer.</h2>
            </div>
            <div className="text-lg leading-8 text-fog">
              <p>
                2HD Unplugged is the acoustic version of 2HD, reimagining rock and pop favourites
                with a more relaxed, intimate feel for pubs, beer gardens, private functions and
                laid-back events.
              </p>
            </div>
          </div>
        </section>

        <SongExplorer songs={songs} />
        <Availability gigs={gigs} />
        <BookingForm />
      </main>
      <footer className="border-t border-white/10 bg-black py-8">
        <div className="section-shell flex flex-col justify-between gap-4 text-sm text-fog md:flex-row">
          <span>&copy; {new Date().getFullYear()} {site.fullName}</span>
          <span>{site.tagline}</span>
        </div>
      </footer>
    </>
  );
}
