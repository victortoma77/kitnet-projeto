'use client';

import Link from 'next/link';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import { usePathname } from 'next/navigation';

type NavigationButtonsProps = {
};
// comentar kitnets que não estão no site
const allKits: Record<string, { name: string }> = {
  //['abadia-dos-dourados-1']: { name: 'Kitnet Abadia dos Dourados 1' },
  //['abadia-dos-dourados-2']: { name: 'Kitnet Abadia dos Dourados 2' },
  ['kit-31A']: { name: 'Kitnet 31A Rua Abadia dos Dourados' },
  //['kit-40A']: { name: 'Kitnet 40A Rua Abadia dos Dourados' },
  //['loft-03-corinto']: { name: 'Loft 03 Rua Corinto' },
  ['loft-05-corinto']: { name: 'Loft 05 Rua Corinto' },
};

export default function KitnetNavigationButton({}: NavigationButtonsProps) {
  const pathname = usePathname();
  const kitKey = pathname.split('/').filter(Boolean).slice(-1)[0];
  const kitKeys = Object.keys(allKits);
  const currentIndex = kitKeys.indexOf(kitKey);

  if (currentIndex === -1) return null;

  const prevKitName = currentIndex > 0 ? kitKeys[currentIndex - 1] : null;
  const nextKitName = currentIndex < kitKeys.length - 1 ? kitKeys[currentIndex + 1] : null;

  return (
    <div className="mt-32 px-4 lg:px-24 w-full grid grid-cols-2">
      <div>
        {prevKitName && (
          <Link
            href={`/kitnets/${prevKitName}`}
            className="
              group inline-flex flex-col gap-1
              text-slate-400 hover:text-slate-900
              dark:text-slate-500 dark:hover:text-slate-100
              transition-colors duration-200
            "
          >
            <span className="text-xs uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">
              Anterior
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold">
              <RiArrowLeftLine
                size={14}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              {allKits[prevKitName].name}
            </span>
          </Link>
        )}
      </div>

      <div className="place-self-end">
        {nextKitName && (
          <Link
            href={`/kitnets/${nextKitName}`}
            className="
              group inline-flex flex-col items-end gap-1
              text-slate-400 hover:text-slate-900
              dark:text-slate-500 dark:hover:text-slate-100
              transition-colors duration-200
            "
          >
            <span className="text-xs uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">
              Próximo
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold">
              {allKits[nextKitName].name}
              <RiArrowRightLine
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
