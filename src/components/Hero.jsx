import React from 'react'
import { FaLinkedin, FaArrowDown, FaWhatsapp } from 'react-icons/fa'
import {TbBrandFiverr} from 'react-icons/tb'
import avatar from "../assets/My_img 2.png"

const Hero = () => {

    const SOCIAL = [
        {
            id: 1,
            Link: "https://www.linkedin.com/in/pamod-gurusinghe/",
            icon: <FaLinkedin />,
        },
        {
            id: 2,
            Link: "https://www.fiverr.com/s/L6v0rL",
            icon: <TbBrandFiverr />,
        },
        {
            id: 2,
            Link: "https://wa.me/message/KU2BHZNWXZIGD1",
            icon: <FaWhatsapp />,
        }
    ];

    window.addEventListener("scroll", function (){
        const downArrow = document.querySelector(".down-arrow");

        if (this.scrollY >= 60) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    });
    
    return (
        <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
            <h2 className='text-5xl text-[#8c52ff] uppercase font-bold'>Pamod Gurusinghe</h2>
            <h3 className='py-3 text-2xl'>QA Engineer</h3>
            <p className='max-w-2xl font-light'>Experienced professional Quality Assurance Engineer with 2 years of experience in software quality assurance, manual testing and currently learning test automation.</p>
           
            {/* social icons */}
            <div className='flex items-center justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/2'>
                {SOCIAL.map(({ id, Link, icon }) => (
                    <a
                        href={Link}
                        key={id}
                        target="_blank"
                        rel='noopener noreferrer'
                        className="cursor-pointer duration-300 hover:text-[#8c52ff]">
                        {icon}
                    </a>
                ))}
                </div>
                {/* avatar and resume */}
                <div>
                    <img src={avatar} alt="avatar" className='rounded-3xl'/>
                    <a 
                    href='/Pamod Gurusinghe CV.pdf' 
                    download={true}
                    className="flex items-center text-2xl justify-center mt-10 bg-[#8c52ff] to-black text-white py-2 rounded-lg duration-300 ease-in-out hover:scale-110">Download Resume</a>

                </div>
               {/* arrow down animation */}

               <div className='mt-10 down-arrow ms:hidden'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />
               </div>
            
        </section>
    )
}

export default Hero