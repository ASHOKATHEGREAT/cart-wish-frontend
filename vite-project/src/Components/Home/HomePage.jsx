import React from 'react'

import iphone from "../../assets/iphone-14-pro.webp"
import mac from "../../assets/mac-system-cut.jfif"

import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {
  return (
    <div>
    <HeroSection title="Buy iPhone 14 PRO" subtitle="Experience the power of the latest iphone 14 with our most Pro camera ever" 
    link='/products/666af5b34c174ed28f4e2c5b' 
    image={iphone} />
    <FeaturedProducts />
    <HeroSection title="Build the ultimate setup" subtitle="You can add Studio display and colour matched magic accessories to your bag after configure your mac mini" 
    link='/products/666af5b34c174ed28f4e2c63'
    image={mac} />
    </div>
  )
}

export default HomePage