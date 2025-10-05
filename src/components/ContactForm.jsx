import React from 'react'

export default function ContactForm() {
  return (
<section className=" isolate min-h-[100vh] w-full  overflow-hidden"     style={{ backgroundImage: `url(src/assets/contact-bg.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} >
          <div  className="relative     ">
              <div className="max-w-7xl flex mx-auto lg:p-10 p-3  items-center mt-[110px] gap-6">
              <div className=" min-h-screen lg:max-w-xl max-w-5xl lg:p-5 p-3  shadow-md bg-white rounded-2xl ">
                  <img src="src/assets/contact-form-icon.svg" alt="contact" className=''/>
                  <h1 className=' text-3xl font-bold  py-5'>   Let’s Work Together on your next Project</h1>
                  <span className="text-[16px] leading-tight py-3 text-black/70">consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum</span>
                  <form action="" className='flex px-2  py-10 flex-col items-start justify-center' >
                      
                      <span className='text-sm font-bold py-3'>Your Name</span>
                      <input type="text" className="p-4 w-full bg-slate-200 border-1 rounded-xl border-slate-300 outline-none"  placeholder='your anme'/>
                     <span className='text-sm font-bold py-3'>Your Email</span>
                      <input type="gmail"  className="p-4 w-full bg-slate-200 border-1 rounded-xl border-slate-300 outline-none"  placeholder='your email'/>
                     <span className='text-sm font-bold py-3' >text messages</span>
                      <textarea type="text" className="p-4 h-[150px] w-full bg-slate-200 border-1 rounded-xl border-slate-300 outline-none" placeholder='write text message ' />
                      
                          
                      <span className="px-4 py-3 ml-4  [background:var(--tt-gradient-1)] rounded-lg text-sm  mt-10  text-white"> send Meessage</span>
                  </form>

              </div>

              <div className=" hidden h-full w-full  bg-black  lg:flex  ">
                  
                  <img src="src/assets/contact-img.png" alt="" className=' absolute h-[60%] bottom-89  object-cover    '/>
                  

              </div>
</div>

       

          
          <div className=" lg:absolute bottom-0  min-w-screen flex items-center justify-between -z-1  bg-[#FFF1F1] h-[50vh]">
          
              <div className="lg:absolute right-10 p-2  h-full  flex flex-col ">
                  <h1 className='lg:text-3xl py-10 text-2xl text-center font-semibold  text-black'>Trusted Partners</h1>
                  <div className="flex items-center px-4 py-4 gap-10">
                      
                      <img src="src/assets/insta-feed/footer-img-1.jpg" alt=""  className='rounded-2xl shadow-lg'/>
                      <img src="src/assets/insta-feed/footer-img-2.jpg" alt=""  className='rounded-2xl shadow-lg'/>
                      <img src="src/assets/insta-feed/footer-img-3.jpg" alt=""  className='rounded-2xl shadow-lg'/>
                      <img src="src/assets/insta-feed/footer-img-4.jpg" alt=""  className='rounded-2xl shadow-lg'/>
                      <img src="src/assets/insta-feed/footer-img-1.jpg" alt=""  className='rounded-2xl shadow-lg'/>
           

                  </div>

              </div>
          </div>    </div>  
</section>

  )
}
