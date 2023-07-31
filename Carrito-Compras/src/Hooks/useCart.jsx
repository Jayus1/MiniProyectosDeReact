import { useContext } from "react";
import { CartContext } from "../Context/Cart";

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be in a cart provider");
  }

  return context;
}
