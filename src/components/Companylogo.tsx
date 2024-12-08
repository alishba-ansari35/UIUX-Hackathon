import Image from 'next/image'
import React from 'react'

const Companylogo = () => {
  return (
    <div>
       <main className='w-full lg:h-[139px] bg-white  lg:px-[200px] md:px-0 px-auto flex justify-between items-end   mt-5'>
       <div className='w-[1321px] lg:h-[139px]  lag:gap-5 flex lg:flex-row  md:flex-row flex-col justify-between items-center   '>
        <div className='w-full h-[139px] '>
            <Image src="/images/logo1.png" alt="logo1" width={85} height={87}
            className='mt-10 mx-auto' />
        </div>
        <div className='w-full h-[139px] '>
        <Image src="/images/logo2.png" alt="logo2" width={107} height={109}
            className='mt-12 mx-auto' />
        </div>
        <div className='w-full h-[139px] '>
        <Image src="/images/logo3.png" alt="logo3" width={135} height={139}
            className='mt-9 mx-auto' />
        </div>
        <div className='w-full h-[139px] '>
        <Image src="/images/logo4.png" alt="logo4" width={63} height={65}
            className='mt-9 mx-auto' />
        </div>
        <div className='w-full h-[139px] '>
        <Image src="/images/logo5.png" alt="logo5" width={98} height={101}
            className='mt-5 mx-auto' />
        </div>
        <div className='w-full h-[139px]'>
        <Image src="/images/logo6.png" alt="logo6" width={113} height={115}
            className='mt-14 mx-auto' />
        </div>
        <div className='w-full h-[139px] '>
        <Image src="/images/logo7.png" alt="logo7" width={84} height={87}
            className='mt-14 mx-auto' />
        </div>
        
        </div>
        </main>
    </div>
  )
}

export default Companylogo

