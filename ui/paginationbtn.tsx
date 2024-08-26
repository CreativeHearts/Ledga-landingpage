'use client';

import Image from 'next/image';
import arrowLeft from '@/public/Vector 2.png';
import arrowRight from '@/public/Vector 3.png';
import { useSwiper } from 'swiper/react';

export default function PaginationBtn() {
  const swiper = useSwiper();
  return (
    <div className='flex gap-2 z-10 absolute bottom-0 right-[50%] translate-x-1/2 '>
      <div
        onClick={() => swiper.slidePrev()}
        className=' bg-black w-12 h-12 rounded-full flex justify-center items-center hover:bg-blue-700'
      >
        <Image
          src={arrowLeft}
          alt='Arrow left'
          className=' w-[20px] h-[19px] swiper-pagination'
        />
      </div>
      <div
        onClick={() => swiper.slideNext()}
        className=' bg-[#BDD0F1] w-12 h-12 flex justify-center rounded-full items-center hover:bg-black'
      >
        <Image
          src={arrowRight}
          alt='Arrow left'
          className=' w-[20px] h-[19px] '
        />
      </div>
    </div>
  );
}
