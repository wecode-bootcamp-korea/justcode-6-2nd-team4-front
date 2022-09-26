import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    options: [],
  },
  reducers: {
    setOptions: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { setOptions } = optionsSlice.actions;
export default optionsSlice.reducer;
