import jo from "../assets/jo-video-1.jpg"

export default function LatestArticle() {
  return (
      <section className=" lg:h-screen max-w-7xl mx-auto">

          <div className="flex flex-col items-center gap-5 p-5  justify-center">
              
            <h1 className=' text-3xl font-bold  py-5'>Latest Articles & News</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
                  <ImageCard/>
                  <ImageCard/>
                  <ImageCard/>
            </div>
          </div>


    </section>
  )
}





import { FaPersonBooth, FaTag, FaUser } from 'react-icons/fa'

 function ImageCard() {
  return (
    <div>
      
          <div className=" rounded-2xl p-5 border-1 shadow-md  border-[#e5e5e5] ">
              <img src={jo} alt="" className="h-[50%] object-contain rounded-2xl " />
              <div className="flex p-2 items-center gap-4 justify-start">
                  <span className='flex items-center gap-2 text-sm text-black/60 '><FaUser className="text-pink-700"/> by Admin </span>
                  <span className='flex items-center gap-2 text-sm text-black/60 '><FaTag  className="text-pink-700"/> music </span>
              </div>

              <h3 className='font-bold text-xl'>Many of those Products Offer the Potential</h3>
              <span className="mt-2 text-pink-700 text-sm font-semibold">Read more --{"> "}</span>
          </div>
          

    </div>
  )
}
