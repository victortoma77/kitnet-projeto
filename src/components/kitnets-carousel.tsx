'use client';

import Carousel from '@/components/ui/Carousel';
import { usePathname } from 'next/navigation';

export const KitnetCarousel = ({ imagePaths }: { imagePaths: Record<string, string[]> }) => {
  const pathname = usePathname();
  const kitKey = pathname.split('/').filter(Boolean).slice(-1)[0];
  const areaComum = kitKey.includes("corinto") ? [] : imagePaths['area-comum'];
  return <Carousel images={[...(imagePaths[kitKey] ?? []), ...areaComum]} />;
};
