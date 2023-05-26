import React from 'react'

export default function SecondSection() {
  return (
    <>
        <div className='flex w-full mt-20'>
            <div className='basis-1/2'>
                <img src="FotoHomepage2.png" alt="Hero1" className='w-[540px] m-auto'/>
            </div>
            <div className='basis-1/2 mt-12'>
                <h5 className='text-lg text-[#696969]'>Tentang Kami</h5>
                <h1 className='text-4xl font-bold mt-4 mb-10'>Membimbing kamu menuju prestasi luar biasa!</h1>
                <p className='text-[#696969]'>Mentorin adalah platform penyedia jasa mentoring 1 on 1 yang didedikasikan untuk membantu individu mencapai potensi maksimal dalam perkembangan intelektual. Percayalah bahwa kecerdasan kamu tidak terbatas, dan melalui bimbingan yang terarah dan personal, tujuan kami adalah membantu kamu meraih prestasi luar biasa.</p>
            </div>
        </div>
    </>
  )
}
