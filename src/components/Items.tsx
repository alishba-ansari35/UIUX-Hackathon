import Image from 'next/image'
import React from 'react'

const Items = () => {
  return (
    <div>

<main className='w-full lg:h-[461px] h-[900px] md:h-[500px] lg:px-[200px] md:px-0  flex justify-between items-end mt-2  '>
<div className='w-[1321px] lg:h-[461px]  h-[900px] md:h-[500px]    flex flex-col lg:flex-row   flrex px-5 lg-px-0'>



<div className='w-full h-[450px]  flex flex-col lg:flex-row md:flex-row gap-7 '>

<div  className='w-full h-[440px]  mt-5 '>
  {/* image div */} 
<Image src="/images/card3.png" alt="card3" width={450} height={4500}/>
</div>

<div  className='w-full h-[440px] mt-5  '>
  {/* image div */} 
<Image src="/images/card10.png" alt="card10" width={450} height={4500}/>
</div>

</div>


    
    </div>
    </main>
      
    </div>
  )
}

export default Items
