import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import movieReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
