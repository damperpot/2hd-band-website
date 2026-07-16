import { site } from "@/data/site";

export function CinematicHero() {
  return (
    <section id="home" className="hero-stage relative min-h-screen overflow-hidden bg-black">
      <video
        className="hero-video image-treated-media absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/hero-poster.jpg"
        aria-label="2HD live promo video"
      >
        <source src="/assets/video/promo.mp4" type="video/mp4" />
      </video>
      <div className="ember-field" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,104,116,0.2),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.78),rgba(9,9,9,0.48)_45%,#090909_100%)]" />
      <div className="hero-haze" aria-hidden="true" />

      <div className="section-shell relative z-10 flex min-h-screen flex-col items-center justify-center px-0 pb-24 pt-28 text-center">
        <div className="hero-logo-reveal relative mb-7 h-[min(45vw,270px)] w-[min(45vw,270px)]">
          <div className="hero-forge-ring" aria-hidden="true" />
          <div className="hero-sparks" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="hero-logo-image" role="img" aria-label="2HD" />
        </div>

        <p className="hero-tagline display-heading max-w-5xl text-[clamp(3.4rem,9vw,7.8rem)] text-white">
          {site.tagline}
        </p>
        <p className="hero-subcopy mt-4 max-w-2xl text-base leading-7 text-fog md:text-lg">
          Classic rock, punk, indie and new wave favourites, played with the kind of live energy
          that makes the room remember every word.
        </p>
        <div className="hero-ctas mt-7 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <a className="button-primary" href="#watch">
            Watch Promo
          </a>
          <a className="button-secondary" href="#availability">
            Check Availability
          </a>
        </div>
      </div>

      <a
        className="scroll-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.68rem] font-black uppercase text-fog"
        href="#why"
        aria-label="Scroll to Why 2HD"
      >
        <span className="mb-3 block h-9 w-px bg-gradient-to-b from-white/70 to-transparent" />
        Live band
      </a>
    </section>
  );
}
