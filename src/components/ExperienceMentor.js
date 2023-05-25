import React from 'react';

export default function ExperienceMentor({ children }) {
  return (
    <>
      <div className='flex mt-2'>
        <div className='w-2 h-2 bg-gray-500 rounded-full mt-[8px]'></div>
        <div className='ml-3'>
          {children}
        </div>
      </div>
    </>
  );
}

ExperienceMentor.Title = function Title({ children }) {
  return <p className='text-base font-medium text-[#50A4FE]'>{children}</p>;
}

ExperienceMentor.Desc = function Desc({ children }) {
  return <p className='text-sm text-[#696969]'>{children}</p>;
}
