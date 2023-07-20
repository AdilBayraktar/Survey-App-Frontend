import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    currentStep: 1,
    answer1: { questionText: "", answer: "" },
    answer2: { questionText: "", answer: "" },
    answer3: { questionText: "", answer: "" },
  },
  reducers: {
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
    setAnswer1(state, action) {
      state.answer1 = action.payload;
    },
    setAnswer2(state, action) {
      state.answer2 = action.payload;
    },
    setAnswer3(state, action) {
      state.answer3 = action.payload;
    },
    insertData(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const formReducer = formSlice.reducer;
export const {
  setCurrentStep,
  setAnswer1,
  setAnswer2,
  setAnswer3,
  insertData,
} = formSlice.actions;
