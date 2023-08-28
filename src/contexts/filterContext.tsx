import { type ReactNode, createContext, useState } from "react";

type FilterContextType = {
  filters: string[];
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  resetFilters: () => void;
};

export const FilterContext = createContext<FilterContextType>({
  filters: [],
  addFilter: () => {
    return;
  },
  removeFilter: () => {
    return;
  },
  resetFilters: () => {
    return;
  },
});

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Set<string>>(new Set());

  const addFilter = (filter: string) => {
    setFilters((prev) => new Set([...prev, filter]));
  };

  const removeFilter = (filter: string) => {
    setFilters((prev) => {
      const newFilters = new Set(prev);
      newFilters.delete(filter);
      return newFilters;
    });
  };

  const resetFilters = () => {
    setFilters(new Set());
  };

  const arrayFilters = Array.from(filters);

  return (
    <FilterContext.Provider
      value={{ filters: arrayFilters, addFilter, removeFilter, resetFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};
