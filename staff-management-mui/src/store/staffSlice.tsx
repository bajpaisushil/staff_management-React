import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Staff } from '../types';
import axios from 'axios';

interface StaffState {
  staff: Staff[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: StaffState = {
  staff: [],
  status: 'idle',
  error: null,
};

// Thunk to fetch staff from API
export const fetchStaff = createAsyncThunk('staff/fetchStaff', async () => {
  const response = await axios.get('http://localhost:5000/api/staff');
  return response.data;
});

// Thunk to add a new staff member
export const addNewStaff = createAsyncThunk(
  'staff/addNewStaff',
  async (newStaff: Staff) => {
    const response = await axios.post('http://localhost:5000/api/staff', newStaff);
    return response.data; // return the added staff data
  }
);

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    updateStaff: (state, action: PayloadAction<Staff>) => {
      const index = state.staff.findIndex(
        (staff) => staff.id === action.payload.id
      );
      if (index !== -1) {
        state.staff[index] = action.payload;
      }
    },
    deleteStaff: (state, action: PayloadAction<string>) => {
      state.staff = state.staff.filter(
        (staff) => staff?._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaff.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStaff.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.staff = action.payload;
      })
      .addCase(fetchStaff.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch staff';
      })
      .addCase(addNewStaff.fulfilled, (state, action: PayloadAction<Staff>) => {
        state.staff.push(action.payload);
      })
      .addCase(addNewStaff.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to add staff';
      });
  },
});

export const { updateStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;
