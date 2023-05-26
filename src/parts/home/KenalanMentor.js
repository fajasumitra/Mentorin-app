import React from 'react';
import Button from '../../components/Button';
import MentorCard from '../../components/MentorCard';
import axios from 'axios';

export default function KenalanMentor() {
  const [mentor, setMentor] = React.useState([]);
  React.useEffect(() => {
    _fetchMentor();
  }, []);
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
      <div className='mt-32 '>
        <div className='text-center'>
          <p className='text-4xl'>Yuk, Kenalan dengan mentor kami</p>
          <Button type={'link'} to={'/mentor'} className={'font-bold mt-5'}>
            Lihat Semua Mentor{' '}
          </Button>
        </div>
        <div className='flex justify-center gap-8 mt-10'>
          {mentor?.map((data, index) => (
            <MentorCard key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
