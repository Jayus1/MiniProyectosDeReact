import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.FiltersProvider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.FiltersProvider>
  );
}
