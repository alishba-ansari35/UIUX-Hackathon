import Image from 'next/image'
import React from 'react'

const Categeories = () => {
  return (
    <div>
      <main className='w-full lg:h-[461px] h-[1300px] md:h-[500px]    lg:px-[200px] md:px-0  flex justify-between items-end mt-10 '>
       <div className='w-[1321px] lg:h-[461px]  h-[1300px] md:h-[500px]  lg:gap-5   '>
       <h1 className="text-3xl font-bold text-[#272343] mt-5 px-5">Top Categories</h1>

       {/* <!-- Card Grid --> */}
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 h-[310px] gap-4 md:px-10 lg:px-2 px-5 py-7 ">
      {/* <!-- Card 1 --> */}
      <div className="bg-pink-100   rounded-top-[20px] rounded-t-[20px] mt-5 md:mt-0 mx-auto lg:mx-0">
       <Image
       src="/images/image5.png"
       alt="card1"
       width={312}
       height={424}
       className=' rounded-md '/>

       <div className='w-full h-[60px] bg-[#000000B2] '>
        <p className='text-[18px] text-white leading-[22px] py-1 px-5'>Wing Chair</p>
        <p className='text-[14px] text-white leading-[15.4px] py-1 px-5 font-normal'>3,584 Products</p>
       </div>
       </div>

      {/* grid card 2  */}
      <div className="bg-white  rounded-top-[20px] rounded-t-[20px] mt-5 md:mt-0 mx-auto lg:mx-0 ">
       <Image
       src="/images/image6.png"
       alt="card2"
       width={312}
       height={377}
       className=' rounded-md '/>

       <div className='w-full h-[60px] bg-[#000000B2]'>
        <p className='text-[18px] text-white leading-[22px]  py-1 px-5'>Wooden Chair</p>
        <p className='text-[14px] text-white leading-[15.4px] py-1 font-normal px-5'>157 Products</p>
       </div>
       </div>

      {/* grid card 3  */}
      <div className="bg-white  rounded-top-[20px] rounded-t-[20px] mt-5 md:mt-0 mx-auto lg:mx-0">
       <Image
       src="/images/image7.png"
       alt="card3"
       width={312}
       height={377}
       className=' rounded-md '/>
         
        <div className='w-full h-[60px] bg-[#000000B2]'>
        <p className='text-[18px] text-white leading-[22px]  py-1 px-5'>Desk Chair</p>
        <p className='text-[14px] text-white leading-[15.4px] py-1 font-normal px-5'>154 Products</p>
       </div>
      </div>

       </div>
       
        </div>
       </main>
    </div>
  )
}

export default Categeories
