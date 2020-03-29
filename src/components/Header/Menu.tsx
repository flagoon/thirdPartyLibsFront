import React from 'react';
import styled from 'styled-components';

interface Button {
  color?: string;
}

const Menu = (): JSX.Element => {
  return (
    <div>
      <MenuContainer>
        <MenuButton color="red" onClick={(): void => console.log('Clicked1')}>
          +
        </MenuButton>
        <MenuButton color="blue" onClick={(): void => console.log('Clicked2')}>
          Add multiple
        </MenuButton>
        <MenuButton>
          <label htmlFor="filter">
            Filter:{' '}
            <input
              name="filter"
              id="filter"
              data-test="filter"
              placeholder="filter..."
              onChange={(e): void => console.log(e.target)}
            />
          </label>
        </MenuButton>
      </MenuContainer>
    </div>
  );
};
export default Menu;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const MenuButton = styled.li`
  color: ${(props: Button): string => (props.color ? props.color : 'black')};
  list-style-type: none;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 1rem;
    padding: 0.5rem;
  }
`;
