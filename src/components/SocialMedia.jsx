import React from 'react'
import logo1 from "../assets/logo/social-icon-1.png"
import logo2 from "../assets/logo/social-icon-2.png"
import logo3 from "../assets/logo/social-icon-3.png"
import logo4 from "../assets/logo/social-icon-4.png"

export default function SocialMedia() {
  return (
      <section className="flex items-center py-5 justify-center  ">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-4 gap-14  ">
          <Social img={ logo1} text="Facebook"  follower="75k"/>
          <Social img={ logo2} text="Instagram"  follower="75k"/>
          <Social img={ logo3} text="Tik TOk"  follower="75k"/>
              <Social img={logo4} text="YOutube" follower="75k" />
          </div>

    </section>
  )
}




 function Social(props) {
  return (
      <section className="flex items-center justify-between gap-2 shadow-md px-4 py-2 lg:min-h-[90px] min-w-[280px] rounded-lg bg-white">
         
          <img src={props.img} className='h-10 ' alt="" />
          <div className="mr-4">
              <h4 className="font-bold ">{props.text}</h4>
              <span className="text-black/50 text-sm ">{props.follower } followers</span>
          </div>
          
          <button className='[background:var(--tt-gradient-1)] w-fit rounded-lg px-1 hover:[background:var(--tt-gradient-2)] transition ease-in-out text-sm text-white py-2'>Follow Me</button>


    </section>
  )
}
