import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface doorState {
  value: string;
  text: string;
  code: number;
  disable: boolean;
  checked: boolean;
  color: string;
}

const initialState: doorState = {
  value: "",
  text: "",
  code: 1337,
  disable: false,
  checked: false,
  color: ""
};

export const doorSlice = createSlice({
  name: "door",
  initialState,
  reducers: {
    addValue: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
      console.log(state.value);
    },
    slice: (state) => {
      if (state.value.length > 0) {
        state.value = state.value.slice(0, -1);
      }
    },
    disableButtons: (state, action: PayloadAction<boolean>) => {
      state.disable = action.payload;
    },
    checkCode: (state) => {
      const number = parseInt(state.value);
      if (number === state.code) {
        state.text = "Доступ разрешен!";
        state.color = "bg-success";
      } else {
        state.text = "Доступ запрещен!";
        state.color = "bg-danger";
      }
      state.checked = true;
    },
  },
});

export const doorReducer = doorSlice.reducer;

export const { addValue, slice, disableButtons, checkCode } = doorSlice.actions;
