import type { Gig } from "@/data/site";

export function Availability({ gigs }: { gigs: Gig[] }) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  return (
    <section id="availability" className="bg-ink py-20 md:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="eyebrow mb-4">Availability</p>
          <h2 className="display-heading text-6xl md:text-8xl">Check the diary.</h2>
          <p className="mt-6 text-lg leading-8 text-fog">
            TimeTree automation is the long-term plan. Version 0.1 keeps this simple and editable
            so enquiries can start moving quickly.
          </p>
        </div>
        <div className="grid gap-3">
          {gigs.map((gig) => (
            <article
              className="grid gap-4 rounded-sm border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[150px_1fr_auto] sm:items-center"
              key={`${gig.date}-${gig.venue}`}
            >
              <time className="text-sm font-black uppercase tracking-wide text-rose" dateTime={gig.date}>
                {formatter.format(new Date(`${gig.date}T12:00:00`))}
              </time>
              <div>
                <h3 className="font-black text-white">{gig.venue}</h3>
                <p className="text-fog">{gig.location}</p>
              </div>
              <span className="w-fit rounded-sm border border-white/10 px-3 py-2 text-xs font-black uppercase tracking-wide text-white">
                {gig.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
