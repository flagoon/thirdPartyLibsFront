import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import styled from 'styled-components';

interface Props {
  onVisibilityChange: () => void;
}

const Menu = ({ onVisibilityChange }: Props): JSX.Element => {
  return (
    <Grid container item spacing={2} alignItems={'center'}>
      <AddIcon onClick={onVisibilityChange} />
      <Input id="filter" name="filter" placeholder="filter..." />
    </Grid>
  );
};

const AddIcon = styled(AddCircleOutline)`
  margin-right: 0.5rem;
  cursor: pointer;
`;

export default Menu;
