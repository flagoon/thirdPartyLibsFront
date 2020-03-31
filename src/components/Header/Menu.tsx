import React from 'react';
import styled from 'styled-components';
import { Input } from '@common/';
import PlusContainer from './PlusContainer.sc';

const Menu = (): JSX.Element => {
  return (
    <MenuContainer>
      <PlusContainer>+</PlusContainer>

      <Input id="filter" name="filter" placeholder="filter..." />
    </MenuContainer>
  );
};
export default Menu;

const MenuContainer = styled.div`
  display: flex;
`;
