import React from 'react'
import Section from './common/Section'

import { FaGithub, FaExternalLinkSquareAlt, } from 'react-icons/fa';

import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            image: p1,
            title: 'Best App',
            github: '',
            demo: '',

        },
        {
            id: 2,
            image: p2,
            title: 'Best App',
            github: '',
            demo: '',

        },
        {
            id: 3,
            image: p3,
            title: 'Best App',
            github: '',
            demo: '',

        },
        {
            id: 4,
            image: p4,
            title: 'Best App',
            github: '',
            demo: '',

        },
        {
            id: 5,
            image: p5,
            title: 'Best App',
            github: '',
            demo: '',

        },
        {
            id: 6,
            image: p6,
            title: 'Best App',
            github: '',
            demo: '',

        }
    ];

    return (
        
        <Section 
            title="Portfolio"
            subtitle='Experienced professional Quality Assurance Engineer with 2 years of experience in software quality assurance, manual testing and currently learning test automation.'>
            <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
                {projects.map(({ id, image, title, github, demo }) => (
                    <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden duration-300 ease-in-out hover:scale-110'>

                        <img src={image} alt={title} className='w-2/3' />
                        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                            <h2>{title}</h2>
                            <a className='text-2xl cursor-pointer duration150 hover:scale-110 hover:text-[#8c52ff]' href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a className='text-2xl cursor-pointer duration150 hover:scale-110 hover:text-[#8c52ff]' href={demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkSquareAlt /></a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Portfolio