import { hot } from 'react-hot-loader/root';
import React from 'react';
import { StylesProvider } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';
import { AppContainer } from './App.styled';
import FilterProvider from './providers/Filter/FilterContextProvider';
import { Menu } from './components/Menu';
import { ButtonContainers } from './components/ButtonContainers';
import { LibraryTable } from './components/LibraryTable';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const App = (): JSX.Element => {
  return (
    /*
    This is a solution to use styled-components together with material-ui. Usually material-ui has higher
    specificity, and wrapping whole app in StyledProvider component will make styled components override material-ui
    styles.
    */
    <StylesProvider injectFirst>
      <FilterProvider>
        <AppContainer maxWidth="xl">
          <GlobalStyle />
          <Menu />
          <LibraryTable />
          <ButtonContainers />
        </AppContainer>
      </FilterProvider>
    </StylesProvider>
  );
};

export default hot(App);
