import React from 'react';
import MentorDesc from '../parts/detailedMentor/MentorDesc';
import ProfileMentor from '../parts/detailedMentor/ProfileMentor';
import Footer from '../parts/Footer';
import Navbar from '../parts/Navbar';
import { withRouter } from '../components/WithRouter';
import axios from 'axios';
import { AuthProvider } from '../App';

function DetailedMentor({ params }) {
  const { token } = React.useContext(AuthProvider);
  const [mentor, setMentor] = React.useState({});
  React.useEffect(() => {
    _getMentor();
  }, []);

  const _getMentor = () => {
    axios.get(`http://localhost:8000/user/y/${params.id}`).then(res => {
      setMentor(res.data);
    });
  };
  return (
    <>
      <Navbar />
      <div className='flex mt-20'>
        <div className='basis-1/2'>
          <ProfileMentor data={mentor} />
        </div>
        <div className='basis-1/2 mt-5'>
          <MentorDesc data={mentor} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withRouter(DetailedMentor);
