import React, { useState, ReactNode, ChangeEvent, MouseEvent } from 'react';
import FilterContext, { InitialFilterValue, FilterType } from './FilterContext';

const isClick = (
  event:
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | MouseEvent<HTMLLabelElement>,
): event is ChangeEvent<HTMLInputElement | HTMLTextAreaElement> =>
  (event as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>).currentTarget
    .value !== undefined;

const FilterProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [filterValue, setFilter] = useState<FilterType>(InitialFilterValue);

  const changeFilterValue = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | MouseEvent<HTMLLabelElement>,
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
