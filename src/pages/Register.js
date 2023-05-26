import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RegisterProvider } from '../App';

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { setId } = React.useContext(RegisterProvider);
  const navigate = useNavigate();

  const _register = async data => {
    await axios
      .post('http://localhost:8000/auth/register', { ...data })
      .then(res => {
        setId(res.data.id);
        if (data.role === 'MENTOR') {
          navigate('/register/mentor');
        } else {
          navigate('../../login');
        }
      });
  };
  return (
    <>
      <div className='flex'>
        <div className=''>
          <img
            src='loginSide.png'
            alt='loginSide'
            className='h-screen object-cover w-[400px]'
          />
        </div>
        <form
          onSubmit={handleSubmit(_register)}
          className='w-1/3 mx-auto rounded-lg grid content-center'>
          <div className='flex flex-col gap-y-5'>
            <p className='text-2xl font-medium mt-5'>Daftar Akun Baru</p>
            <div className='mt-5 flex flex-col'>
              <input
                {...register('username', { required: true })}
                type='username'
                name='username'
                id='username'
                placeholder='Username'
                className='rounded-lg px-4 py-2 mb-2 w-full border border-gray-200'
              />
              <input
                {...register('name', { required: true })}
                type='name'
                name='name'
                id='name'
                placeholder='Name'
                className='rounded-lg px-4 py-2 mb-2 w-full border border-gray-200'
              />
              <input
                {...register('email', { required: true })}
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='rounded-lg px-4 py-2 mb-2 w-full border border-gray-200'
              />
              <select
                {...register('role')}
                className='rounded-lg px-4 py-2 mb-2 w-full border border-gray-200'>
                <option>Pilih Role</option>
                <option value='MENTEE'>Mentee</option>
                <option value='MENTOR'>Mentor</option>
              </select>
              <input
                {...register('password', { required: true })}
                type='password'
                name='password'
                id='password'
                placeholder='password'
                className='rounded-lg px-4 py-2 mt-2 w-full border border-gray-200'
              />
              <input
                {...register('password2', {
                  required: true,
                  validate: {
                    passwordValidaton: val => {
                      if (watch('password') !== val) {
                        return 'Your password not macth';
                      }
                    },
                  },
                })}
                type='password'
                name='password2'
                id='password2'
                placeholder='Confirm Password'
                className='rounded-lg px-4 py-2 mt-2 w-full border border-gray-200'
              />
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
