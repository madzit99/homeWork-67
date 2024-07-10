import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface doorState {
  value: string;
  text: string;
  code: number;
}

const initialState: doorState = {
  value: "",
  text: "",
  code: 1337,
};

export const doorSlice = createSlice({
  name: "door",
  initialState,
  reducers: {
    addValue: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
      console.log(state.value);
    },
  },
});

export const doorReducer = doorSlice.reducer;

export const { addValue } = doorSlice.actions;
