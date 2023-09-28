import React from 'react'
import Section from './common/Section'

import functional from "../assets/functional.png"
import regression from "../assets/regression.png"
import automated from "../assets/automated.png"
import performance from "../assets/performance.png"
import mobile from "../assets/mobileT.png"
import uat from "../assets/uat.png"
import report from "../assets/report.png"
import qapi from "../assets/qapi.png"

const Services = () => {

    const Services = [
        {
            id: 1,
            image: functional,
            title: "Functional Testing",
        },
        {
            id: 2,
            image: regression,
            title: "Regression Testing",
        },
        {
            id: 3,
            image: automated,
            title: "Automation Testing",
        },
        {
            id: 4,
            image: performance,
            title: "Performance Testing",
        },
        {
            id: 5,
            image: mobile,
            title: "Mobile Testing",
        },
        {
            id: 6,
            image: uat,
            title: "User Acceptance Testing (UAT) Support",
        },
        {
            id: 7,
            image: report,
            title: "Documentation and Reporting",
        },
        {
            id: 8,
            image: qapi,
            title: "Quality Assurance Process Improvement",
        }
        
    ];

  return <Section 
  title="Services 🛠 "
  subtitle= <span>
  Welcome to the heart of my QA expertise! As a seasoned QA Engineer, I offer a comprehensive array of services to ensure your software applications meet the highest standards of quality and performance.<br />
  <br /> Here's an overview of the services I specialize in:
</span>>

    <div className='grid gap-5 sm:grid-cols-2'>
        {
            Services.map(({id, image, title}) => (
                <div key={id} className='flex flex-col items-center justify-center p-5 shadow-md dark:shadow-gray-300 rounded-xl duration-300 ease-in-out hover:scale-105'>

                    <img src={image} alt={title} className='w-36 h-36 md:w-20 md:h-20 object-contain'/>
                    <h3 className='mt-3 text-base'>{title}</h3>
                </div>

            ))
        }
    </div>
  </Section>
  
}

export default Services