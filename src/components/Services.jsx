import React from 'react'
import Section from './common/Section'

import commerce from "../assets/commerce.png"
import web from "../assets/web.png"
import mobile from "../assets/mobile.png"
import research from "../assets/research.png"

const Services = () => {

    const Services = [
        {
            id: 1,
            image: commerce,
            title: "E-Commerce Website",
        },
        {
            id: 2,
            image: web,
            title: "Web Development",
        },
        {
            id: 3,
            image: mobile,
            title: "Mobile Development",
        },
        {
            id: 4,
            image: research,
            title: "Reserch and Development",
        }
    ];

  return <Section 
  title="Services 🛠 "
  subtitle="Experienced professional Quality Assurance Engineer with 2 years of experience in software quality assurance, manual testing and currently learning test automation.">

    <div className='grid gap-10 lg:grid-cols-2'>
        {
            Services.map(({id, image, title}) => (
                <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>

                    <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain'/>
                    <h3 className='mt-5 text-base'>{title}</h3>
                </div>

            ))
        }
    </div>
  </Section>
  
}

export default Services