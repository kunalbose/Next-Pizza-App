import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            console.log(action);
            state.products.push(action.payload);
            state.quantity += 1; //needs improvement
            state.total += action.payload.price * action.payload.quantity; 
        },
        removeProduct: (state, action) => {
            // console.log(action);
            const index = state.products.findIndex(product => product._id === action.payload.product._id && product.price === action.payload.product.price && product.quantity === action.payload.product.quantity);
            if(index >= 0){
                state.products = [...state.products.slice(0, index), ...state.products.slice(index + 1)];
                state.quantity -= 1;
                state.total -= action.payload.product.price * action.payload.product.quantity;
            }else{
                console.log(`cannot remove product with id ${action.payload.product._id}`);
            }
        },
        reset: (state) =>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
});

export const {addProduct, removeProduct, reset} = cartSlice.actions;
export default cartSlice.reducer;