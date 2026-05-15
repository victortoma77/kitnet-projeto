'use client';

import { siteConfig } from '@/app/siteConfig';
import useScroll from '@/lib/use-scroll';
import { cx } from '@/lib/utils';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import Link from 'next/link';
import React from 'react';
import { Button } from './Button';

const navButtons = [
  <Link
    key={0}
    className="px-2 py-1 text-gray-900 dark:text-gray-50 rounded-md transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
    href={siteConfig.baseLinks.nossasKitnets}
  >
    Nossas kitnets
  </Link>,
  <Link
    key={1}
    className="px-2 py-1 text-gray-900 dark:text-gray-50 rounded-md transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
    href={siteConfig.baseLinks.regiao}
  >
    A Região
  </Link>,
];

export function Navigation() {
  const scrolled = useScroll(15);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia('(min-width: 768px)');
    const handleMediaQueryChange = () => {
      setOpen(false);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <header
      className={cx(
        'fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform',
        open === true ? 'h-fit' : 'h-16',
        scrolled || open === true
          ? 'backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70'
          : 'bg-white/0 dark:bg-gray-950/0',
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Company logo</span>
            <p>KITUSP BUTANTÃ</p>
          </Link>
          <nav className="flex items-center gap-10 font-medium hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            {navButtons.map((x) => x)}
          </nav>
          <Button
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=5511944531303&text=Olá!%20Encontrei%20o%20anúncio%20no%20KitUsp%20e%20tenho%20interesse%20nas%20kitnets.',
                '_blank',
              )
            }
            className="hidden h-10 font-semibold md:flex"
          >
            Contato
          </Button>
          <div className="flex gap-x-2 md:hidden">
            <Button
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=5511944531303&text=Olá!%20Encontrei%20o%20anúncio%20no%20KitUsp%20e%20tenho%20interesse%20nas%20kitnets.',
                  '_blank',
                )
              }
            >
              Contato
            </Button>
            <Button onClick={() => setOpen(!open)} variant="light" className="aspect-square p-2">
              {open ? (
                <RiCloseLine aria-hidden="true" className="size-5" />
              ) : (
                <RiMenuLine aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            'my-6 flex text-lg ease-in-out will-change-transform md:hidden',
            open ? '' : 'hidden',
          )}
        >
          <ul className="space-y-4 font-medium">
            {navButtons.map((x, idx) => (
              <li key={idx} onClick={() => setOpen(false)}>
                {x}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
