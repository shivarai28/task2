import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import logo from "../assets/logo.svg"
import v1 from "../assets/insta-feed/footer-img-1.jpg"
import v2 from "../assets/insta-feed/footer-img-2.jpg"
import v3 from "../assets/insta-feed/footer-img-3.jpg"
import v4 from "../assets/insta-feed/footer-img-4.jpg"
export default function Footer() {
  return (
      <footer className=' '>
          
        

          <div className=" relative  bg-black text-white">
              {/* footer top  */}
              <div className="relative [background:var(--tt-gradient-1)] lg:mx-auto rounded-b-2xl mx-2   h-[170px] lg:h-[150px] max-w-5xl lg:max-w-[80vw]">
                  
                  <div className=" flex items-center p-10 justify-between">
                      <img src={logo} alt="" className="" />
                      <div className="hidden lg:flex items-center  bg-white rounded-full w-fit  ">

                          <input type="text" placeholder="Email addres" className="text-[20px] outline-none lg:px-8 py-3  xl:px-10 xl:py-4" /> 
                          <button className="cursor-pointer  [background:var(--tt-gradient-1)] xl:px-8 lg:px-6  md:py-3 rounded-full mr-2 text-sm text-white hover:[background:var(--tt-gradient-2)]  "> News Letter</button>
                      </div>
                      <div className="flex items-center gap-2    justify-between">
                          <FaTwitter  className="rounded-full h-8 w-8 text-white px-1 border  hover:text-pink-600"/>
                          <FaFacebook className="rounded-full h-8 w-8 text-white py-1 border  hover:text-pink-600" />
                          <FaInstagram  className="rounded-full h-8 w-8 text-white p-1  border  hover:text-pink-600"/>
                          <FaYoutube className="rounded-full  h-8 w-8 text-white p-1 border   hover:text-pink-600"/>
                      </div>
                  </div>


                    <div className="absolute lg:hidden bottom-3 mx-auto  max-w-4xl w-full flex items-center   bg-white rounded-full   ">

                          <input type="text" placeholder="Email addres" className="text-[20px] text-black outline-none w-full px-6 py-3" /> 
                          <button className="cursor-pointer [background:var(--tt-gradient-1)] px-10 py-2 rounded-full leading-tight mr-2 text-[10px] text-white hover:[background:var(--tt-gradient-2)]  "> News Letter</button>
                      </div>


                </div>
              
          {/* footer middle */}

          <div className=" mx-auto max-w-[80vw]  border-b-1 border-white/50  mt-5 p-4  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   ">
              <div className="p-6 ">
                  <h4 className="font-bold text-lg py-4">Get in Touch</h4>
                  <span className="  text-white/60 text-sm  py-7 hover:text-pink-700 "> Contactme@gmail.com</span>
              </div>

              <div className="  flex flex-col justify-center   px-8 py-4  gap-4">
                  <h4 className="font-bold text-lg ">Browse Categories</h4>
                  
                  <div className="flex items-center text-white/60 text-sm  gap-8">
                      <ul className="">
                        <li className="hover:text-pink-700 ">Music</li>
                        <li className="hover:text-pink-700">Gaming</li>
                        <li className="hover:text-pink-700">Art</li>
                    </ul>
                     <ul className="">
                        <li className="hover:text-pink-700">Sports</li>
                        <li className="hover:text-pink-700">Fashion</li>
                        <li className="hover:text-pink-700">Photography</li>
                    </ul>
                      </div>
                  </div>
              <div className=" w-full grid p-6 grid-cols-1">
                  <h4 className="font-bold text-lg  p-2">Instagram Feed</h4>
                  <div className="flex items-center justify-between py-2  gap-2 ">
                      <img src={v1} alt="" className="cursor-pointer object-cover rounded-2xl  h-20" />
                      <img src={v2} alt="" className="cursor-pointer object-cover rounded-2xl  h-20" />
                      <img src={v3} alt="" className="cursor-pointer object-cover rounded-2xl h-20" />
                      <img src={v4} alt="" className="cursor-pointer object-cover rounded-2xl  h-20" />
                  </div>
              </div>
          </div>
          

        {/* footer end */}
             <div className=" w-full flex items-center justify-center">
                         <span className="text-white/60 font-semibold text-[12px] mx-auto py-4 max-w-[80vw]  ">Copyright ©2025 Developed by Shiva rai</span>
            </div>
          </div>
          





    </footer>
  )
}


