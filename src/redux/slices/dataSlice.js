import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    isLoadingData: true,
    isDataCreated: false,
    isLoadingCreate: false,
    isError: false,
    dataList: [],
    responseList: [],
    randomData: [],
    singleData: null,
  },

  reducers: {
    setDataList(state, action) {
      state.isLoadingData = false;
      state.dataList = action.payload;
    },
    setResponseList(state, action) {
      state.isLoadingData = false;
      state.responseList = action.payload;
    },
    setRandomData(state, action) {
      state.randomData = action.payload;
    },
    setLoading(state) {
      state.isLoadingCreate = true;
      state.isLoadingData = true;
    },
    clearLoading(state) {
      state.isLoadingCreate = false;
      state.isLoadingData = false;
    },
    setisDataCreated(state, action) {
      state.isDataCreated = true;
      state.isLoadingCreate = false;
    },
    clearisDataCreated(state, action) {
      state.isDataCreated = false;
    },
    setSingleData(state, action) {
      state.isLoadingData = false;
      state.singleData = action.payload;
    },
    deletaQuestion(state, action) {
      state.dataList = state.dataList.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

const dataReducer = dataSlice.reducer;
const dataActions = dataSlice.actions;

export { dataReducer, dataActions };
