import React from 'react'
import Navbar from '../parts/Navbar'
import Button from '../components/Button'

export default function MyOrder() {
  return (
    <>     
      <Navbar />
      <div className='m-10'>
        <h1 className='text-3xl font-semibold text-center mb-10'>My Order</h1>
        <table className="w-3/4 mx-auto border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date of Transaction</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Tutoring Date</th>
            <th className="py-2 px-4 border-b">GMeet Link</th>
          </tr>
        </thead>
        <tbody>       
            <tr className='text-center'>
              <td className="py-2 px-4 border-b">s</td>
              <td className="py-2 px-4 border-b">s</td>
              <td className="py-2 px-4 border-b">s</td>
              <td className="py-2 px-4 border-b">
                <Button type={'link'} href='' target="_blank" >
                  sffff
                </Button>
              </td>
            </tr>
            
        </tbody>
      </table>
      </div>
    </>
  )
}
