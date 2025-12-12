import { configureStore } from "@reduxjs/toolkit";
import networksReducer from "./networks/networksSlice";

export const store = configureStore({
  reducer: {
    networks: networksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
