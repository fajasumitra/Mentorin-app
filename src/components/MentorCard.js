import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';


export default function MentorCard() {
  return (
    <> 
    <Link to="/mentor" className='cursor-pointer'>
      <div className='grid w-[250px] bg-gray-200 rounded-lg hover:bg-gray-300 pb-5'>
        <div className=''>
          <img src='profleFoto.png' alt='' className='w-full h-[200px] object-cover rounded-t-lg' />
        </div>
        <div className='px-4 mt-4'>
          <p className='text-lg font-medium'>Faja Tirta Sumitra</p>
          <p className='text-[#696969] text-base'>Frontend Developer</p>
          <div className='px-4 rounded-full border border-black w-fit text-xs mt-2'>
            Photoshop
          </div>
          <div className='w-full bg-gray-500 h-[0.5px] mt-10' />
          <p className='text-lg'>Review</p>
          <StarRating />
        </div>
      </div>
    </Link>
    </>
  );
}
