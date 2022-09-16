import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementAction: (state) => {
      state.count = state.count + 1;
    },
    decrementAction: (state) => {
      state.count = state.count > 0 ? state.count - 1 : state.count;
    },
    resetAction: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementAction, decrementAction, resetAction } =
  counterSlice.actions;

export default counterSlice.reducer;
