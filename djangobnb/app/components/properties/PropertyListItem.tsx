import React from 'react'
import Image from 'next/image'
const PropertyListItem = () => {
  return (
    <div className=' cursor-pointer'>
        <div className=' relative overflow-hidden aspect-square rounded-xl'>
            <Image
             priority
             fill 
             src = "https://raw.githubusercontent.com/EmberDes/Nextjs-Django-Airbnb/main/djangobnb/public/BeachHouse1.jpg"
             sizes = "{max-width: 768px}: 768px , {max-width:1200px}:768px,768px"
             className="hover:scale-110 object-cover transition h-full w-full"
             alt="/"
            >

            </Image>

        </div>
    </div>
  )
}

export default PropertyListItem