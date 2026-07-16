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
    src: "/assets/images/group-backstage.jpg",
    alt: "The four members of 2HD together backstage after a live show",
    className: "md:col-span-2 md:row-span-2 aspect-[16/11]",
    imageClassName: "object-cover"
  },
  {
    src: "/assets/images/gallery-full-band.jpg",
    alt: "2HD performing live as a four-piece band",
    className: "aspect-[4/5]",
    imageClassName: "object-cover"
  },
  {
    src: "/assets/images/gallery-black-white.jpg",
    alt: "2HD vocalist and guitarist performing in black and white",
    className: "aspect-[5/4]",
    imageClassName: "object-cover"
  },
  {
    src: "/assets/images/gallery-stage-wide.jpg",
    alt: "2HD performing on an outdoor stage",
    className: "aspect-[5/4]",
    imageClassName: "object-cover"
  },
  {
    src: "/assets/images/gallery-crick-stage.jpg",
    alt: "2HD performing at an outdoor event stage",
    className: "aspect-[4/3]",
    imageClassName: "object-cover"
  },
  {
    src: "/assets/images/gallery-bass.jpg",
    alt: "2HD bassist performing live",
    className: "md:col-span-2 aspect-[16/9]",
    imageClassName: "object-cover object-top"
  },
  {
    src: "/assets/images/hero-poster.jpg",
    alt: "2HD branded drum kit under purple stage lighting",
    className: "aspect-[4/5]",
    imageClassName: "object-cover"
  }
];

const bandPanels = [
  {
    ...bandMembers[0],
    role: "Vocals",
    image: "/assets/images/member-cleo.jpg",
    imageClassName: "object-cover"
  },
  {
    ...bandMembers[1],
    role: "Guitar & Backing Vocals",
    image: "/assets/images/member-john.jpg",
    imageClassName: "object-cover object-top"
  },
  {
    ...bandMembers[2],
    role: "Drums",
    image: "/assets/images/member-dave.jpg",
    imageClassName: "object-cover"
  },
  {
    ...bandMembers[3],
    role: "Bass, Backing Vocals & Keys",
    image: "/assets/images/gallery-bass.jpg",
    imageClassName: "object-cover object-top"
  }
];

const biography = [
  "2HD is a four-piece live band based in West Northamptonshire, delivering energetic performances that blend rock, punk, indie, new wave and alternative pop. Formed in 2019 and established in its current line-up since 2023, the band performs between 25 and 45 shows each year across pubs, clubs, festivals and private functions.",
  "The name 2HD is a nod to Secondhand Daylight, the influential 1979 album by post-punk pioneers Magazine. The band originally performed Magazine's classic Shot by Both Sides, and the name remains a tribute to those alternative roots that continue to influence their musical style today.",
  "Combining well-loved classics with songs audiences had forgotten they loved, 2HD has built a reputation for delivering fresh, energetic live performances that stand out from the usual covers-band repertoire. Drawing inspiration from rock, punk, new wave, indie and alternative pop, every set is carefully crafted to keep audiences singing, dancing and engaged from the first song to the last.",
  "At the heart of 2HD is a classic four-piece line-up: powerful vocals, driving guitars, solid bass and dynamic drums. The result is an authentic live sound with plenty of energy, delivered with the musicianship and professionalism that has helped the band build a loyal following across the Midlands.",
  "Alongside its full electric show, 2HD also offers 2HD Unplugged, reimagining rock and pop favourites with a more relaxed, intimate feel. It's an ideal option for pubs, beer gardens, private functions and occasions where a stripped-back atmosphere is the perfect fit.",
  "Whether performing an energetic Saturday night show or a laid-back acoustic session, 2HD's aim is always the same: to deliver memorable live music, create a fantastic atmosphere and leave audiences wanting one more song."
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
          <div className="section-shell grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="eyebrow mb-4">Why 2HD?</p>
              <h2 className="display-heading max-w-2xl text-6xl md:text-8xl">
                Not just another covers band.
              </h2>
            </div>
            <div className="why-copy">
              <p>
                Combining well-loved classics with songs audiences had forgotten they loved, 2HD
                delivers a fresh, energetic live show that keeps audiences singing, dancing and
                coming back for more.
              </p>
              <div className="mt-8 grid gap-1 sm:grid-cols-3">
                {["Rock / punk / indie", "25-45 shows each year", "Electric or Unplugged"].map(
                  (item) => (
                    <span className="why-pill" key={item}>
                      {item}
                    </span>
                  )
                )}
              </div>
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

        <section id="story" className="story-band bg-ink py-20 md:py-32">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow mb-4">About 2HD</p>
              <h2 className="display-heading text-6xl md:text-8xl">The Story</h2>
            </div>
            <div className="story-copy">
              {biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
                    className={image.imageClassName}
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
                    className={member.imageClassName}
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
              <h2 className="display-heading text-6xl md:text-8xl">The same songs. Closer.</h2>
              <p>
                Sometimes the best songs don&apos;t need to be louder - just played differently. 2HD
                Unplugged strips everything back to create a relaxed, intimate performance that&apos;s
                perfect for pubs, beer gardens, parties and private functions, while still
                delivering the musicianship and audience interaction that defines every 2HD show.
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
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>{site.tagline}</span>
            <a
              className="font-bold text-white transition hover:text-rose"
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow 2HD on Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
