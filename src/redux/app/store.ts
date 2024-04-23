import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import { authReducer } from "../features/authSlice";
import { userManagementReducer } from "../features/userManagementSlice";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["auth"],
  // blacklist: ["userManagement"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  userManagement: userManagementReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
