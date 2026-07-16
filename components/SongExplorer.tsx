"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Song } from "@/data/site";

const initialCount = 10;

export function SongExplorer({ songs }: { songs: Song[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const filters = useMemo(() => {
    const genres = Array.from(new Set(songs.map((song) => song.genre))).sort();
    const decades = Array.from(new Set(songs.map((song) => song.decade))).sort();

    return ["All", ...genres, ...decades];
  }, [songs]);

  const visibleSongs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return songs.filter((song) => {
      const matchesFilter = filter === "All" || song.genre === filter || song.decade === filter;
      const matchesQuery = `${song.title} ${song.artist} ${song.genre} ${song.decade}`
        .toLowerCase()
        .includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [filter, query, songs]);

  const previewSongs = visibleSongs.slice(0, initialCount);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousActiveElement = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    searchRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousActiveElement?.focus();
    };
  }, [open]);

  return (
    <section id="songs" className="data-panel py-20 md:py-32">
      <div className="section-shell">
        <div className="mb-8 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow mb-4">Songs</p>
            <h2 className="display-heading text-6xl md:text-8xl">Set-list preview.</h2>
          </div>
          <div className="grid gap-3">
            <a className="skip-booking-link" href="#book">
              Skip to booking
            </a>
            <label className="grid gap-2 text-sm font-bold uppercase tracking-wide text-fog">
              Search the set
              <input
                className="min-h-12 rounded-sm border-0 border-b border-white/20 bg-transparent px-0 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-fog/60 focus:border-rose"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Artist, song, genre, decade..."
                type="search"
              />
            </label>
          </div>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {filters.map((item) => (
            <button
              className={`min-h-10 shrink-0 rounded-sm border px-4 text-sm font-black uppercase tracking-wide transition ${
                filter === item
                  ? "border-rose bg-rose text-white"
                  : "border-white/10 bg-transparent text-fog hover:border-white/30 hover:text-white"
              }`}
              key={item}
              type="button"
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mb-5 text-sm font-black uppercase tracking-wide text-fog">
          Showing {previewSongs.length} of {visibleSongs.length} songs
        </p>

        <div className="song-preview-grid">
          {previewSongs.map((song) => (
            <article className="song-row" key={`${song.artist}-${song.title}`}>
              <div>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
              <span>
                {song.genre} / {song.decade}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            className="button-primary"
            type="button"
            ref={openButtonRef}
            onClick={() => setOpen(true)}
          >
            Explore the full set list
          </button>
          <a className="button-secondary" href="#availability">
            Check Availability
          </a>
          <a className="button-secondary" href="#book">
            Book 2HD
          </a>
        </div>

        <div className="setlist-cta">
          <p>Seen enough? Check our availability</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#availability">
              Check Availability
            </a>
            <a className="button-secondary" href="#book">
              Book 2HD
            </a>
          </div>
        </div>
      </div>

      <a className="mobile-sticky-cta" href="#book">
        Book 2HD
      </a>

      {open ? (
        <div className="setlist-dialog" role="presentation">
          <button
            className="setlist-backdrop"
            type="button"
            aria-label="Close full set list"
            onClick={() => setOpen(false)}
          />
          <div
            className="setlist-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="setlist-title"
            ref={drawerRef}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="eyebrow mb-3">Full set list</p>
                <h3 id="setlist-title" className="display-heading text-5xl text-white md:text-6xl">
                  Songs You Forgot You Loved
                </h3>
              </div>
              <button className="setlist-close" type="button" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold uppercase tracking-wide text-fog">
              Search
              <input
                className="min-h-12 rounded-sm border-0 border-b border-white/20 bg-transparent px-0 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-fog/60 focus:border-rose"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Artist, song, genre, decade..."
                type="search"
                ref={searchRef}
              />
            </label>

            <div className="my-5 flex gap-2 overflow-x-auto pb-2">
              {filters.map((item) => (
                <button
                  className={`min-h-10 shrink-0 rounded-sm border px-4 text-sm font-black uppercase tracking-wide transition ${
                    filter === item
                      ? "border-rose bg-rose text-white"
                      : "border-white/10 bg-transparent text-fog hover:border-white/30 hover:text-white"
                  }`}
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="mb-3 text-sm font-black uppercase tracking-wide text-fog">
              Showing {visibleSongs.length} of {songs.length} songs
            </p>
            <div className="setlist-scroll">
              {visibleSongs.map((song) => (
                <article className="song-row" key={`${song.artist}-${song.title}-drawer`}>
                  <div>
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                  </div>
                  <span>
                    {song.genre} / {song.decade}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
