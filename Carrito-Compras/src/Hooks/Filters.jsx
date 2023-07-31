import { useContext } from "react";
import { FiltersContext } from "./Context/Filters";

export function useFilter() {
  const { filters, setFilters } = useContext(FiltersContext);

  const productFilter = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (product.category === filters.category || filters.category === "all")
      );
    });
  };
  return { filters, productFilter, setFilters };
}
