import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  subscriptions: [],
  activeUsers: [],
  reports: [],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setDashboardData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
