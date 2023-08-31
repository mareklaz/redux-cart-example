import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addToCart: (state, action) => {
			const productIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			if (productIndex === -1) {
				state.cartItems.push({ ...action.payload, quantity: 1 });
			} else {
				// Incrementar la cantidad si el producto ya existe en el carrito
				state.cartItems[productIndex].quantity += 1;
			}
		},
		incrementQuantity: (state, action) => {
			const productIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			state.cartItems[productIndex].quantity += 1;
		},
		reduceQuantity: (state, action) => {
			const productIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			state.cartItems[productIndex].quantity -= 1;
			if (state.cartItems[productIndex].quantity <= 0) {
				state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
			}
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
		},
	},
});

export const { addToCart, removeFromCart, reduceQuantity, incrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
