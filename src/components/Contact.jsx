import React from 'react'
import Section from './common/Section'
import {FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import { TbBrandFiverr } from "react-icons/tb";
// import contact from '../assets/mobile.png'
const Contact = () => {
    const SOCIAL = [
        {
            id: 1,
            Link: "https://www.linkedin.com/in/pamod-gurusinghe/",
            icon: <FaLinkedin />,
        },
        {
            id: 2,
            Link: "https://www.fiverr.com/s/rlPrR0",
            icon: <TbBrandFiverr />,
        },
        {
            id: 3,
            Link: "https://wa.me/message/KU2BHZNWXZIGD1",
            icon: <FaWhatsapp />,
        }
      
    ];
  return (
   <Section  
   title="Contact" 
   subtitle="Hope to heare from you soon! 😍">
    
    <div className=' flex flex-col items-center justify-center gap-8 text text-center'>

            <div className=''>
                 {/* <img src={contact} alt='contact info' className="w-32 h-32"/> */}
            </div>
            <div>
                <p className='max-w-xs md:max-w-lg font-extralight'> 
                    I am open to talk regarding freelancing or full-time opportunities.<br></br>Feel free to contact me using your preferred medium.
                </p>
            </div>
            <div className='flex w-full items-center justify-evenly text-3xl mt-10'>
            {SOCIAL.map(({id, Link, icon,}) => (
                <a key={id} href={Link} target="_blank" rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-[#8c52ff]'>{icon}</a>
                ))}
            </div>
            {/* bottom form
            <div className='p-8 text-left w-full items-center justify-center '>
                <form action="" method='POST'>
                <div className='gap-4 w-full'>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-2 font-extralight'>
                            name
                        </label>
                        <input type="text" name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white '></input>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-2 font-extralight'>
                            phone
                        </label>
                        <input type="text" name='phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white '></input>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-2 font-extralight'>
                            email
                        </label>
                        <input type="text" name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white '></input>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-2 font-extralight'>
                            message
                        </label>
                        <textarea name='message' rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none '>

                        </textarea>
                       
                    </div>
                </div>
                <div className='flex items-center justify-center '>
                    <button className='my-8 bg-[#8c52ff] text-white px-6 py-3 rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>
                        Send Message
                    </button>
                </div>
                </form>

            </div>
            */}
              
    </div>
   </Section>
  )
}

export default Contact