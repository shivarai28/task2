
import { FaPlay } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";

export default function Image(props) {
  return (
    <div className='group  h-[200px] sm:h-[300px] lg:h-[380px]   '>
          <div className=" relative  max-w-[534px]  rounded-2xl h-full z-100   " >
            <div className="absolute h-full w-full bg-transparent hover:bg-pink-800/80 rounded-2xl opacity-70  ">
                        
                        </div>
              <img src={props.img } alt="" className='h-full w-full object-cover rounded-2xl ' />
                <div className="absolute top-10 flex items-center justify-between  px-5    w-full  " >
                    <span className=" text-white rounded-full  p-4 border hover:bg-white hover:text-pink-700 transition">  <FaPlay /></span>  
                    <span className=" text-pink-700 bg-white rounded-full p-4  hover:text-black transition border"><LuCrown /></span>  
                </div>
              
              <div  className="absolute bottom-10 left-10">
                  <span className=" text-sm text-pink-700 px-2 py-1 rounded-full font-semibold bg-white ">
                     $5.00
                  </span>

                  <div className="hidden">
                      {/* <span className="block font-bold text-white text-2xl">{text} </span> */}
                      <a href="#" className="block font-bold py-2 text-[18px] text-white/70 text-2xl">{props.text}</a>
                          <span className="block  text-[12px] text-white/50 text-2xl"> 16M views | 49 minutes ago</span>
                     
                  </div>
              </div>
      </div>
          

    </div>
    
    
   
  );
}