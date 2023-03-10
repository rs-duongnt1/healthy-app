import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { mealApi } from "@/services/meal";

const rootReducer = combineReducers({
  [mealApi.reducerPath]: mealApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealApi.middleware),
});
