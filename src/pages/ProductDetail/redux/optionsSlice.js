import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    options: [],
    optionsSelected: [],
  },
  reducers: {
    setOptions: (state, action) => {
      state.options = action.payload;
    },
    addOptionsSelected: (state, action) => {
      state.optionsSelected = [...state.optionsSelected, action.payload];
    },
    removeOptionsSelected: (state, action) => {
      delete state.optionsSelected[action.payload];
    },
    increaseOptionsSelectedCount: (state, action) => {
      state.optionsSelected[action.payload].count++;
    },
    decreaseOptionsSelectedCount: (state, action) => {
      state.optionsSelected[action.payload].count !== 1
        ? state.optionsSelected[action.payload].count--
        : (state.optionsSelected[action.payload].count = 1);
    },
  },
});

export const {
  setOptions,
  addOptionsSelected,
  removeOptionsSelected,
  increaseOptionsSelectedCount,
  decreaseOptionsSelectedCount,
} = optionsSlice.actions;
export default optionsSlice.reducer;
