import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { authReducer } from "./slices/authSlice";
import { dataReducer } from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer,
    data: dataReducer,
  },
});

export default store;
