import React from 'react'

export default function ThirdSection() {
  return (
    <>
        <div className='mt-40 flex w-full'>
            <div className='basis-1/2 pr-20 pt-20'>
                <h5 className='text-lg text-[#696969]'>Mentorin</h5>
                <h1 className='text-4xl font-bold mt-4 mb-10'>Slogan by nevan and rivo</h1>
                <p className='text-[#696969]'>Temukan mentor yang tepat untuk membantu kamu dalam mengembangkan skill dan karir</p>
                <img src='plane.png' alt='plane' className='ml-48'/>
            </div>
            <div className='basis-1/2'>
                <div className='grid col-2 grid-rows-2 grid-cols-2'>
                    <div className='mb-8 px-3'>                        
                        <img src="thumbsUp.png" alt="Hero1" className='m-auto' />                      
                        <div className='text-center mt-4'>
                            <p className='text-xl font-medium mb-1'>Mentor Terbaik</p>
                            <p className='text-[#696969]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. cras interdum ornare feugiat eget feugiat.</p>
                        </div>
                    </div>
                    <div className='mb-8 px-3'>                       
                        <img src="time.png" alt="Hero1" className='m-auto'/>
                        <div className='text-center mt-4'>
                            <p className='text-xl font-medium mb-1'>Mentor Terbaik</p>
                            <p className='text-[#696969]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. cras interdum ornare feugiat eget feugiat.</p>
                        </div>
                    </div>
                    <div className='mb-8 px-3'>                       
                        <img src="Check.png" alt="Hero1" className='m-auto'/>
                        <div className='text-center mt-4'>
                            <p className='text-xl font-medium mb-1'>Mentor Terbaik</p>
                            <p className='text-[#696969]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. cras interdum ornare feugiat eget feugiat.</p>
                        </div>
                    </div>
                    <div className='mb-8 px-3'>
                        <img src="dollar.png" alt="Hero1" className='m-auto'/>   
                        <div className='text-center mt-4'>
                            <p className='text-xl font-medium mb-1'>Mentor Terbaik</p>
                            <p className='text-[#696969]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. cras interdum ornare feugiat eget feugiat.</p>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
