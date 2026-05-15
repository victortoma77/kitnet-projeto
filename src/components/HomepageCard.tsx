
import Image from 'next/image';
import { Card } from './ui/Card';

export const HomepageCard = ({
  items,
}: {
  items: { name: string; imagem: string; url: string, target?: string }[];
}) => {
  return (
    <div className="flex gap-4 rounded-lg mt-4 w-max">
      {items.map((kit, idx) => (
        <a href={kit.url} key={idx} target={kit.target}>
          <Card className="flex flex-col h-[25rem] w-[18rem] border-lg p-0 cursor-pointer">
            <Image
              src={kit.imagem}
              alt=""
              width={250}
              height={250}
              className="h-[80%] w-full object-cover rounded-t-lg"
              quality={100}
            />
            <p className="mt-4 pl-4">{kit.name}</p>
          </Card>
        </a>
      ))}
    </div>
  );
};
