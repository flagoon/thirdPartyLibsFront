import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

import { Menu } from './Header';

const App = (): JSX.Element => {
  return (
    <MainContainer>
      <header>
        <nav>
          <Menu />
        </nav>
      </header>
      <section>Main</section>
      <footer>Footer</footer>
    </MainContainer>
  );
};

export default hot(App);

export const MainContainer = styled.div`
  margin: 1rem 3rem;
`;
