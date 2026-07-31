import Link from "next/link";
import { serviceAreas } from "@/data/areas";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="section-shell grid gap-8 text-sm text-fog md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-black uppercase tracking-wide text-white">{site.fullName}</p>
          <p className="mt-2">{site.tagline}</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} {site.fullName}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-3 font-black uppercase tracking-wide text-white">Local live band</p>
            <nav className="grid gap-2" aria-label="Local cover band pages">
              {serviceAreas.map((area) => (
                <Link
                  className="transition hover:text-rose"
                  href={`/cover-band/${area.slug}/`}
                  key={area.slug}
                >
                  Covers band in {area.county}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="mb-3 font-black uppercase tracking-wide text-white">Follow 2HD</p>
            <div className="grid gap-2">
              <a
                className="transition hover:text-rose"
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="transition hover:text-rose"
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
