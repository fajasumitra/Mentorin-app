import React, { useState } from 'react';
import Button from '../../components/Button';
import ExperienceMentor from '../../components/ExperienceMentor';
import SkillContainer from '../../components/SkillContainer';

export default function MentorDesc({ data }) {
  const [tentang, setTentang] = useState('experience');

  const handleTentang = tab => {
    if (tab === 'experience') setTentang('experience');
    if (tab === 'portofolio') setTentang('portofolio');
  };
  return (
    <>
      <div className='mr-20'>
        <h1 className='text-3xl font-medium'>{data?.profile?.name}</h1>
        <p className='text-lg text-[#696969]'>{data?.detail?.position}</p>
        <div className='flex flex-wrap mt-2 gap-4'>
          <SkillContainer>Photoshop</SkillContainer>
          <SkillContainer>Adobe XD</SkillContainer>
          <SkillContainer>Illustrator</SkillContainer>
          <SkillContainer>Adobe XD</SkillContainer>
        </div>
        <p className='text-[#696969] mt-5'>{data?.detail?.description}</p>

        <p className='text-3xl font-medium text-[#50A4FE] mt-10'>
          Tentang Mentor
        </p>

        <div className='flex flex-wrap mt-2 gap-4 mb-5'>
          <Button
            type='button'
            isKategori
            isActive={tentang === 'experience'}
            onClick={() => handleTentang('experience')}>
            Experience
          </Button>
          <Button
            type='button'
            isKategori
            isActive={tentang === 'portofolio'}
            onClick={() => handleTentang('portofolio')}>
            Portofolio
          </Button>
        </div>

        <ExperienceMentor>
          <ExperienceMentor.Title>UI/UX Designer</ExperienceMentor.Title>
          <ExperienceMentor.Desc>
            Bekerja sebagai UI/UX Desiger
          </ExperienceMentor.Desc>
        </ExperienceMentor>
        <ExperienceMentor>
          <ExperienceMentor.Title>UI/UX Designer</ExperienceMentor.Title>
          <ExperienceMentor.Desc>
            Bekerja sebagai UI/UX Desiger
          </ExperienceMentor.Desc>
        </ExperienceMentor>
      </div>
    </>
  );
}
