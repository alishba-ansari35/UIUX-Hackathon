import Image from 'next/image'
import React from 'react'

const Items = () => {
  return (
    <div>

<main className='w-full lg:h-[461px] h-[900px] md:h-[500px]    lg:px-[200px] md:px-0  flex justify-between items-end mt-10 '>
<div className='w-[1321px] lg:h-[461px]  h-[900px] md:h-[500px]    flex flex-col lg:flex-row  '>
      <div className=" grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr] px-5">

        {/* Images section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Orange chair (left side) */}
          <div className="w-full md:w-[48%]">
            <Image
              src="/images/image3.png"
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Other chairs (right side) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/images/image4.png"
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/image2.png"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/image8.png"
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/image2.png"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

    
    </div>
    </main>
      
    </div>
  )
}

export default Items
