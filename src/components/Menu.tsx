import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import FilterContext from '../Providers/Filter/FilterContext';

export const Menu = (): JSX.Element => {
  const { filterValue, changeFilterValue } = useContext(FilterContext);
  return (
    <Grid container item direction="row" alignItems="center">
      <input
        placeholder="filter..."
        onChange={changeFilterValue}
        value={filterValue}
      />
      {filterValue !== '' ? <div onClick={changeFilterValue}>x</div> : null}
    </Grid>
  );
};
