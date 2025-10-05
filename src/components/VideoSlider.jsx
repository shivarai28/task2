// App.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from './Image';
import { FaCrown } from 'react-icons/fa';


export default function VideoSlider() {

  const items = [
  { id: 1, img: "src/assets/download.jpeg", price: 5.0, title: "Glam Night" },
  { id: 2, img: "src/assets/download.jpeg", price: 5.0, title: "Pink Studio" },
  { id: 3, img: "src/assets/download.jpeg", price: 5.0, title: "Soft Lights" },
  { id: 4, img: "src/assets/download.jpeg", price: 5.0, title: "Studio Set" },
  { id: 5, img: "src/assets/download.jpeg", price: 5.0, title: "Editorial" },
  ];
  
  return (
    <div className="min-h-screen ">
        <div className="flex flex-col  ">
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto ">
          <h1 className=" lg:text-center px-4 py-10 text-xl sm:text-2xl md:text-3xl font-bold  ">My Latest Premium Videos</h1>
          <span className='hidden sm:flex items-center gap-1 p-1  md:p-2 border-1 rounded-xl text-red-700  text-sm  sm:text-lg '> <span ><FaCrown/> </span>  View All Videos </span>
</div>  
        <div className=" transition-all ease-in-out">
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={24}
      loop
      autoplay={{ delay: 400, pauseOnMouseEnter:true, disableOnInteraction: true }}
    
      
      breakpoints={{ 768:{slidesPerView:2}, 1024:{slidesPerView:3} }}
      className="!pb-10"
    >
      {items.map(i => (
        <SwiperSlide key={i.id}>
          <Image img={i.img } text={i.title} />
        </SwiperSlide>
      ))}
        </Swiper>
      </div>
    
        <div className="">
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={24}
      loop
            autoplay={{ delay: 400, pauseOnMouseEnter:true, reverseDirection: true, disableOnInteraction:true }}
            
    
      
      breakpoints={{ 768:{slidesPerView:2}, 1024:{slidesPerView:3} }}
      className="!pb-10 "
    >
      {items.map(i => (
        <SwiperSlide key={i.id}>
          <Image img={i.img } text={i.title} />
        </SwiperSlide>
      ))}
        </Swiper>
      </div>
    
    
    </div>
    </div> 
  );
}
