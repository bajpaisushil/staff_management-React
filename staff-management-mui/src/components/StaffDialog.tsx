import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { addNewStaff } from '../store/staffSlice';
import { AppDispatch } from '../store/store';

interface AddStaffProps {
  open: boolean;
  onClose: () => void;
}

const AddStaffDialog: React.FC<AddStaffProps> = ({ open, onClose }) => {
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState('');
  const [storeId, setStoreId] = useState('');

  const handleSubmit = () => {
    // Generate a unique ID (replace with your ID generation logic)
    const newId = Math.floor(Math.random() * 10000);

    dispatch(
      addNewStaff({
        id: newId,
        name,
        mobileNumber,
        role,
        storeId: parseInt(storeId), // Convert storeId to number
      })
    );
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Staff</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="mobileNumber"
          label="Mobile Number"
          type="text"
          fullWidth
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Role"
          >
            <MenuItem value="store admin">Store Admin</MenuItem>
            <MenuItem value="store operator">Store Operator</MenuItem>
            <MenuItem value="sales purchase operator">Sales Purchase Operator</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel id="store-label">Store</InputLabel>
          <Select
            labelId="store-label"
            id="store"
            value={storeId}
            onChange={(e) => setStoreId(e.target.value)}
            label="Store"
          >
            <MenuItem value={1}>Store A</MenuItem>
            <MenuItem value={2}>Store B</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddStaffDialog;
