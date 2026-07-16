"use client";

import { useMemo, useState } from "react";
import type { Song } from "@/data/site";

export function SongExplorer({ songs }: { songs: Song[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filters = useMemo(() => {
    const genres = Array.from(new Set(songs.map((song) => song.genre))).sort();

    return ["All", ...genres];
  }, [songs]);

  const visibleSongs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return songs.filter((song) => {
      const matchesFilter = filter === "All" || song.genre === filter;
      const matchesQuery = `${song.title} ${song.artist} ${song.genre} ${song.decade}`
        .toLowerCase()
        .includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [filter, query, songs]);

  return (
    <section id="songs" className="bg-charcoal py-20 md:py-32">
      <div className="section-shell">
        <div className="mb-8 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow mb-4">Songs</p>
            <h2 className="display-heading text-6xl md:text-8xl">Search the set.</h2>
          </div>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-wide text-fog">
            Instant search
            <input
              className="min-h-12 rounded-sm border border-white/10 bg-white/5 px-4 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-fog/60 focus:border-rose"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Artist, song, genre, decade..."
              type="search"
            />
          </label>
        </div>
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {filters.map((item) => (
            <button
              className={`min-h-10 shrink-0 rounded-sm border px-4 text-sm font-black uppercase tracking-wide transition ${
                filter === item
                  ? "border-rose bg-rose text-white"
                  : "border-white/10 bg-white/5 text-fog hover:text-white"
              }`}
              key={item}
              type="button"
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {visibleSongs.map((song) => (
            <article className="glass-line rounded-sm p-5" key={`${song.artist}-${song.title}`}>
              <h3 className="text-lg font-black text-white">{song.title}</h3>
              <p className="mt-1 text-fog">{song.artist}</p>
              <p className="mt-4 text-xs font-black uppercase tracking-wide text-rose">
                {song.genre} / {song.decade}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
