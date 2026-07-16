"use client";

import { useMemo } from "react";
import type { Gig } from "@/data/site";

const weekdayFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  weekday: "short"
});

const monthFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric"
});

const badgeStyles: Record<Gig["type"], string> = {
  Electric: "border-rose/50 bg-rose/12 text-white",
  Unplugged: "border-[#d7a86e]/55 bg-[#d7a86e]/12 text-[#f2d8b5]",
  "Private function": "border-white/16 bg-white/8 text-fog"
};

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function buildDate(date: string) {
  return new Date(`${date}T12:00:00`);
}

function getWeekday(date: Date) {
  return (
    weekdayFormatter
      .formatToParts(date)
      .find((part) => part.type === "weekday")?.value ?? ""
  );
}

export function Availability({ gigs }: { gigs: Gig[] }) {
  const groupedGigs = useMemo(() => {
    const today = getLocalDateKey();
    const upcoming = gigs
      .filter((gig) => gig.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date));

    return upcoming.reduce<Array<{ month: string; items: Gig[] }>>((groups, gig) => {
      const month = monthFormatter.format(buildDate(gig.date));
      const currentGroup = groups.at(-1);

      if (currentGroup?.month === month) {
        currentGroup.items.push(gig);
      } else {
        groups.push({ month, items: [gig] });
      }

      return groups;
    }, []);
  }, [gigs]);

  return (
    <section id="availability" className="bg-ink py-20 md:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="eyebrow mb-4">Availability</p>
          <h2 className="display-heading text-6xl md:text-8xl">Upcoming shows</h2>
          <p className="mt-6 text-lg leading-8 text-fog">
            See where 2HD are playing next — electric and unplugged.
          </p>
        </div>

        <div className="show-timeline">
          {groupedGigs.length > 0 ? (
            groupedGigs.map((group) => (
              <div className="show-month" key={group.month}>
                <h3 className="display-heading text-4xl text-white md:text-5xl">{group.month}</h3>
                <div className="mt-5 grid gap-3">
                  {group.items.map((gig) => {
                    const date = buildDate(gig.date);

                    return (
                      <article className="show-card" key={`${gig.date}-${gig.title}`}>
                        <time className="show-date-tile" dateTime={gig.date}>
                          <span>{getWeekday(date)}</span>
                          <strong>{String(date.getDate()).padStart(2, "0")}</strong>
                        </time>
                        <div className="min-w-0">
                          <h4 className="text-xl font-black leading-tight text-white">{gig.title}</h4>
                          <p className="mt-1 text-sm text-fog">
                            {gig.public && gig.venue ? gig.venue : "Details withheld"}
                            {gig.time ? ` / ${gig.time}` : ""}
                          </p>
                        </div>
                        <span className={`show-badge ${badgeStyles[gig.type]}`}>{gig.type}</span>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <p className="border-y border-white/10 py-6 text-fog">
              No upcoming public dates are currently listed. For availability, please get in touch.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
