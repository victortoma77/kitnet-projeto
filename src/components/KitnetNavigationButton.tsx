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

  if (currentIndex === -1) return null; // Ensure the key exists

  const prevKitName = kitKeys[currentIndex - 1] || kitKeys[kitKeys.length - 1]; // Loop back if at start
  const nextKitName = kitKeys[currentIndex + 1] || kitKeys[0]; // Loop back if at end

  return (
    <div className="mt-32 px-4 lg:px-24 w-full grid grid-cols-2">
      <Link
        href={`/kitnets/${prevKitName}`}
        className="text-blue-600 underline hover:text-blue-800 gap-2 flex items-center"
      >
        <RiArrowLeftLine size={16} /> {allKits[prevKitName].name}
      </Link>
      <Link
        href={`/kitnets/${nextKitName}`}
        className="place-self-end text-blue-600 underline hover:text-blue-800 gap-2 flex items-center"
      >
        {allKits[nextKitName].name} <RiArrowRightLine size={16} />
      </Link>
    </div>
  );
}
