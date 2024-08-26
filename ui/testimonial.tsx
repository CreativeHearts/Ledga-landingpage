'use client';

import Image from 'next/image';
import costumer1 from '@/public/Ellipse 14.png';
import costumer2 from '@/public/Ellipse 15.png';
import costumer3 from '@/public/Ellipse 16.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import PaginationBtn from '@/ui/paginationbtn';

export default function Testimonial() {
  return (
    <div className='pt-20 pb-14 bg-[#F3F7FC] xs:w-[100%]'>
      <div className='  w-[90%] mx-auto justify-between align-middle items-center pb-10 xs:w-[100%] xs:justify-around'>
        <div>
          <h1 className='w-[100%] text-[25px] ml-14 font-semibold text-subBlue xs:w-[100%] xs:ml-5'>
            What people think about ledga
          </h1>
        </div>
        {/* pagination btn */}
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3} // Default to show 3 cards
        className='h-[28rem] flex xs:flex-col w-[90%] mx-auto'
        breakpoints={{
          // When window width is >= 0px and < 400px
          0: {
            slidesPerView: 1,
          },
          // When window width is >= 400px
          400: {
            slidesPerView: 1,
          },
          // When window width is >= 640px (you can define other breakpoints here)
          640: {
            slidesPerView: 3,
          },
        }}
      >
        <div className='flex xs:flex-col w-[90%] ml-auto xs:m-auto gap-9 '>
          <div className='slidepadding'>
            <SwiperSlide>
              <div className='flex flex-col bg-white items-center justify-center py-16 rounded-[40px]'>
                <div className='flex mr-[4.25rem] gap-5 align-middle items-center justify-start'>
                  <Image
                    src={costumer1}
                    alt='costomer 1'
                    className='w-[50px] h-[50px]'
                  />
                  <div>
                    <h1 className='text-17px font-semibold'>Sarah Johnson,</h1>
                    <p className='text-[10px] font-light'>
                      Principal at Greenfield High School
                    </p>
                  </div>
                </div>
                <p className='w-[80%] text-[13px] text-sm mt-5 leading-7'>
                  Ledga has transformed the way we manage our school&apos;s
                  finances. The user-friendly interface and seamless fee
                  collection process have saved us so much time. We can now
                  track payments and manage sub-accounts effortlessly. Highly
                  recommend&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col bg-white items-center justify-center py-16 rounded-[40px]'>
                <div className='flex mr-[4.25rem] gap-5 align-middle items-center justify-start'>
                  <Image
                    src={costumer1}
                    alt='costomer 1'
                    className='w-[50px] h-[50px]'
                  />
                  <div>
                    <h1 className='text-17px font-semibold'>Sarah Johnson,</h1>
                    <p className='text-[10px] font-light'>
                      Principal at Greenfield High School
                    </p>
                  </div>
                </div>
                <p className='w-[80%] text-[13px] text-sm mt-5 leading-7'>
                  Ledga has transformed the way we manage our school&apos;s
                  finances. The user-friendly interface and seamless fee
                  collection process have saved us so much time. We can now
                  track payments and manage sub-accounts effortlessly. Highly
                  recommend&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col bg-white items-center justify-center py-16 rounded-[40px]'>
                <div className='flex mr-[4.25rem] gap-5 align-middle items-center justify-start'>
                  <Image
                    src={costumer2}
                    alt='costomer 1'
                    className='w-[50px] h-[50px]'
                  />
                  <div>
                    <h1 className='text-17px font-semibold'>Sarah Johnson,</h1>
                    <p className='text-[10px] font-light'>
                      Principal at Greenfield High School
                    </p>
                  </div>
                </div>
                <p className='w-[80%] text-[13px] text-sm mt-5 leading-7'>
                  Ledga has transformed the way we manage our school&apos;s
                  finances. The user-friendly interface and seamless fee
                  collection process have saved us so much time. We can now
                  track payments and manage sub-accounts effortlessly. Highly
                  recommend&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col bg-white items-center justify-center py-16 rounded-[40px]'>
                <div className='flex mr-[4.25rem] gap-5 align-middle items-center justify-start'>
                  <Image
                    src={costumer3}
                    alt='costomer 1'
                    className='w-[50px] h-[50px]'
                  />
                  <div>
                    <h1 className='text-17px font-semibold'>Sarah Johnson,</h1>
                    <p className='text-[10px] font-light'>
                      Principal at Greenfield High School
                    </p>
                  </div>
                </div>
                <p className='w-[80%] text-[13px] text-sm mt-5 leading-7'>
                  Ledga has transformed the way we manage our school&apos;s
                  finances. The user-friendly interface and seamless fee
                  collection process have saved us so much time. We can now
                  track payments and manage sub-accounts effortlessly. Highly
                  recommend&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col bg-white items-center justify-center py-16 rounded-[40px]'>
                <div className='flex mr-[4.25rem] gap-5 align-middle items-center justify-start'>
                  <Image
                    src={costumer1}
                    alt='costomer 1'
                    className='w-[50px] h-[50px]'
                  />
                  <div>
                    <h1 className='text-17px font-semibold'>Sarah Johnson,</h1>
                    <p className='text-[10px] font-light'>
                      Principal at Greenfield High School
                    </p>
                  </div>
                </div>
                <p className='w-[80%] text-[13px] text-sm mt-5 leading-7'>
                  Ledga has transformed the way we manage our school&apos;s
                  finances. The user-friendly interface and seamless fee
                  collection process have saved us so much time. We can now
                  track payments and manage sub-accounts effortlessly. Highly
                  recommend&quot;
                </p>
              </div>
            </SwiperSlide>
          </div>
        </div>
        <PaginationBtn />
      </Swiper>
    </div>
  );
}
