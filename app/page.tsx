import Image from "next/image";
import { Availability } from "@/components/Availability";
import { BookingForm } from "@/components/BookingForm";
import { CinematicHero } from "@/components/CinematicHero";
import { Header } from "@/components/Header";
import { SongExplorer } from "@/components/SongExplorer";
import { bandMembers, gigs, site, songs } from "@/data/site";

const genres = Array.from(new Set(songs.map((song) => song.genre))).sort();

const galleryImages = [
  {
    src: "/assets/images/gallery-full-band.jpg",
    alt: "2HD performing live as a four-piece band",
    className: "md:col-span-2 md:row-span-2 aspect-[16/11]"
  },
  {
    src: "/assets/images/gallery-black-white.jpg",
    alt: "2HD vocalist and guitarist performing in black and white",
    className: "aspect-[4/5]"
  },
  {
    src: "/assets/images/gallery-stage-wide.jpg",
    alt: "2HD performing on an outdoor stage",
    className: "aspect-[5/4]"
  },
  {
    src: "/assets/images/gallery-crick-stage.jpg",
    alt: "2HD performing at an outdoor event stage",
    className: "aspect-[4/3]"
  },
  {
    src: "/assets/images/gallery-bass.jpg",
    alt: "2HD bassist performing live",
    className: "md:col-span-2 aspect-[16/9]"
  },
  {
    src: "/assets/images/hero-poster.jpg",
    alt: "2HD branded drum kit under purple stage lighting",
    className: "aspect-[4/5]"
  }
];

const bandPanels = [
  {
    ...bandMembers[0],
    role: "Vocals",
    image: "/assets/images/gallery-black-white.jpg"
  },
  {
    ...bandMembers[1],
    role: "Guitar & Backing Vocals",
    image: "/assets/images/gallery-full-band.jpg"
  },
  {
    ...bandMembers[2],
    role: "Drums",
    image: "/assets/images/hero-poster.jpg"
  },
  {
    ...bandMembers[3],
    role: "Bass, Backing Vocals & Keys",
    image: "/assets/images/gallery-bass.jpg"
  }
];

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
        <CinematicHero />

        <section id="why" className="section-band bg-ink py-20 md:py-32">
          <div className="section-shell grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="eyebrow mb-4">Live</p>
              <h2 className="display-heading max-w-2xl text-6xl md:text-8xl">
                Not just another covers band.
              </h2>
            </div>
            <div className="statement-grid">
              {[
                "Songs audiences had forgotten they loved",
                "Rock, punk, indie, new wave and alternative pop",
                "25-45 live shows each year",
                "Full electric show or 2HD Unplugged"
              ].map((statement) => (
                <p className="statement" key={statement}>
                  {statement}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="watch" className="bg-charcoal py-20 md:py-32">
          <div className="section-shell">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow mb-4">Watch us live</p>
              <h2 className="display-heading text-6xl md:text-8xl">Proof in the room.</h2>
            </div>
            <div className="watch-panel relative overflow-hidden bg-black shadow-glow">
              <video
                className="aspect-video w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/assets/images/gallery-full-band.jpg"
                aria-label="2HD promo video"
              >
                <source src="/assets/video/promo.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/82 to-transparent p-5 md:p-8">
                <p className="max-w-xl text-sm font-black uppercase tracking-wide text-white">
                  Four-piece live band. Familiar songs. Real stage energy.
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
                <h2 className="display-heading text-6xl md:text-8xl">Cinematic. Curated. Live.</h2>
              </div>
              <p className="max-w-sm text-fog">
                Real performance images, built around light, movement and the feel of a room waking
                up.
              </p>
            </div>
            <div className="gallery-editorial grid auto-rows-auto gap-4 md:grid-cols-3">
              {galleryImages.map((image) => (
                <div
                  className={`image-frame relative overflow-hidden bg-charcoal ${image.className}`}
                  key={image.src}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
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
            <div className="mb-10">
              <p className="eyebrow mb-4">Meet the band</p>
              <h2 className="display-heading text-6xl md:text-8xl">Four people. One lift.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {bandPanels.map((member) => (
                <article className="band-panel image-frame relative aspect-[4/5] overflow-hidden" key={member.name}>
                  <Image
                    src={member.image}
                    alt={`${member.name} of 2HD performing live`}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="display-heading text-5xl">{member.name}</h3>
                    <p className="mt-2 text-sm font-black uppercase tracking-wide text-fog">
                      {member.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="unplugged" className="unplugged-band py-20 md:py-32">
          <div className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
              <Image
                src="/assets/images/gallery-crick-stage.jpg"
                alt="2HD performing an outdoor live set"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <div>
              <p className="eyebrow mb-4 text-[#d7a86e]">2HD Unplugged</p>
              <h2 className="display-heading text-6xl md:text-8xl">The same songs, closer.</h2>
              <p>
                2HD Unplugged is the acoustic version of 2HD, reimagining rock and pop favourites
                with a relaxed, intimate feel for pubs, beer gardens, parties and private
                functions.
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
