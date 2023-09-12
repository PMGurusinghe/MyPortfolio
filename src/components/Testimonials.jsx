import React from 'react'
import Section from './common/Section'
import avatar from '../assets/avatar.png'

const Testimonials = () => {

    const TESTIMONIALS = [
        {
            id: 1,
            image: avatar,
            name:"Jhon Doe",
            comment:"Experienced professional Quality Assurance Engineer with 2 years of experience in software quality assurance, manual testing and currently learning test automation.",
        },
        {
            id: 2,
            image: avatar,
            name:"Jhon Doe",
            comment:"Experienced professional Quality Assurance Engineer with 2 years of experience in software quality assurance, manual testing and currently learning test automation.",
        },
        {
            id: 3,
            image: avatar,
            name:"Jhon Doe",
            comment:"Experienced professional Quality Assurance Engineer with 2 years of experience in software quality assurance, manual testing and currently learning test automation.",
        },
        {
            id: 4,
            image: avatar,
            name:"Jhon Doe",
            comment:"Experienced professional Quality Assurance Engineer with 2 years of experience in software quality assurance, manual testing and currently learning test automation.",
        },
    ];
    return (
    <Section 
    title='Testimonials' 
    subtitle='Experienced professional Quality Assurance Engineer with 2 years of experience in software quality assurance, manual testing and currently learning test automation.'>
        <div className='max-w-xl flex flex-col gap-2'>
            {TESTIMONIALS.map(({id, image, name, comment}) => (
                <div className='flex p-4 mt-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300 duration-300 ease-in-out hover:scale-110'>
                    <div className='w-1/3'>
                        <img src={image} alt={name} className="w-20 object-cover ml-10 pt-2"/>
                    </div>
                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
            )
            )}
        </div>
    </Section>
    )
}

export default Testimonials