"use client";

import { useMemo, useState } from "react";

export type PublicAvailabilityDay = {
  date: string;
  status: "available" | "check" | "unavailable";
};

const monthLabel = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" });
const fullDateLabel = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

const statusCopy = {
  available: { label: "Available", className: "weekend-day-available" },
  check: { label: "Please enquire", className: "weekend-day-check" },
  unavailable: { label: "Unavailable", className: "weekend-day-unavailable" }
} as const;

function localDate(date: string) {
  return new Date(`${date}T12:00:00`);
}

function monthKey(date: string) {
  return date.slice(0, 7);
}

function chooseDate(date: string) {
  const field = document.querySelector<HTMLInputElement>('input[name="Event date"]');
  if (!field) return;
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
  setter?.call(field, date);
  field.dispatchEvent(new Event("input", { bubbles: true }));
  field.dispatchEvent(new Event("change", { bubbles: true }));
  document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => field.focus(), 500);
}

export function WeekendCalendar({ days }: { days: PublicAvailabilityDay[] }) {
  const months = useMemo(() => Array.from(new Set(days.map((day) => monthKey(day.date)))), [days]);
  const [monthIndex, setMonthIndex] = useState(0);
  const selectedMonth = months[monthIndex];
  const monthDays = days.filter((day) => monthKey(day.date) === selectedMonth);
  const firstDay = monthDays[0] ? localDate(monthDays[0].date).getDay() : 5;
  const leadingBlanks = firstDay === 6 ? 1 : firstDay === 0 ? 2 : 0;

  if (!selectedMonth) return null;

  return (
    <section className="weekend-calendar bg-charcoal py-20 md:py-28" aria-labelledby="weekend-calendar-title">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="eyebrow mb-4">Weekend availability</p>
          <h2 id="weekend-calendar-title" className="display-heading text-6xl md:text-8xl">
            Find your date.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-fog">
            Browse our Friday, Saturday and Sunday availability. Select an available date to add it
            straight to your booking enquiry.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-fog" aria-label="Calendar key">
            <span><i className="legend-dot legend-available" />Available</span>
            <span><i className="legend-dot legend-check" />Please enquire</span>
            <span><i className="legend-dot legend-unavailable" />Unavailable</span>
          </div>
          <p className="mt-5 text-sm leading-6 text-fog">
            Availability is a guide and is confirmed when we reply. Friday bookings can depend on
            location and travel time.
          </p>
        </div>

        <div className="calendar-panel">
          <div className="calendar-toolbar">
            <button
              type="button"
              onClick={() => setMonthIndex((index) => Math.max(0, index - 1))}
              disabled={monthIndex === 0}
              aria-label="Previous month"
            >
              ←
            </button>
            <h3>{monthLabel.format(localDate(`${selectedMonth}-01`))}</h3>
            <button
              type="button"
              onClick={() => setMonthIndex((index) => Math.min(months.length - 1, index + 1))}
              disabled={monthIndex === months.length - 1}
              aria-label="Next month"
            >
              →
            </button>
          </div>

          <div className="weekend-grid" role="list">
            <div className="weekend-column-heading">Friday</div>
            <div className="weekend-column-heading">Saturday</div>
            <div className="weekend-column-heading">Sunday</div>
            {Array.from({ length: leadingBlanks }, (_, index) => (
              <span className="weekend-day-blank" aria-hidden="true" key={`blank-${index}`} />
            ))}
            {monthDays.map((day) => {
              const date = localDate(day.date);
              const copy = statusCopy[day.status];
              const selectable = day.status !== "unavailable";
              return (
                <button
                  className={`weekend-day ${copy.className}`}
                  key={day.date}
                  type="button"
                  disabled={!selectable}
                  onClick={() => chooseDate(day.date)}
                  aria-label={`${fullDateLabel.format(date)}: ${copy.label}`}
                  role="listitem"
                >
                  <span>{date.toLocaleDateString("en-GB", { weekday: "short" })}</span>
                  <strong>{date.getDate()}</strong>
                  <small>{copy.label}</small>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
