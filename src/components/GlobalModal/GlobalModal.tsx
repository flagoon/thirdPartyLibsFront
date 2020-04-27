import React, { useRef, MouseEvent } from 'react';
import Button from '@material-ui/core/Button';
import {
  ModalContainer,
  Backdrop,
  ContainerBody,
  ContainerFooter,
  ContainerTitle,
} from './GlobalModal.styled';

interface Props {
  onModalClose: () => void;
}

const Modal = ({ onModalClose }: Props): JSX.Element => {
  const backdropRef = useRef<HTMLDivElement>(null);

  const onBackdropClick = (event: MouseEvent): void => {
    const isModalClicked =
      backdropRef &&
      backdropRef.current &&
      backdropRef.current.contains(event.target as Node);
    if (!isModalClicked) {
      onModalClose();
    }
  };

  return (
    <Backdrop maxWidth="xl" onClick={onBackdropClick} data-testid="backdrop">
      <ModalContainer
        direction="column"
        container
        spacing={2}
        ref={backdropRef}
      >
        <ContainerTitle item data-testid="containerTitle">
          <div>Title</div>
        </ContainerTitle>
        <ContainerBody item data-testid="containerBody">
          <h2>Content</h2>
        </ContainerBody>
        <ContainerFooter
          container
          item
          justify="flex-end"
          data-testid="containerFooter"
        >
          <Button component="label" data-testid="modalUploadButton">
            Upload File
            <input type="file" style={{ display: 'none' }} accept=".json" />
          </Button>
          <Button data-testid="modalAddRecordButton">Add record</Button>
          <Button onClick={onModalClose} data-testid="modalCancelButton">
            Cancel
          </Button>
        </ContainerFooter>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
