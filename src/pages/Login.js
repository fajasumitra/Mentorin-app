import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../App';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { token, setToken } = React.useContext(AuthProvider);
  const navigate = useNavigate();

  const _login = async data => {
    try {
      await axios
        .post('http://localhost:8000/auth/login', {
          ...data,
        })
        .then(res => {
          var response = res.data;
          setToken({
            token: response.data.access_token,
            refreshToken: response.data.refresh_token,
          });
          localStorage.setItem('token', response.data.access_token);
          localStorage.setItem('refreshToken', response.data.refresh_token);
          navigate('../../');
        });
    } catch (e) {
      console.log(e);
    }
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
          onSubmit={handleSubmit(_login)}
          className='w-1/3 mx-auto rounded-lg grid content-center'>
          <div className='flex flex-col gap-y-5'>
            <p className='text-2xl font-medium mt-5'>Masuk ke akun</p>
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
                {...register('password', { required: true })}
                type='password'
                name='password'
                id='password'
                placeholder='password'
                className='rounded-lg px-4 py-2 mt-2 w-full border border-gray-200'
              />
              <span
                className={`p-2 bg-red-200 rounded-lg mt-3 mb-3 text-red-400 ${
                  errors.username ? 'block' : 'hidden'
                }`}>
                {(errors.username && 'Username is required') ||
                  (errors.password && 'Password is required')}
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
