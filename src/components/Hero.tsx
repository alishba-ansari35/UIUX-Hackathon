import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
     <main  className='w-full h-[700px] bg-white  lg:px-[200px] md:px-0 px-auto flex justify-between items-end  mt-5'>
        <div className='w-[1321px] h-[700px] bg-[#F0F2F3] flex lg:flex-row  md:flex-row flex-col lg:pt-32 rounded-tr-[48px]
        rounded-bl-[48px]'>
            {/* left side start */}
            <div className='w-full h-96  '>
                <div className='w-[200px] h-[14px] mt-20 ml-[45px]   '>
                    <p className='font-normal text-sm leading-[14px] tracking-[12%] text-[#272343]'>WELCOME TO CHAIRY</p>
                </div>
                <h1 className='font-bold text-3xl text-[#272343] mt-5 ml-[45px]'>Best Furniture</h1>
                <h1 className='font-bold text-3xl text-[#272343] mt-3  ml-[45px]'>Collection For Your </h1>
                <h1 className='font-bold text-3xl text-[#272343] mt-3  ml-[45px]'>Interior</h1>

                <button className='w-[150px] h-[52px] bg-[#029FAE] rounded-[8px] py-[14px] px-[24px] ml-[45px] mt-8 flex
                justify-between items-center'>
                    <p className='text-[16px] text-white leading-[17.6px] '>Shop Now</p>
                    <span> <FaArrowRight className='text-white mt-1 ml-2' />
                    </span>
                </button>
            </div>
            {/* left side end  */}

            {/* right side start */}
            <div className='w-full h-96 px-16 md:mt-5 mt-5'>
             <Image src="/images/hero.png" alt="heropic" width={434} height={584} />
            </div>
             {/* right side start */}
        </div>
        </main> 
        
    
      
    </div>
  )
}

export default Hero
