import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/authSlice';
import { employeesReducer } from './employees/employeesSlice';
import { servicesReducer } from './services/servicesSlice';
import { ordersReducer } from './orders/ordersSlice';
import { reportsReducer } from './reporting/reportingSlice';
import { galleryReducer } from './gallery/gallerySlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    employees: employeesReducer,
    services: servicesReducer,
    orders: ordersReducer,
    reports: reportsReducer,
    gallery: galleryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
