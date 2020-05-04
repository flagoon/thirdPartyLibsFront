import React, { useState, ReactNode, ChangeEvent, MouseEvent } from 'react';
import FilterContext, { InitialFilterValue, FilterType } from './FilterContext';

const isClick = (
  event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
): event is ChangeEvent<HTMLInputElement> =>
  (event as ChangeEvent<HTMLInputElement>).currentTarget.value !== undefined;

const FilterProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [filterValue, setFilter] = useState<FilterType>(InitialFilterValue);

  const changeFilterValue = (
    e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
  ): void => {
    if (isClick(e)) {
      setFilter(e.currentTarget.value);
    } else {
      setFilter('');
    }
  };

  return (
    <FilterContext.Provider value={{ filterValue, changeFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
