import React from 'react'

export default function Login() {
  return (
    <>
        <div className='flex'>
            <div className=''>
                <img src='loginSide.png' alt='loginSide' className='h-screen object-cover w-[400px]'/>
            </div>
            <form action="" className='w-1/3 mx-auto rounded-lg grid content-center'>
                <div className=''>
                    <p className='text-2xl font-medium mt-5'>Masuk ke akun</p>
                    <div className='mt-5'>
                        <input type="username" name="username" id="username" placeholder='Email' className='rounded-lg px-4 py-2 mb-2 w-full border border-gray-200' />
                        
                        <input type="password" name="password" id="password"  placeholder='password' className='rounded-lg px-4 py-2 mt-2 w-full border border-gray-200' />
                        <button type="submit" className='bg-[#50A4FE] text-white rounded-lg px-8 py-2 mx-auto mt-5'>Sign in</button>
                    </div>
                </div>
            </form>

        </div>
    </>
  )
}
