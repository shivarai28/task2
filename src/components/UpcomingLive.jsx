 import React from 'react'
 
 export default function UpcomingLive() {
   return (

       
       <div className="flex flex-col items-center max-w-6xl gap-8 mx-auto h-fit         ">
               <h1 className="text-3xl font-bold border-t-1 border-b-1  text-center py-10 border-white/60 w-full ">   My Upcoming Lives   </h1>
               <ImageCard />
               <ImageCard/>
               <ImageCard/>
           </div>
           


   )
 }
 


function ImageCard() {
   return (
   
           <div className="w-full h-full md:flex grid  items-center gap-4 bg-black/70 p-8 rounded-2xl">

               <img src="/src/assets/jo-video-1.jpg" alt=""  className='  rounded-2xl w-[300px] lg:w-[400px]'/>
               <div className="flex flex-col p-4 gap-4 h-full ">
                     <button className='bg-white text-black rounded-2xl p-2 w-fit font-semibold text-sm flex items-center gap-1 hover:text-blue-700 '> <img className='h-4' src="/src/assets/logo/social-icon-1.png" alt="" />Facebook Live</button>           
                   <h3 className='font-bold text-xl lg:text-2xl '> Smiley woman pop party studio medium shot</h3>
                   <h3 className='text-white text-[10px] lg:text-sm font-semibold border-b-1 pb-4 border-white/60  '> 25 Jun, 2024</h3>
                   <p className='text-white/60 text-[12px] lg:text-sm'> consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
                        </p>
                  <button className='bg-pink-700 px-3 py-1  hover:bg-white hover:text-black hover:border-2 border-pink-700  font-semibold  w-fit rounded-lg '>  Book Now</button>
               </div>
           </div>

   )
 }
 