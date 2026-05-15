'use client';

import { siteConfig } from '@/app/siteConfig';
import useScroll from '@/lib/use-scroll';
import { cx } from '@/lib/utils';
import { RiCloseLine, RiMenuLine, RiWhatsappLine } from '@remixicon/react';
import Link from 'next/link';
import React from 'react';

const navLinks = [
  { label: 'Nossas kitnets', href: siteConfig.baseLinks.nossasKitnets },
  { label: 'A Região', href: siteConfig.baseLinks.regiao },
];

export function Navigation() {
  const scrolled = useScroll(15);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia('(min-width: 768px)');
    const handleMediaQueryChange = () => setOpen(false);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange();
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  const handleWhatsApp = () =>
    window.open(
      'https://api.whatsapp.com/send?phone=5511944531303&text=Olá!%20Encontrei%20o%20anúncio%20no%20KitUsp%20e%20tenho%20interesse%20nas%20kitnets.',
      '_blank',
    );

  return (
    <header
      className={cx(
        'fixed inset-x-3 top-4 z-50 mx-auto flex max-w-5xl animate-slide-down-fade justify-center overflow-hidden rounded-2xl px-5 py-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1.03)]',
        open ? 'h-fit' : 'h-16',
        scrolled || open
          ? [
            'border',
            'border-slate-200/60 dark:border-slate-700/40',
            'bg-white/90 dark:bg-slate-900/90',
            'backdrop-blur-md',
            'shadow-lg shadow-slate-900/[0.06] dark:shadow-black/30',
          ]
          : 'bg-transparent border border-transparent',
      )}
    >
      <div className="w-full md:my-auto">
        {/* Main row */}
        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href={siteConfig.baseLinks.home} aria-label="Home" className="group flex items-center gap-2.5 shrink-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-100 transition-transform duration-200 group-hover:scale-95">
              <span className="text-[10px] font-black tracking-tighter text-white dark:text-slate-900 leading-none">
                KIT
              </span>
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-bold tracking-wide text-slate-900 dark:text-slate-50 uppercase">
                KitUSP
              </span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
                Butantã
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 rounded-lg transition-all duration-150 hover:text-slate-900 hover:bg-slate-100 dark:hover:text-slate-100 dark:hover:bg-slate-800/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-100 px-4 py-2 text-sm font-semibold text-white dark:text-slate-900 transition-all duration-200 hover:bg-slate-700 dark:hover:bg-white hover:shadow-md hover:scale-[0.98] active:scale-95"
            >
              <RiWhatsappLine size={15} />
              Contato
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-slate-100 px-3 py-2 text-xs font-semibold text-white dark:text-slate-900 transition-all duration-200 hover:bg-slate-700 dark:hover:bg-white active:scale-95"
            >
              <RiWhatsappLine size={13} />
              Contato
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 transition-all duration-150 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95"
              aria-label="Menu"
            >
              {open
                ? <RiCloseLine className="size-4" />
                : <RiMenuLine className="size-4" />
              }
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <nav
          className={cx(
            'md:hidden grid transition-all duration-300 ease-in-out',
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          {/* O overflow-hidden no filho interno é o que permite o grid-rows animar */}
          <div className="overflow-hidden">
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 pb-1 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}