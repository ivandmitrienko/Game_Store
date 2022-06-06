import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'Basket',
    initialState:{
        itemsInBasket: []
    },
    reducers:{
        setItemInBasket: (state, action)=>{
            state.itemsInBasket.push(action.payload)
        },
        deleteItemFromBasket:(state, action)=>{
            state.itemsInBasket = state.itemsInBasket.filter(game => game.id !== action.payload)
        }
    }

    
});

export const { setItemInBasket, deleteItemFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
