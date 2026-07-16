import { site } from "@/data/site";

export function BookingForm() {
  return (
    <section id="book" className="bg-charcoal py-20 md:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow mb-4">Book 2HD</p>
          <h2 className="display-heading text-6xl md:text-8xl">Make the night memorable.</h2>
          <p className="mt-6 text-lg leading-8 text-fog">
            Tell us the date, venue, location and event type. No pricing is shown publicly; every
            enquiry can be handled properly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-sm border border-white/10 px-4 py-3 font-black text-fog" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="rounded-sm border border-white/10 px-4 py-3 font-black text-fog" href={site.socials.facebook}>
              Facebook
            </a>
            <a className="rounded-sm border border-white/10 px-4 py-3 font-black text-fog" href={site.socials.instagram}>
              Instagram
            </a>
          </div>
        </div>
        <form
          className="glass-line grid gap-5 rounded-sm p-5 md:p-7"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
        >
          <label className="grid gap-2 text-sm font-bold uppercase tracking-wide text-fog">
            Name
            <input className="min-h-12 rounded-sm border border-white/10 bg-white/5 px-4 text-base normal-case tracking-normal text-white outline-none focus:border-rose" name="name" required />
          </label>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-wide text-fog">
            Email
            <input className="min-h-12 rounded-sm border border-white/10 bg-white/5 px-4 text-base normal-case tracking-normal text-white outline-none focus:border-rose" name="email" type="email" required />
          </label>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-wide text-fog">
            Event date
            <input className="min-h-12 rounded-sm border border-white/10 bg-white/5 px-4 text-base normal-case tracking-normal text-white outline-none focus:border-rose" name="event-date" type="date" />
          </label>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-wide text-fog">
            Message
            <textarea className="min-h-36 rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-base normal-case tracking-normal text-white outline-none focus:border-rose" name="message" required />
          </label>
          <button className="min-h-12 rounded-sm bg-rose px-5 text-sm font-black uppercase tracking-wide text-white" type="submit">
            Book 2HD
          </button>
        </form>
      </div>
    </section>
  );
}
