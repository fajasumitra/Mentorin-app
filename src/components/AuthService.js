import * as React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { AuthProvider, UserProvider } from '../App';
import axios from 'axios';

export const AuthWrapper = () => {
  const navigate = useNavigate();
  const { token, setToken } = React.useContext(AuthProvider);
  const { setCurrentUser } = React.useContext(UserProvider);

  // React.useEffect(() => {
  //   try {
  //     var _token = localStorage.getItem('token');
  //     if (_token !== null) {
  //       console.log('rendered');
  //       setToken({
  //         token: _token,
  //         refreshToken: localStorage.getItem('refreshToken'),
  //       });
  //       _currentUser(_token);
  //     } else {
  //       if (token.token === null) {
  //         navigate('../../login');
  //       }
  //       _currentUser(_token);
  //     }
  //   } catch (e) {}
  // }, []);

  // const _currentUser = async token_ => {
  //   await axios
  //     .get('http://localhost:8000/auth/current_user', {
  //       headers: {
  //         Authorization: `Bearer ${token_}`,
  //       },
  //     })
  //     .then(res => {
  //       setCurrentUser({
  //         ...res.data,
  //       });
  //     })
  //     .catch(err => {});
  // };

  return (
    <>
      <Outlet />
    </>
  );
};
