import React from 'react'
//import Section from './common/Section'
import { FaRegCopyright } from 'react-icons/fa'
const Footer = () => {
  return (
    <section className="flex flex-col justify-start items-center p-5 text-center">
       <div className='max-w-xl flex flex-row gap-1.5'>
       <FaRegCopyright className='mt-0.5'/>
       <p className=' font-light text-gray-500 mb-10'> 2023 Portfolio | Designed by Pamod Gurusinghe </p>
       </div>
    </section>
  )
}

export default Footer