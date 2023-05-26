import React from 'react';
import { Link } from 'react-router-dom';
import SkillContainer from './SkillContainer';

export default function MentorCard({ data }) {
  const [_data, setData] = React.useState();

  React.useEffect(() => {}, []);

  return (
    <>
      <Link to={`/mentor/${data.id}`} className='cursor-pointer'>
        <div className='grid w-[230px] bg-white rounded-lg hover:bg-gray-100'>
          <div className=''>
            <img
              src={`http://localhost:8000${data?.profile?.image_url}`}
              alt=''
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
          </div>
          <div className='px-4 mt-4'>
            <p className='text-base font-medium'>{data?.name}</p>
            <p className='text-[#696969] text-sm mb-2'>
              {data?.detail.position}
            </p>
            <div className='flex flex-wrap gap-2'>
              <SkillContainer small>Photoshop</SkillContainer>
              <SkillContainer small>Illustrator</SkillContainer>
              <SkillContainer small>Adobe XD</SkillContainer>
            </div>
          </div>
          {/* section */}
          <div className='w-full bg-gray-500 h-[0.5px] mt-5' />

          <div className='text-center my-2'>
            <p>
              Start From{' '}
              <span className='font-bold'> Rp. {data?.detail?.price}</span>
            </p>
          </div>

          <div className='w-full h-10 bg-[#50A4FE] rounded-b-lg grid content-center text-center text-white font-medium'>
            <p>Daftar</p>
          </div>
        </div>
      </Link>
    </>
  );
}
