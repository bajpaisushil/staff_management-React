import { useState } from 'react'
import ListTabs from './components/ListTabs'
import Sidebar from './components/Sidebar'
import AddStaffDialog from './components/StaffDialog'
import { Button } from '@mui/material';

function App() {
  const [open, setOpen]=useState(false);

  return (
    <>
      <div className='flex'>
        <div className=''>
          <Sidebar />
        </div>
        <div className='w-full'>
          <div className='flex justify-between w-full'>
          <h1 className='text-xl font-bold m-4 border-b p-2'>Manage Staff</h1>
          <Button onClick={()=> setOpen(true)}>Add Staff</Button>
          <AddStaffDialog open={open} onClose={()=> setOpen((prev)=> !prev)} />
          </div>
        <ListTabs />
        </div>
      </div>
    </>
  )
}

export default App
