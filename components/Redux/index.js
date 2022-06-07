import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "./Basket/reducer";

import gamesReducer from "./Games/reducer";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        game: gamesReducer,
    },
});