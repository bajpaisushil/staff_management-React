import React from 'react'

const data=['Party', 'All Entries & Bill', 'Stock', 'Item', 'Reports', 'Manage Staff', 'Setting', 'Paid Plan']

function Sidebar() {

  return (
    <div className='flex flex-col bg-black text-white min-h-[100vh] p-4'>
        {
            data?.map((item)=>(
                <div className='text-lg m-4'>
                    {item}
                </div>
            ))
        }
    </div>
  )
}

export default Sidebar