import React, { useState } from 'react';
import MentorCard from '../components/MentorCard';
import Navbar from '../parts/Navbar';
import Button from '../components/Button';
import Footer from '../parts/Footer';
import { AuthProvider } from '../App';
import axios from 'axios';

export default function Mentor() {
  const [kategori, setKategori] = useState('all');
  const { token } = React.useContext(AuthProvider);
  const [mentor, setMentor] = useState([]);

  // use memo mentor

  React.useEffect(() => {
    _fetchMentor();
  }, []);

  const kategoriHandler = tab => {
    if (tab === 'all') setKategori('all');
    else if (tab === 'frontend') setKategori('frontend');
    else if (tab === 'backend') setKategori('backend');
    else if (tab === 'mobile') setKategori('mobile');
    else if (tab === 'uiux') setKategori('uiux');
    else if (tab === 'datascience') setKategori('datascience');
  };

  const _fetchMentor = async () => {
    await axios
      .get('http://localhost:8000/user/mentor/list', {})
      .then(res => {
        setMentor(...mentor, res.data);
      })
      .catch(err => {});
  };

  return (
    <>
      <Navbar />
      <div className='px-20'>
        <div className='text-center mt-20'>
          <p className='text-2xl font-medium'>Temukan Mentormu</p>
          <p className='text-[#696969] text-base'>
            Temukan mentor yang akan mengubah perjalanan hidup kamu dan membantu
            kamu mencapai potensi terbaik kamu.
          </p>

          <form action='' className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <input
                type='text'
                placeholder='Cari mentor'
                className='rounded-lg px-4 py-2 w-[500px] mx-auto mt-7 border border-gray-200'
              />
            </div>
          </form>

          <div className='flex flex-warp justify-center gap-5 mt-10'>
            <Button
              type={'button'}
              isKategori
              isActive={kategori === 'all'}
              onClick={() => kategoriHandler('all')}>
              All
            </Button>

            <Button
              type={'button'}
              isKategori
              isActive={kategori === 'frontend'}
              onClick={() => kategoriHandler('frontend')}>
              Frontend
            </Button>

            <Button
              type={'button'}
              isKategori
              isActive={kategori === 'backend'}
              onClick={() => kategoriHandler('backend')}>
              Backend
            </Button>

            <Button
              type={'button'}
              isKategori
              isActive={kategori === 'mobile'}
              onClick={() => kategoriHandler('mobile')}>
              Mobile
            </Button>

            <Button
              type={'button'}
              isKategori
              isActive={kategori === 'uiux'}
              onClick={() => kategoriHandler('uiux')}>
              UI/UX
            </Button>

            <Button
              type={'button'}
              isKategori
              isActive={kategori === 'datascience'}
              onClick={() => kategoriHandler('datascience')}>
              Data Science
            </Button>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-8 mt-10 mx-20'>
          {mentor?.map((data, index) => (
            <MentorCard key={index} data={data} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
