'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      loop
      className="w-full h-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="my-auto">
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            className="w-full h-auto object-cover"
            width={400}
            height={400}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
