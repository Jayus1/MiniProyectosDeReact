import "./Products.css";
import { AddCartIcon } from "./Icons.jsx";
import { useCart } from "../Hooks/useCart";

export function Products({ products }) {
  const [addToCart] = useCart();

  const checkProductInCart = () => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const iisProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: iisProductInCart ? "red" : "blue" }}
                  onClick={() => {
                    iisProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {iisProductInCart ? <RemoveFromCartIcon /> : <AddCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
