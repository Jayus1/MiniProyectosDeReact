import { useCallback, useContext } from "react";
import { Products } from "./Components/Product";
import { useFilter } from "./Hooks/Filters";
import { Cart } from "./Components/Cart";
import { CartProvider } from "./Context/Cart";

function App() {
  const [products] = useState(InitialComponent);
  const [filters, productFilter] = useFilter();

  const filtersProducts = productFilter(products);

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filtersProducts} />
        //Rellenar el footer del github
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
    </>
  );
}

export default App;
