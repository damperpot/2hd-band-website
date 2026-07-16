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
    <section id="songs" className="data-panel py-20 md:py-32">
      <div className="section-shell">
        <div className="mb-8 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow mb-4">Songs</p>
            <h2 className="display-heading text-6xl md:text-8xl">Search the set.</h2>
          </div>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-wide text-fog">
            Instant search
            <input
              className="min-h-12 rounded-sm border-0 border-b border-white/20 bg-transparent px-0 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-fog/60 focus:border-rose"
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
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {visibleSongs.map((song) => (
            <article
              className="border-t border-white/10 py-5 transition hover:border-rose"
              key={`${song.artist}-${song.title}`}
            >
              <h3 className="text-lg font-black leading-tight text-white">{song.title}</h3>
              <p className="mt-1 text-sm text-fog">{song.artist}</p>
              <p className="mt-4 text-[0.68rem] font-black uppercase tracking-wide text-rose">
                {song.genre} / {song.decade}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
