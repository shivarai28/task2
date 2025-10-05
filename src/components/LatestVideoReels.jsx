import React, { useRef } from "react";
import { FaFacebook, FaPlay } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";

export default function LatestVideoReels() {

   const items = [
  { id: 1, img: "../assets/download.jpeg", price: 5.0, title: "Glam Night" },
  { id: 2, img: "../assets/download.jpeg", price: 5.0, title: "Pink Studio" },
  { id: 3, img: "../assets/download.jpeg", price: 5.0, title: "Soft Lights" },
  { id: 4, img: "../assets/download.jpeg", price: 5.0, title: "Studio Set" },
  { id: 5, img: "../assets/download.jpeg", price: 5.0, title: "Editorial" },
  ];
  
  const  heading = "Latest Video Reels"
 
  return (
    <section className="mx-auto max-w-[1400px] py-10   px-4 sm:px-6 lg:px-8">
      {/* Header + arrows */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{heading}</h2>

        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
  
            aria-label="Previous reels"
            className="size-10 rounded-full bg-rose-50 text-rose-500 ring-1 ring-rose-100 grid place-items-center hover:bg-rose-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
          {'<'}
          </button>
          <button
            type="button"
        
            aria-label="Next reels"
            className="size-10 rounded-full bg-rose-50 text-rose-500 ring-1 ring-rose-100 grid place-items-center hover:bg-rose-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
         {">"}
          </button>
        </div>
      </div>

    
          
   
    
            {/* media card */}
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
              }}
               navigation={true}
        modules={[Pagination ,  Navigation]}
        className="mySwiper"
      >
          {
          items.map(item => (
              <SwiperSlide key={item.id}>
              <div key={item.id} className="relative  flex rounded-[28px] overflow-hidden bg-neutral-100">
             
              <img
                src={item.img}
                alt={item.title}
                className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1]"
                loading="lazy"
              /> 
         
              {/* big red play button */}
              <button
                aria-label={`Play ${item.title}`}
                className="
                  absolute inset-0 m-auto  size-14 md:size-16 rounded-full
                  bg-red-500 grid place-items-center shadow-xl
                  hover:scale-105 active:scale-95 transition
                "
                onClick={() => console.log("play", item.id)}
              >
                <FaPlay className="size-6 md:size-7 text-white" />
              </button>

              {/* platform pill */}
              <div className="absolute  left-10 bottom-4 md:left-30 md:bottom-5">
                <span className="inline-flex items-center gap-2  rounded-full bg-white/95 px-3 py-2 text-sm font-semibold shadow-md">
                  <FaFacebook className="size-4 text-blue-600" />
                  Facebook Reel
                </span>
              </div>
            </div></SwiperSlide>
     )) 
}</Swiper>
          

    </section>
  );
}



