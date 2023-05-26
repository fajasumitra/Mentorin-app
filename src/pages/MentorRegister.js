import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RegisterProvider } from '../App';

export default function MentorRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { id } = React.useContext(RegisterProvider);
  const navigate = useNavigate();

  const _register = async data => {
    axios
      .put('http://localhost:8000/user/mentor', {
        id: id,
        ...data,
      })
      .then(res => {
        navigate('../../login');
      });
  };
  return (
    <>
      <div className='flex'>
        <div className=''>
          <img
            src='/loginSide.png'
            alt='loginSide'
            className='h-screen object-cover w-[400px]'
          />
        </div>
        <form
          onSubmit={handleSubmit(_register)}
          className='w-1/3 mx-auto rounded-lg grid content-center'>
          <div className='flex flex-col gap-y-5'>
            <p className='text-2xl font-medium mt-5'>Daftar Mentor Baru</p>
            <div className='mt-5 flex flex-col'>
              <input
                {...register('position', { required: true })}
                type='position'
                name='position'
                id='position'
                placeholder='Position'
                className='rounded-lg px-4 py-2 mb-2 w-full border border-gray-200'
              />
              <input
                {...register('price', { required: true, valueAsNumber: true })}
                type='int'
                name='price'
                id='price'
                placeholder='Price'
                className='rounded-lg px-4 py-2 mb-2 w-full border border-gray-200'
              />
              <select
                {...register('profiency')}
                className='rounded-lg px-4 py-2 mb-2 w-full border border-gray-200'>
                <option value='NONE'>Pilih Tingkat Keahlian</option>
                <option value='BEGINNER'>Beginner</option>
                <option value='INTERMEDIATE'>Intermediate</option>
                <option value='ADVANCE'>Advance</option>
              </select>
              <textarea
                {...register('description', { required: true })}
                type='description'
                name='description'
                id='description'
                className='rounded-lg px-4 py-2 mt-2 w-full border border-gray-200'
                placeholder='Description'></textarea>
              <span
                className={`p-2 bg-red-200 rounded-lg mt-3 mb-3 text-red-400 ${
                  errors.username ? 'block' : 'hidden'
                }`}>
                {(errors.username && 'Username is required') ||
                  (errors.password && 'Password is required') ||
                  (errors.password2 && 'Password is not match') ||
                  (errors.email && 'Email is required') ||
                  (errors.role && 'Role is required')}
              </span>
              <button
                type='submit'
                className='bg-[#50A4FE] text-white rounded-lg px-8 py-2 self-start mt-5'>
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
