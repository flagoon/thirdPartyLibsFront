import React, { useContext } from 'react';
import { Input, InputLabel } from '@material-ui/core';
import FilterContext from '@providers/Filter/FilterContext';
import styled from 'styled-components';

const Menu = (): JSX.Element => {
  const { filterValue, changeFilterValue } = useContext(FilterContext);
  return (
    <>
      <Input
        placeholder="filter..."
        onChange={changeFilterValue}
        value={filterValue}
      />
      {filterValue !== '' ? (
        <ClearFilter onClick={changeFilterValue}>x</ClearFilter>
      ) : null}
    </>
  );
};

export default Menu;

const ClearFilter = styled(InputLabel)`
  z-index: 100;
  margin-left: -1rem;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
