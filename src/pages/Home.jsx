import React from 'react'
import Hero from '../components/Hero'

import PremiumVideo from './PemiumVideo'
import SocialMedia from '../components/SocialMedia'
import LatestVideoReels from '../components/LatestVideoReels'
import LatestArticle from '../components/LatestArticle'
import ContactForm from '../components/ContactForm'
import ImageCaurasel from '../components/imageCaurasel'


export default function Home() {


 
  return (
    <div className='flex flex-col  gap-6 '>
          <Hero />

          <SocialMedia />
        
             
          <LatestVideoReels  />
      
         <ImageCaurasel/>
            
          
            
          <PremiumVideo />  
          
          <LatestArticle />
          <ContactForm/>
    </div>
  )
}
