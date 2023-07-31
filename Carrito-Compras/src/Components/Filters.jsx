import "./Filters.css";
import { useFilter } from "../Hooks/Filters";

export function Filters() {
  const [minPrice, setMinPrice] = useState(0);
  const categoryFilterId = useId();
  const minPriceId = useId();
  const { filters, setFilters } = useFilter();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <dic>
        <label htmlFor={minPriceId}>Price</label>
        <input
          type="range"
          id={minPriceId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </dic>

      <div>
        <label htmlFor={categoryFilterId}>Categorias</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphone">Celulares</option>
        </select>
      </div>
    </section>
  );
}
