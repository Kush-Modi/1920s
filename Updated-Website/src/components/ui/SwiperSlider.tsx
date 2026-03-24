import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import TestimonialsData from '../../data/clientData.json';

export default function SwiperSlider() {
  const processedTestimonials = TestimonialsData.map((item: any, index: number, array: any[]) => ({
    ...item,
    index: index + 1,
    length: array.length
  }));

  return (
    <div id="ProjectSlider" className="swiper mt-10">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        autoplay={{ delay: 5000 }}
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="mt-16 mb-24 cursor-grab active:cursor-grabbing"
      >
        {processedTestimonials.map((item: any) => (
          <SwiperSlide key={item.index} className="flex flex-col">
            <div className="flex flex-col p-10 md:p-16 bg-white rounded-[40px] border border-black/5 shadow-sm transform transition-transform duration-500 hover:shadow-xl mx-4">
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.5693 13 6.017 13H5.017V21H6.017Z" />
                </svg>
              </div>
              <p className="font-boska text-2xl md:text-3xl leading-relaxed italic mb-10 text-black/90">
                {item.comment}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-px h-12 bg-black/10"></div>
                <div>
                  <div className="font-boska text-xl font-medium text-black">{item.name}</div>
                  <div className="font-general-sans text-sm text-gray-dark uppercase tracking-widest">{item.role}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-12 mb-10">
        <button className="swiper-button-prev-custom group flex items-center justify-center w-14 h-14 rounded-full border border-black/10 hover:bg-black transition-all z-10 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="swiper-pagination-custom flex gap-2 z-10"></div>
        <button className="swiper-button-next-custom group flex items-center justify-center w-14 h-14 rounded-full border border-black/10 hover:bg-black transition-all z-10 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #000 !important;
          opacity: 0.1;
          transition: all 0.3s;
          border-radius: 50%;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.5);
        }
      `}</style>
    </div>
  );
}
