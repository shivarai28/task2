// {// import banner from "../assets/banner-2-bg.jpg"
// // import banner2 from '../assets/banner-2-img.png'

// // import v1 from "../assets/jo-banner-vector-1.svg"
// // import v2 from "../assets/jo-banner-vector-2.svg"

// // export default function Hero() {
// //   return (


// //  <section
// //     className=" min-h-screen w-screen  bg-cover bg-center  text-white"
// //      style={{ backgroundImage: `url(${banner})` ,height:`100vh`}} >



// //           <div className=" mx-auto  h-full  max-w-[1350px] px-8 sm:px-10 lg:px-14 py-10 sm:py-24 ">
              
// //               <div className="  grid grid-cols-1 ml-[-24px]   px-4   lg:grid-cols-2 items-center gap-4">
// //                   {/* left part
// //                    */}
// //                   <div className=" relative min-w-3xl mt-10 pt-24 ">
// //                       <div className="absolute top-3"> <Bryan />
                    
// //                       </div>
// //                       <img src={v1} className=" absolute bottom-[-100px] right-120" alt="" />

// //                       <h1 className="text-3xl md:text-4xl lg:text-[80px] font-[700] ">
// //                           I’m <span className="">Linda Susan</span>
// //                         <br />
// //                           <span className="">Beauty & Lifestyle
// //                               <br /> Influencer</span>
// //                          </h1>
// //                       <div className="mt-6 flex gap-4">
// //                         <button
// //                         className="md:px-6 md:py-3 px-4 py-2 rounded-[6px] font-semibold text-sm sm:text-base [background:var(--tt-gradient-1)] text-white hover:bg-pink-400 transition"
// //                         >
// //                         About Me
// //                         </button>
// //                         <button className="  md:px-6 md:py-3 rounded-[6px] hover:bg-pink-700 cursor-pointer border-red-100 font-semibold text-sm sm:text-md border-1 text-white   transition"
// //                         >
// //                         Contact Me
// //                         </button>
// //                       </div>

// //                   </div>

// //                   {/* right parert
// //                    */}
                 
// //                   <div className=" relative flex justify-center md:justify-end">
                     
// //                         <img
// //                         src={banner2}
// //                         alt="Linda Susan showcasing a beauty look"
// //                         className="h-[50vh] md:h-full  sm:max-h-[86.5vh]  max-w-lg object-contain drop-shadow-xl"
// //                         loading="lazy"
// //                         decoding="async"
// //                       />
// //                       <div className="absolute bottom-[120px] left-15 ">
// //                           <Bryan />
                      
// //                       </div>
// //                        <img src={v2} className="absolute bottom-[100px] right-[-153px]" alt="" />
// //                             </div>
                  


            


// //               </div>
              

              

// //           </div>
  
// //   </section>
// // );




// // }



// // import love from "../assets/love.svg"
// // function Bryan() {
// //   return (
   
      
// //       <>

// //           <div className="relative flex items-center space-between h-[52px] gap-2 w-[160px] p-2 rounded-full bg-white">
// //               <img src={love} className="absolute right-3 h-7  top-[-10px]" alt="" />
// //               {/* <div className="absolute"></div> */}
// //               <img src={banner2} className="h-10 rounded-full object-cover " alt="" />
// //               <span className="text-[15px] text-black/50">Bryan has <br/>liked</span>
// //           </div>



// //       </>
// //   )
// // }

// }


import banner from "../assets/banner-2-bg.jpg";
import banner2 from "../assets/banner-2-img.png";

import v1 from "../assets/jo-banner-vector-1.svg";
import v2 from "../assets/jo-banner-vector-2.svg";
import love from "../assets/love.svg";

export default function Hero() {
  return (
    <section
      className="relative isolate max-h-[100vh] w-full text-white overflow-hidden bg-gradient-to-r "
      style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* contrast overlay for readability on busy images */}
      <div className="pointer-events-none absolute inset-0 " />

      <div className="relative mx-auto h-full max-w-screen-xl px-5 sm:px-8 mt-26 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1items-center gap-10 lg:grid-cols-2">
          {/* left */}
          <div className="relative mt-10 max-w-2xl">
            {/* floating mini-card */}
            <div className="absolute -top-[60px] left-0 hidden sm:block">
              <Bryan />
            </div>

            {/* vector art (left) */}
          
             <img src={v1} aria-hidden="true" className="  pointer-events-none absolute bottom-[-100px] right-50 hidden sm:block " alt="" />
          
                      <h1 className="font-bold text-xl md:text-6xl">
              I’m <span className="text-white">Linda Susan</span>
              <br />
              <span className="text-white">
                Beauty & Lifestyle
                <br /> Influencer
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                className="px-5 py-3 rounded-lg border-1  font-semibold text-sm sm:text-base text-white
                           [background:var(--tt-gradient-1)] hover:[background:var(--tt-gradient-2)]"
              >
                About Me
              </button>

              <button
                className="px-5 py-3 rounded-lg hover:text-pink-700 font-semibold text-sm sm:text-base text-white border
                           border-white/70 hover:bg-white/10 transition"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* right */}
          <div className="relative flex justify-center  lg:justify-end">
            <img
              src={banner2}
              alt="Linda Susan showcasing a beauty look"
              className="h-[56vh] sm:h-[56vh] md:h-[64vh] lg:h-[72vh] max-w-full object-contain drop-shadow-xl"
              loading="lazy"
              decoding="async"
            />
                <div className="absolute right-25 top-30 h-[350px] w-[350px] -z-1  transition ease-in-out bg-white/70 rounded-full  animate-[ping_3s_ease_infinite]"></div>
                <div className="absolute right-25 top-30 h-[350px] w-[350px] -z-1  transition ease-in-out bg-white/70 rounded-full  animate-[ping_5s_ease_infinite]"></div>
               {/* floating mini-card on the image */}
            <div className="absolute bottom-[16%] left-3 sm:left-6 md:left-10">
              <Bryan />
            </div>

            {/* vector art (right) */}
           <img src={v2} className="absolute bottom-[100px] right-[-153px]" alt="" />
//                  
          </div>
        </div>
      </div>
    </section>
  );
}

function Bryan() {
  return (
    <div
      className="relative flex items-center gap-2 h-12 w-[180px] rounded-full bg-white/95 shadow-md ring-1 ring-black/5 px-3"
      aria-label="Bryan liked this"
    >
      <img src={love} className="absolute right-2 -top-2 h-6" alt="" />
      <img src={banner2} className="h-10 w-10 rounded-full object-cover" alt="Bryan avatar" />
      <span className="text-[14px] leading-tight text-black/60">
        Bryan has <br /> liked
      </span>
    </div>
  );
}
