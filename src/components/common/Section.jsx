import React from 'react'

const Section = ({title, subtitle, children}) => {
  return (
    <section className=' flex flex-col justify-start items-center py-16 px-5 text-center'>
        <h3 className='py-3 text-3xl lg:text-5xl'>{title}</h3>
        <p className='max max-w-2xl font-light text-gray-500 mb-5 mt-5 text-sm
         md:text-base'>{subtitle}</p>
        {children}

    </section>
  )
}

export default Section