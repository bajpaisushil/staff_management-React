import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { Staff } from '../types';
import { fetchStaff, deleteStaff } from '../store/staffSlice';
import { AppDispatch } from '../store/store';

const StaffList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const staff = useSelector((state: any) => state.staff.staff);
  const status = useSelector((state: any) => state.staff.status);

  // Fetch the staff data when the component mounts
  console.log('staffstaff=', staff);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStaff());
    }
  }, [dispatch, status]);

  const handleDelete = (staffId: string) => {
    dispatch(deleteStaff(staffId));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="staff table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Mobile Number</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Store</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.map((row: Staff) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.mobileNumber}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.storeId}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(row._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StaffList;
