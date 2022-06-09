import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import storage from 'redux-persist/lib/storage';

import basketReducer from "./Basket/reducer";

import gamesReducer from "./Games/reducer";

const rootReducer = combineReducers({
    basket: basketReducer,
    game: gamesReducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}); 

export const persistor = persistStore(store);





// export const store = configureStore({
//     reducer: {
//         basket: basketReducer,
//         game: gamesReducer,
//     },
// });