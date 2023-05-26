import React from 'react'

export default function ThirdSection() {
  return (
    <>
        <div className='mt-40 flex w-full'>
            <div className='basis-1/2 pr-20 pt-20'>
                <h5 className='text-lg text-[#696969]'>MENTORIN</h5>
                <h1 className='text-4xl font-bold mt-4 mb-10'>Kenapa harus pilih Mentorin?</h1>
                <p className='text-[#696969]'>Dengan Mentorin, kamu akan mendapatkan mentor terbaik, jadwal fleksibel, pilihan kategori mentor yang beragam, dan harga yang terjangkau, memberikan kamu kesempatan untuk mengembangkan potensi intelektual kamu dengan cara yang menyenangkan</p>
                <img src='plane.png' alt='plane' className='ml-48'/>
            </div>
            <div className='basis-1/2'>
                <div className='grid col-2 grid-rows-2 grid-cols-2'>
                    <div className='mb-8 px-3'>                        
                        <img src="thumbsUp.png" alt="Hero1" className='m-auto' />                      
                        <div className='text-center mt-4'>
                            <p className='text-xl font-medium mb-1'>Mentor Terbaik</p>
                            <p className='text-[#696969]'>Dengan mentor terbaik kami, kamu akan mendapatkan bimbingan pribadi yang sangat berharga untuk mencapai tujuan</p>
                        </div>
                    </div>
                    <div className='mb-8 px-3'>                       
                        <img src="time.png" alt="Hero1" className='m-auto'/>
                        <div className='text-center mt-4'>
                            <p className='text-xl font-medium mb-1'>Jadwal Flexible</p>
                            <p className='text-[#696969]'>dapat dengan mudah menyesuaikan jadwal sesi mentoring sesuai dengan ketersediaan waktu</p>
                        </div>
                    </div>
                    <div className='mb-8 px-3'>                       
                        <img src="Check.png" alt="Hero1" className='m-auto'/>
                        <div className='text-center mt-4'>
                            <p className='text-xl font-medium mb-1'>Pilihan Kategori Mentor</p>
                            <p className='text-[#696969]'>pilihan kategori mentor yang beragam untuk memenuhi kebutuhan sesuai minat dan bakat</p>
                        </div>
                    </div>
                    <div className='mb-8 px-3'>
                        <img src="dollar.png" alt="Hero1" className='m-auto'/>   
                        <div className='text-center mt-4'>
                            <p className='text-xl font-medium mb-1'>Harga Terjangkau</p>
                            <p className='text-[#696969]'>Dengan harga yang kompetitif, kamu dapat memperoleh manfaat dari mentor terbaik kami tanpa membebani anggaran kamu</p>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
