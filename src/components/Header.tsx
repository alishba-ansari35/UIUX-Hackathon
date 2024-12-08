"use client"
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import Image from 'next/image';
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
       {/*Top navbar */}
        <div className='w-full h-[45px] bg-[#272343] py-[14px] lg:px-[200px] md:px-10 md:flex justify-between items-end hidden '>
          <div className='w-[255px] h-[16px] gap-[8px] opacity-[70%] flex justify-center items-center'>
            <div className='w-[16px] h-[16px] '><FaCheck className='text-white' /></div>
            <div className='w-[231px] h-[14px] '>
                <p className='text-[13px] leading-[14.3px] font-normal text-white  '>Free shipping on all orders over $50</p>
            </div>
          </div>

          <div className='w-[202px] h-[17px] gap-[24px] opacity-[70%] flex '>
            <div className='w-[45px] h-[17px] flex justify-between items-center '>
                <p className='font-normal text-[13px] leading-[16.9px] text-center text-white'>Eng</p>
                <span><FaAngleDown className='text-white' /></span>
            </div>
            <div className='w-[37px] h-[17px] '>
            <p className='font-normal text-[13px] leading-[16.9px] text-center text-white'>Faqs</p>
            </div>
            <div className='w-[87px] h-[17px] '>
            <p className='font-normal text-[13px] leading-[16.9px] text-center text-white'>Need Help</p>
            
            </div>
          </div>
        </div>

      {/* top navbar end  */}


      {/* navbar 1 start */}

   <div className='w-full h-[84px] flex justify-between py-[20px] lg:px-[200px] px-[20px]  bg-[#F0F2F3] '>
    <div className='w-[166px] h-[40px] gap-[8px]   flex justify-between items-center'>
        <div className='w-[40px] h-[40px] '>
            <Image src="/images/logo.png" alt="logopic" width={40} height={40}/>
        </div>
        <div className='w-[118px] h-[31px] '>
        <h1 className='font-medium text-[26px] leading-[31.2px] text-[#272343]'> Comforty</h1>
        </div>
    </div>

    <div className='w-[120px] h-[44px] gap-[12px] rounded-[4px] py-[11px] px-[16px] hidden 
          lg:flex justify-between items-center '>
        <div className='w-[56px] h-[22px] gap-[8px] flex justify-between items-center '>
        <div className='w-[22px] h-[22px] '>
        <IoCartOutline className='  text-[25px] ' /></div>
        <p className='font-medium text-[17px] leading-[13px] text-center text-[#272343]'>Cart</p>
        </div>
        <div className='w-[20px] h-[20px] bg-[#007580] rounded-full mt-1  '> 
        <p className='text-center text-white text-[13px] font-medium '>2</p></div>
    </div>

    <div onClick={toggleMenu}
 className='lg:hidden mt-2 text-3xl'>

         <AiOutlineMenu /> 
          </div>
   </div>
   {/* navbar 1 end */}

     {/* navbar 2 start  */}

           <div className='w-full h-[74px] lg:flex justify-between py-[30px] lg:px-[200px] hidden bg-white border-b-2
           border-[#E1E3E5] '>

            <div className='w-[339px] h-[15px] gap-[32px] '>
                <nav>
                    <ul className='text-[18px] font-medium leading-[15.4px] flex justify-between items-center text-[#636270] '>
                        <li className='text-[#007580]'><Link href="/" >Home</Link></li>
                        <li><Link href="/" >Shop</Link></li>
                        <li><Link href="/" >Product</Link></li>
                        <li><Link href="/" >Pages</Link></li>
                        <li><Link href="/" >About</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='w-[168px] h-[15px]  gap-[20px] xl:flex hidden'>
                <div className='w-[57px] h-[15px] '>
                <p className='font-medium text-[14px] leading-[15.4px] text-[#636270]'>Contact:1</p>
                </div>
                <div className='w-[105px] h-[15px] '>
                    <p className='font-medium text-[14px] leading-[15.4px] '>(808) 555-0111</p>
                </div>
            </div>

          </div>
 {/* navbar 2 end  */}


 {/* MOBILE RESPONSIVE */}

 {isOpen && (
          
          <div className="md:full w-auto bg-[#F7F7F7] mx-auto lg:hidden   ">
          <ul className='text-center '>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0 ' ><Link href="/">Home</Link></li>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0' ><Link href="/">Shop</Link></li>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0'><Link href="/">Product</Link></li>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0'><Link href="/">Pages</Link></li>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0'><Link href="/">About</Link></li>
          </ul>
</div>
      

  )}
    </div>
  )
}

export default Header
