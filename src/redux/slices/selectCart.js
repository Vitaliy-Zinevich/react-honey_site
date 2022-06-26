export const selectCartItemById = (state, id) => state.cart.items.find((obj) => obj.id === id);
