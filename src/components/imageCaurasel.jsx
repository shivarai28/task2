import { MdVerified } from "react-icons/md";
import UpcomingLive from "./UpcomingLive";
import bg  from "../assets/intro-live-bg.png"
import intro from "../assets/intro-vector.svg"
import intr from "../assets/intro-img.jpg"
export default function ImageCaurasel() {
  return (
   
          <div className="  min-h-[200vh]  min-w-screen">
              {/* bg image  */}
              <div className=" isolate text-white min-h-[200vh] min-w-screen bg-black/90   "
                    style={{ backgroundImage: `${bg}`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className=" flex flex-col">
                      
                  <div className="relative flex items-center gap-2 h-full py-18  ">
                         
                   <img src={intro} alt="" className="absolute  -left-120  top-15     animate-[spin_4s_linear_infinite]"
 />
                   
                     <div className="flex-2   px-10 flex flex-col lg:gap-8 gap-4  lg:ml-27">
                          <h1 className="text-xl  lg:text-3xl font-bold">I'm a Social Media influencer & digital content creator</h1>
                          <p className='text-[10px] lg:text-sm text-white/70'>consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.</p>
                        
                          <ul className="flex flex-col gap-3 lg:text-sm text-[10px]  ">
                                     <li className="flex items-center gap-4 font-semibold "><MdVerified className='text-pink-600 text-lg' /> Non mattis nulla, in ultrices diam</li>
                                     <li className="flex items-center gap-4 font-semibold "><MdVerified className='text-pink-600 text-lg' /> Non mattis nulla, in ultrices diam</li>
                                     <li className="flex items-center gap-4 font-semibold "><MdVerified className='text-pink-600 text-lg' /> Non mattis nulla, in ultrices diam</li>
                                     <li className="flex items-center gap-4 font-semibold "><MdVerified className='text-pink-600 text-lg' /> Non mattis nulla, in ultrices diam</li>
                          </ul>
                         <button className="text-white mx-8 hover:text-pink-700 rounded-md  w-fit border-1 border-pink-700 px-2 lg:px-4 py-1 lg:py-2 ">Contact Me</button>
                          

              
                  </div>
                
                  <img src={intr} alt=""  className="lg:max-h-[500px]  max-h-[200px] md:max-h-[300px] rounded-l-full"/>
                
                  </div>
                    <div className="h-fit w-full">
                        <UpcomingLive/>
                    </div>  


           </div>   

</div>
            </div>

  
  )
}
