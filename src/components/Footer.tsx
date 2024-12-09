import Image from 'next/image';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <main className='w-full lg:h-[500px] h-[1500px] md:h-[500px]    lg:px-[200px] md:px-7  flex justify-between items-end lg:mt-[100px] md:mt-[900px]  mt-72'>
        <div className='w-[1321px] lg:h-[500px]  h-[1500px] md:h-[500px]  border-t-2 '>

            <div className='w-full h-[400px]  flex flex-col md:flex-row gap-2 '>
            <div className='w-full h-[400px]'>
                <div className='w-full h-[300px]  mt-10 '>
                    <div className='flex  justify-center items-center'>
                        <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={40}
                        height={40}/>
                   
                    <h1 className='text-[30px] leading-[31.2px] ml-4'>Comforty</h1> </div>
                    <p className='text-[16px] leading-[24px] mt-5 text-center text-[#272343]'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                    Cras egestas purus </p>

                    <div className='w-full h-10  mt-7 flex  lg:pl-0  justify-center items-center'>
                    <FaFacebook  className='text-3xl my-1 ml-1'/>
                    <FaTwitter  className='text-3xl my-1 ml-4' />
                    <FaInstagram className='text-3xl my-1 ml-4'/>
                    <FaPinterest className='text-3xl my-1 ml-4' />
                    <FaYoutube className='text-3xl my-1 ml-4' />

                    </div>
                    </div>
                </div>
                <div className='w-full h-[400px]'>
                <div className='w-full h-[300px]  mt-10 '>
                    <h1 className='text-[26px] leading-[31.2px] text-center text-[#9A9CAA]' >CATEGEORY</h1>
                    <ul className='text-center mt-4 text-[18px] '>
                        <li className='mt-2'>Sofa</li>
                        <li className='mt-2'>Arm chair</li>
                        <li className='mt-2'>Wing chair</li>
                        <li className='mt-2 '>Desk chair </li>
                        <li className='mt-2'>Wooden chair</li>
                        <li className='mt-2'>Park bench</li>
                    </ul>
                </div>
                </div>

                <div className='w-full h-[400px]'>
                <div className='w-full h-[300px] mt-10 '>
                    <h1 className='text-[26px] leading-[31.2px] text-center text-[#9A9CAA]' >SUPPORT</h1>
                    <ul className='text-center mt-4 text-[18px] '>
                        <li className='mt-2'>Help & Support</li>
                        <li className='mt-2'>Tearms & Conditions</li>
                        <li className='mt-2'>Privacy Policy</li>
                        <li className='mt-2 '>Help</li>
                    </ul>
                </div>
                </div>
                <div className='w-full h-[400px]'>
                <div className='w-full h-[300px] mt-10'>
                <h1 className='text-[26px] leading-[31.2px] text-center text-[#9A9CAA]' >NEWSLETTER</h1>
                <div className='w-full  mt-5  border border-black'>
                <input type="text" placeholder='Your Email' className='ml-5 rounded-[5px] pl-5 '/>
                </div>
                <p className='text-[16px] leading-[24px] mt-5 text-center text-[#272343]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                </div>
                </div>
            </div>

            </div>
            </main>
      
    </div>
  )
}

export default Footer
