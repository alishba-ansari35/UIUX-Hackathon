import Image from 'next/image'
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
const Feature = () => {
  return (
    <div>
       <main className='w-full lg:h-[461px] h-[1800px] md:h-[900px]    lg:px-[200px] md:px-0  flex justify-between items-end mt-10 '>
       <div className='w-[1321px] lg:h-[461px]  h-[1800px] md:h-[900px]  lg:gap-5   '>
       <h1 className="text-3xl font-bold text-[#272343] mt-5 px-5">Featured Products</h1>
       
    {/* <!-- Card Grid --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-[310px] gap-4 md:px-10 lg:px-2 px-5 py-7 ">
      {/* <!-- Card 1 --> */}
      <div className="bg-white  rounded-top-[20px] rounded-t-[20px] mt-5 md:mt-0 mx-auto lg:mx-0">
       <Image
       src="/images/image2.png"
       alt="card"
       width={312}
       height={377}
       className=' rounded-md '/>

    <div className='w-[256px] h-[51px]  '>
     <p className="text-[16px] font-normal leading-[20.8px] pl-2 mt-6 text-[#007580] ">TLibrary Stool Chair</p>
     <h1 className='text-[18px] leading-[19.8px] pl-2 mt-3 text-[#5e5a7e]'>$20</h1>
     </div>
     <div className='w-[44px] h-[44px] lg:bg-[#F0F2F3]  md:mt-[-40px] 
     mt-[-40px] lg:mt-[-20px] rounded-[4px] py-2  lg:mr-3 md:mr-10 ml-auto'>
     <IoCartOutline className='  text-[28px] text-black lg:mx-auto  ' />
     </div>
      </div>

      {/* grid card 2  */}
      <div className="bg-white  rounded-top-[20px] rounded-t-[20px] mt-5 md:mt-0 mx-auto lg:mx-0 ">
       <Image
       src="/images/image.png"
       alt="card"
       width={312}
       height={377}
       className=' rounded-md '/>

    <div className='w-[256px] h-[51px]  '>
     <p className="text-[16px] font-normal leading-[20.8px] pl-2 mt-6 text-[#007580] ">TLibrary Stool Chair</p>
     <h1 className='text-[18px] leading-[19.8px] pl-2 mt-3 text-[#272343]'>$20</h1>
     </div>
     <div className='w-[44px] h-[44px] lg:bg-[#F0F2F3]  md:mt-[-40px] 
     mt-[-40px] lg:mt-[-20px] rounded-[4px] py-2  lg:mr-3 md:mr-10 ml-auto'>
     <IoCartOutline className='  text-[28px] text-black lg:mx-auto  ' />
     </div>
      </div>

 {/* grid card 3  */}
 <div className="bg-white  rounded-top-[20px] rounded-t-[20px] mt-5 md:mt-0 mx-auto lg:mx-0">
       <Image
       src="/images/image3.png"
       alt="card"
       width={312}
       height={377}
       className=' rounded-md '/>

    <div className='w-[256px] h-[51px]  '>
     <p className="text-[16px] font-normal leading-[20.8px] pl-2 mt-6 text-[#007580] ">TLibrary Stool Chair</p>
     <h1 className='text-[18px] leading-[19.8px] pl-2 mt-3 text-[#272343]'>$20</h1>
     </div>
     <div className='w-[44px] h-[44px] lg:bg-[#F0F2F3]  md:mt-[-40px] 
     mt-[-40px] lg:mt-[-20px] rounded-[4px] py-2  lg:mr-3 md:mr-10 ml-auto'>
     <IoCartOutline className='  text-[28px] text-black lg:mx-auto  ' />
     </div>
      </div>

       {/* grid card 4  */}
       <div className="bg-white  rounded-top-[20px] rounded-t-[20px] mt-5 md:mt-0 mx-auto lg:mx-0">
       <Image
       src="/images/image4.png"
       alt="card"
       width={312}
       height={377}
       className=' rounded-md '/>

    <div className='w-[256px] h-[51px]  '>
     <p className="text-[16px] font-normal leading-[20.8px] pl-2 mt-6 text-[#007580] ">TLibrary Stool Chair</p>
     <h1 className='text-[18px] leading-[19.8px] pl-2 mt-3 text-[#272343]'>$20</h1>
     </div>
     <div className='w-[44px] h-[44px] lg:bg-[#F0F2F3]  md:mt-[-40px] 
     mt-[-40px] lg:mt-[-20px] rounded-[4px] py-2  lg:mr-3 md:mr-10 ml-auto'>
     <IoCartOutline className='  text-[28px] text-black lg:mx-auto  ' />
     </div>
      </div>


  </div>
        </div>
        </main>
    </div>
  )
}

export default Feature
