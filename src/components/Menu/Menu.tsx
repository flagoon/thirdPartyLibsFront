import { Grid } from '@material-ui/core';
import React from 'react';
import Filter from './Filter/Filter';

function Menu(): JSX.Element {
  return (
    <Grid container item direction="row" alignItems="center">
      <Filter />
    </Grid>
  );
}

export default Menu;
