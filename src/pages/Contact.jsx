
import { FaSearchLocation } from 'react-icons/fa'
import contact from "../assets/inner-contact-img.png"
import blob from "../assets/blob-haikei.svg"

export default function Contact() {
  return (
    <div>
           <div className=" max-h-screen h-[63vh]  "
                    style={{ backgroundImage: `url(/src/assets/breadcrumb-bg.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
                    
                >
                    <div className="flex flex-col items-center justify-center [background:var(--tt-gradient-1)] w-full h-full opacity-65">
                        <h1 className='font-bold text-3xl text-white '>Contact Me</h1>
                        <div className="font-semibold text-white "><span className='hover:text-black'>Home </span>/ <span>Contact</span></div>
                    </div>
                </div>
                
          <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center max-w-7xl mx-auto p-10  gap-10">
          <Imagecard/>
          <Imagecard/>
          <Imagecard/>
          <Imagecard/>
          </div>
          
          <div className="bg-[#FFF2F2]  min-h-screen ">
              <div className=" max-w-7xl p-10 mx-auto p  ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className=" "  style={{ backgroundImage: `${blob}`, backgroundSize: "cover", backgroundPosition: "center" }}
                   >
                  <h1 className='text-3xl font-bold'>Request a Consultation</h1>
                  
                    <img src={contact} alt="" className="" />
                  </div>

              <div className="relative bg-white flex  rounded-2xl flex-col items-center p-10">
                  
                      
                      <h1 className='text-3xl font-bold'>Get in Touch</h1>
                      <div className="flex items-center">
                          <input type="text" placeholder='Full name' className='p-3 w-full outline-none rounded-xl m-4 bg-slate-100 border-1 border-slate-300' />
                          <input type="email" placeholder='email' className='p-3 w-full outline-none  rounded-xl m-4 bg-slate-100 border-1 border-slate-300' />

                   
                      </div>
                      <div className="flex items-center">
                          <input type="text" placeholder='Phone numvber' className='p-3 w-full outline-none  rounded-xl m-4 bg-slate-100 border-1 border-slate-300' />
                          <input type="what" placeholder='email' className='p-3 rounded-xl w-full outline-none  m-4 bg-slate-100 border-1 border-slate-300' />

                   
                      </div>
                   <div className="w-full flex items-center ">
                        <textarea placeholder='text' className=' w-full h-[100px]   p-3 outline-none  rounded-xl m-4 bg-slate-100 border-1 border-slate-300' />
                    </div>
                     <div className="flex items-center p-3">
                          <input type="checkbox"   className='p-3 rounded-xl  outline-none  m-4 bg-slate-100 border-1 border-slate-300' />

                            <span className='text-sm  text-black/60'>Collaboratively formulate principle capital. Progressively evolve user</span>

                      </div>
                     

                      
                     <h1 className="bg-red-600 px-4 rounded-xl font-semibold text-white w-full py-2 text-center">Sumbit Now</h1>


              
              
              </div>
              </div>
</div>


        </div>


    </div>
  )
}


 function Imagecard() {
  return (
    <div>
      
          <div className=" bg-white border-1 flex flex-col items-center  rounded-2xl border-red-600/30   max-w-[250px]">
              <div className='text-xl border-1 rounded-lg text-red-700 border-black/60 p-3 m-4'><FaSearchLocation /></div>
              <h1 className='text-lg font-semibold'>Our Address</h1>
            <p className='text-[12px] text-center text-black/60 mb-6'>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
    </div>
  )
}

