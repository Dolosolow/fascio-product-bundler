import { Product } from "src/types/schema";

type cartConstants = "ADD_ITEM" | "REMOVE_ITEM" | "RESET_CART";

type GrupCart = {
  id: string | null;
  items: CartItem[];
  totalPrice: number;
};

type Reducer<S, A> = (state: S, Action: A) => S;

type ActionCreator<C> = {
  type: C;
  payload?: any;
};

interface CartContext {
  state: GrupCart;
  dispatch: React.Dispatch<ActionCreator<cartConstants>>;
}

interface CartItem extends Product {
  sectionId: number;
  quantity: number;
}

export as namespace Grupie;
