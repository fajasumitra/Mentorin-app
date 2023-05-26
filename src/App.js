import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import DetailedMentor from './pages/DetailedMentor';
import Home from './pages/Home';
import Login from './pages/Login';
import Mentor from './pages/Mentor';
import UnderConstruction from './pages/UnderConstruction';
import MyOrder from './pages/MyOrder';
import { AuthWrapper } from './components/AuthService';
import Register from './pages/Register';
import MentorRegister from './pages/MentorRegister';

export const AuthProvider = React.createContext({});
export const UserProvider = React.createContext({});
export const RegisterProvider = React.createContext({});

function App() {
  const [token, setToken] = React.useState({
    token: null,
    refreshToken: null,
  });
  const [id, setId] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  return (
    <>
      <AuthProvider.Provider value={{ token, setToken }}>
        <UserProvider.Provider value={{ currentUser, setCurrentUser }}>
          <Router>
            <Routes>
              <Route path='/' element={<AuthWrapper />}>
                <Route path='login' element={<Login />} />
                <Route
                  path='register'
                  element={
                    <RegisterProvider.Provider value={{ id, setId }}>
                      <Outlet />
                    </RegisterProvider.Provider>
                  }>
                  <Route path='' element={<Register />} />
                  <Route path='mentor' element={<MentorRegister />} />
                </Route>
                <Route path='' element={<Home />} />
                <Route path='myorder' element={<MyOrder />} />
                <Route path='mentor' element={<Mentor />} />
                <Route path='mentor/:id' element={<DetailedMentor />} />
                <Route path='error' element={<UnderConstruction />} />
              </Route>
            </Routes>
          </Router>
        </UserProvider.Provider>
      </AuthProvider.Provider>
    </>
  );
}

export default App;
