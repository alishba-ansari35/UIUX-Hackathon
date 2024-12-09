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



      {/* <div className=" grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr] px-5"> */}

        {/* Images section */}
        {/* <div className="flex flex-col md:flex-row items-center gap-8"> */}
          {/* Orange chair (left side) */}
          {/* <div className="w-full md:w-[48%]">
            <Image
              src="/images/card3.png"
              alt="card3"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div> */}

          {/* Other chairs (right side) */}
          {/* <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/images/card4.png"
                alt="card4"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/card2.png"
                alt="card2"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/card8.png"
                alt="card8"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/card1.png"
                alt="card1"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div> */}

    
    </div>
    </main>
      
    </div>
  )
}

export default Items
