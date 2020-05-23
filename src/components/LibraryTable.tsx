import React, { useContext } from 'react';
import FilterContext from '@providers/Filter/FilterContext';

export const LibraryTable = (): JSX.Element => {
  const { filterValue } = useContext(FilterContext);
  return <div>{filterValue}</div>;
};
