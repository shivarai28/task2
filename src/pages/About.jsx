import SocialMedia from '../components/SocialMedia'
import LatestVideoReels from '../components/LatestVideoReels'
import LatestArticle from '../components/LatestArticle'
import ContactForm from '../components/ContactForm'
import VideoSlider from '../components/VideoSlider'
import { MdVerified } from "react-icons/md";
import breadchrumb from "../assets/inner-about-img.png"
import bg from "../assets/breadcrumb-bg.jpg"
import signature from "../assets/signature.jpg"
export default function About() {
  return (
      <div  className='flex flex-col gap-4 '>
          
            {/* top about  */}
          <div className=" max-h-screen h-[63vh]  "
              style={{ backgroundImage: `${bg}`, backgroundSize: "cover", backgroundPosition: "center" }}
              
          >
              <div className="flex flex-col items-center justify-center [background:var(--tt-gradient-1)] w-full h-full opacity-65">
                  <h1 className='font-bold text-3xl text-white '>About Me</h1>
                  <div className="font-semibold text-white "><span className='hover:text-black'>Home </span>/ <span>About</span></div>
              </div>
          </div>
          
                {/* image + sign  */}
          <div className="h-screen w-screen mt-20">
              <div className="max-w-6xl border-1  border-black/60 rounded-2xl mx-auto">
                  
                 <div className=" grid grid-cols-1  md:flex  items-center     ">
                  <div className="flex-1 flex flex-col items-center h-[70vh] text-white bg-black/90 rounded-2xl p-7 gap-5">
                       <img src={breadchrumb} alt=""  className=' border-10 rounded-full text-white w-[250px]'/>
                          <h1 className="text-lg font-bold">Shiva rai</h1>
                          <span className='[background:var(--tt-gradient-1)] px-3  py-2 rounded-full' >Get in Touch</span>
                          <span className="text-sm text-white/60"> typically response within 24 hours</span>
                      </div>
                      <div className="flex-2 p-10  flex flex-col gap-5 min-h-[490px] ">
                          <h1 className="text-3xl font-bold">I'm a Social Media influencer & digital content creator</h1>
                          <p className='text-sm text-black/70'>consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.</p>
                        
                          <ul className="flex flex-col gap-3 ">
                                     <li className="flex items-center gap-4 font-semibold text-sm"><MdVerified className='text-pink-600 text-lg' /> Non mattis nulla, in ultrices diam</li>
                                     <li className="flex items-center gap-4 font-semibold text-sm"><MdVerified className='text-pink-600 text-lg' /> Non mattis nulla, in ultrices diam</li>
                                     <li className="flex items-center gap-4 font-semibold text-sm"><MdVerified className='text-pink-600 text-lg' /> Non mattis nulla, in ultrices diam</li>
                                     <li className="flex items-center gap-4 font-semibold text-sm"><MdVerified className='text-pink-600 text-lg' /> Non mattis nulla, in ultrices diam</li>
                          </ul>
                          <img src={signature} alt="" className='h-15 w-fit' />
                          

                      </div>
                  </div>
              </div>

          </div>
         
               <VideoSlider/>
               <LatestArticle />
                   <ContactForm />
          
               <SocialMedia/>
    </div>
  )
}
