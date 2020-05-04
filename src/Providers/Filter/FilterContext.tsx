import { createContext, ChangeEvent, MouseEvent } from 'react';

export const InitialFilterValue = '';

export type FilterType = string;

export interface FilterContextInterface {
  changeFilterValue: (
    e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
  ) => void;
  filterValue: FilterType;
}

const FilterContext = createContext<FilterContextInterface>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeFilterValue: () => {},
  filterValue: InitialFilterValue,
});

export default FilterContext;
