import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "../slices/authApi";
import userReducer from "../slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user", // The key under which your application's state will be stored in localStorage
  storage, // The storage engine, localStorage in this case
  whitelist: ["userInfo"],
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const reduxStore = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    // persistedUserReducer를 사용하여 `user` 슬라이스만 지속적으로 처리
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist의 액션 타입들에 대한 serializableCheck 미들웨어를 무시
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }).concat(authApi.middleware),
});

export const persistor = persistStore(reduxStore);

export type RootState = ReturnType<typeof reduxStore.getState>;
