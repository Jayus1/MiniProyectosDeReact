import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../Hooks/useCart";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button omClicl={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckbosId = useId();
  const [cart, clearCart] = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckbosId}>
        <CartIcon />
      </label>

      <input type="checkbox" id={cartCheckbosId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => {
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />;
          })}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
