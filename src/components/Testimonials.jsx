import React from 'react'
import Section from './common/Section'
import avatar from '../assets/avatar.png'

const Testimonials = () => {

    const TESTIMONIALS = [
        {
            id: 1,
            image: avatar,
            name:"John Smith, Product Manager:",
            comment:"I praises the meticulous attention to detail, proactive approach, and vast knowledge that Pamod brings to the table. The result? Significantly improved software quality and seamless, bug-free releases. Pamod is hailed as an invaluable asset to any team.",
        },
        {
            id: 2,
            image: avatar,
            name:"David Brown, QA Lead:",
            comment:"I appreciates Pamod's deep understanding of testing methodologies and effective communication, making their collaboration seamless. David emphasizes Pamod's consistent delivery of high-quality work, exceeding expectations, and acknowledges them as a top-tier QA professional.",
        }
    ];
    return (
    <Section 
    title='Testimonials' 
    subtitle='Read what industry professionals and clients have to say about their experience working with me as a QA Engineer.'>
        <div className='max-w-xl flex flex-col gap-2'>
            {TESTIMONIALS.map(({id, image, name, comment}) => (
                <div key={id} className='flex p-4 mt-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300 duration-300 ease-in-out hover:scale-110'>
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