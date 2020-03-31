import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

export const Backdrop = styled(Container)`
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  justify-content: center;
  margin: -16px -24px;
`;

export const ModalContainer = styled(Grid)`
  background-color: white;
  border: 5px solid black;
  margin: 5rem auto;
  width: 600px;
  height: 80%;
`;

export const ContainerTitle = styled(Grid)`
  border-bottom: 3px solid black;
`;

export const ContainerBody = styled(Grid)`
  max-height: 100%;
  flex-grow: 1;
  border-bottom: 3px solid black;
`;

export const ContainerFooter = styled(Grid)`
  background-color: white;
`;
