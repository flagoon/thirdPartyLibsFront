import React from 'react';
import styled from 'styled-components';
import { Input } from '@common/';

const Menu = (): JSX.Element => {
  return (
    <MenuContainer>
      <div
        style={{
          border: '1px solid red',
          textAlign: 'center',
          marginRight: '1rem',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        +
      </div>

      <Input color="filter" />
    </MenuContainer>
  );
};
export default Menu;

const MenuContainer = styled.div`
  display: flex;
`;
