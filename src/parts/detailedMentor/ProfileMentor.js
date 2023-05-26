import React, { useState } from 'react';
import Button from '../../components/Button';
import axios from 'axios';
import { AuthProvider } from '../../App';

export default function ProfileMentor({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const { token } = React.useContext(AuthProvider);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = e => {
    const _date = new Date(selectedDate).toISOString();
    e.preventDefault();
    // action
    axios
      .post(
        'http://localhost:8000/agreement',
        {
          mentor_id: data?.detail?.id,
          time_suggestion: _date,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      )
      .then(res => {
        setIsOpen(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='mx-auto'>
        <img
          src={`http://localhost:8000${data?.profile?.image_url}`}
          alt=''
          className='w-[350px] h-[350px] mx-auto rounded-lg'
        />
        <div className='rounded-lg w-60 bg-white mx-auto mt-5'>
          <div className='text-center my-2'>
            <p className='font-bold'>Rp. {data?.detail?.price}</p>
          </div>

          <Button
            type='button'
            className='w-full h-10 bg-[#50A4FE] rounded-b-lg grid content-center text-center text-white font-medium'
            onClick={toggleModal}>
            Hire Sekarang
          </Button>

          {isOpen && (
            <div
              className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50'
              onClick={handleOverlayClick}>
              <div
                className='bg-white p-6 rounded shadow-lg w-[500px]'
                onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <label
                      htmlFor='date'
                      className='block text-gray-700 font-bold mb-2'>
                      Pilih Tanggal
                    </label>
                    <input
                      type='date'
                      id='date'
                      value={selectedDate}
                      onChange={e => setSelectedDate(e.target.value)}
                      required
                      className='w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none'
                    />
                  </div>
                  <div className='flex justify-end'>
                    <button
                      onClick={() => {
                        console.log(selectedDate);
                      }}
                      type='submit'
                      className='bg-[#50A4FE] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
