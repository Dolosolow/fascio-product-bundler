type CartReducer = Grupie.Reducer<Grupie.GrupCart, Grupie.ActionCreator<Grupie.cartConstants>>;

const cartReducer: CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let updatedItems: Grupie.CartItem[] = state.items;
      const existingItemIdx = updatedItems.findIndex((item) => item.id === action.payload.id);
      const existingItem = state.items[existingItemIdx];

      if (existingItem) {
        updatedItems[existingItemIdx] = {
          ...existingItem,
          quantity: action.payload.quantity,
        };
      } else {
        updatedItems = [...updatedItems, action.payload];
      }

      console.log(updatedItems[existingItemIdx]);

      return { ...state, items: updatedItems };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
    case "RESET_CART":
      return { ...state, items: [], totalPrice: 0 };
    default:
      return state;
  }
};

export default cartReducer;
