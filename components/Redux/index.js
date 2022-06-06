import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "./Basket/reducer";

export const store = configureStore({
    reducer: {
        basket: basketReducer
    }
})