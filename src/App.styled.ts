import styled from 'styled-components';
import { Container } from '@material-ui/core';

/*
limitation of material-ui, if we are using spacing in grid, then Container
should have a padding to counter negative margin. Each value of spacing
is equal 8px.
 */
export const AppContainer = styled(Container)`
  padding-top: 16px;
`;

export const ButtonContainer = styled.div`
  position: sticky;
  bottom: 2rem;
`;
