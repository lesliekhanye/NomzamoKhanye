"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <nav className="page-width nav-inner" aria-label="Main navigation">
        <Link
          href="/#hero"
          className="wordmark"
          onClick={() => setOpen(false)}
          aria-label="Nomzamo Khanye, home"
        >
          nk<span>.</span>
        </Link>
        <div className="desktop-nav">
          <Link href="/#projects">Selected work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact" className="nav-contact">
            Let’s connect <ArrowUpRight size={14} />
          </Link>
        </div>
        <button
          className="mobile-menu-button icon-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        {open && (
          <div id="mobile-navigation" className="mobile-nav">
            <Link href="/#projects" onClick={() => setOpen(false)}>
              Selected work
            </Link>
            <Link href="/#about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Let’s connect <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
