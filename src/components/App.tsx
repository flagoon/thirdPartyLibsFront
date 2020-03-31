import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { StylesProvider } from '@material-ui/core/styles';

import { Menu } from './Header';
import { GlobalModal } from './GlobalModal/';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const App = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const visibilityChange = (): void => {
    setIsVisible(true);
  };

  const onModalClose = (): void => {
    setIsVisible(false);
  };

  return (
    /*
    This is a solution to use styled-components together with material-ui. Usually material-ui has higher
    specificity, and wrapping whole app in StyledProvider component will make styled components override material-ui
    styles.
    */
    <StylesProvider injectFirst>
      <AppContainer maxWidth="xl">
        <GlobalStyle />
        {isVisible ? <GlobalModal onModalClose={onModalClose} /> : null}

        <Grid container direction="column" spacing={2}>
          <Menu onVisibilityChange={visibilityChange} />
          <Grid item spacing={4}>
            <div>1te</div>
          </Grid>
        </Grid>
      </AppContainer>
    </StylesProvider>
  );
};

/*
limitation of material-ui, if we are using spacing in grid, then Container
should have a padding to counter negative margin. Each value of spacing
is equal 8px.
 */
const AppContainer = styled(Container)`
  padding-top: 16px;
`;

export default hot(App);
