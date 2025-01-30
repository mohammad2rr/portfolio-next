import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// Create the slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
