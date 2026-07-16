"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const navItems = [
  ["Live", "#why"],
  ["Story", "#story"],
  ["Gallery", "#gallery"],
  ["Band", "#band"],
  ["Unplugged", "#unplugged"],
  ["Songs", "#songs"],
  ["Availability", "#availability"],
  ["Book", "#book"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled || open
          ? "border-white/10 bg-ink/90 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4 md:min-h-20">
        <a className="flex items-center gap-3" href="#home" onClick={() => setOpen(false)}>
          <span className="relative h-10 w-10 md:h-12 md:w-12">
            <Image
              src="/assets/logo/2hd-energy-ring.png"
              alt={site.name}
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </span>
          <span className="hidden text-xs font-black uppercase tracking-[0.18em] text-fog sm:block">
            2nd Hand Daylight
          </span>
        </a>
        <button
          className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 md:hidden"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-5 bg-white" />
        </button>
        <nav
          className={`absolute inset-x-0 top-16 grid gap-1 border-b border-white/10 bg-ink p-4 md:static md:flex md:border-0 md:bg-transparent md:p-0 ${
            open ? "grid" : "hidden md:flex"
          }`}
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => (
            <a
              className="nav-link rounded-sm px-3 py-3 text-sm font-black uppercase tracking-wide text-fog transition hover:text-white md:py-2"
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
