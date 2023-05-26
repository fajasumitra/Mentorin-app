import React from 'react';
import Navbar from '../parts/Navbar';
import Button from '../components/Button';
import axios from 'axios';
import { AuthProvider, UserProvider } from '../App';

export default function MyOrder() {
  const [data, setData] = React.useState([]);
  const { currentUser } = React.useContext(UserProvider);
  const { token } = React.useContext(AuthProvider);

  React.useEffect(() => {
    _getOrder(token.token);
  }, [token.token]);

  const _getOrder = async _token => {
    await axios
      .get(`http://localhost:8000/agreement/list/user/${currentUser?.id}`, {
        headers: {
          Authorization: `Bearer ${_token}`,
        },
      })
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <Navbar />
      <div className='m-10'>
        <h1 className='text-3xl font-semibold text-center mb-10'>My Order</h1>
        <table className='w-3/4 mx-auto border-collapse'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>Date of Transaction</th>
              <th className='py-2 px-4 border-b'>Name</th>
              <th className='py-2 px-4 border-b'>Tutoring Date</th>
              <th className='py-2 px-4 border-b'>GMeet Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className='text-center' key={index}>
                <td className='py-2 px-4 border-b'>{item.created_at}</td>
                <td className='py-2 px-4 border-b'>
                  {currentUser?.profile?.name}
                </td>
                <td className='py-2 px-4 border-b'>{item.time_suggestion}</td>
                <td className='py-2 px-4 border-b'>
                  <Button type={'link'} href='' target='_blank'>
                    ...
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
