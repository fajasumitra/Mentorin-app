import React from 'react';
import MentorCard from '../components/MentorCard';
import Footer from '../parts/Footer';
import FirstSection from '../parts/home/FirstSection';
import KenalanMentor from '../parts/home/KenalanMentor';
import SecondSection from '../parts/home/SecondSection';
import ThirdSection from '../parts/home/ThirdSection';
import Navbar from '../parts/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='grid ml-20 mr-20'>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <KenalanMentor />
      </div>
      <Footer />
    </>
  );
}
