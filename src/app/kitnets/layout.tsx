import KitnetNavigationButton from '@/components/KitnetNavigationButton';
import { KitnetCarousel } from '@/components/kitnets-carousel';
import { getImagesFromFolder } from '@/lib/getImagesFromFolder';

export const metadata = {
  title: 'Kitnets do Elio',
};

const Page = ({ children }: { children: React.ReactNode }) => {
  const imagePaths = getImagesFromFolder();
  return (
    <>
      <KitnetNavigationButton />

      <div className="flex flex-col w-[95%] mx-auto lg:w-[85%] items-center justify-between gap-8 px-4 py-12 md:flex-row md:px-16">
        <div className="text-left self-start ml-6 lg:ml-10 mt-6 lg:mt-20 md:w-1/2 md:text-left ml-10">
          {children}
        </div>

        <div className="w-full md:w-1/2">
          <KitnetCarousel imagePaths={imagePaths} />
        </div>
      </div>
    </>
  );
};

export default Page;
