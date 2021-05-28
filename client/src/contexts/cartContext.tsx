import { createContext } from "react";

export const initialCartState: Grupie.GrupCart = {
  id: null,
  items: [],
  totalPrice: 0,
};

export default createContext<Grupie.CartContext>({
  state: initialCartState,
  dispatch: () => {},
});
