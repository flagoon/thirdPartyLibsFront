import React from 'react';
import GlobalModal from './GlobalModal';
import { render, fireEvent } from '@testing-library/react';

describe('GlobalModal', () => {
  it('should match snapshot', () => {
    const onModalClick = jest.fn();
    const { asFragment } = render(<GlobalModal onModalClose={onModalClick} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should call onBackdropClick function after clicking backdrop', () => {
    const onClickHandler = jest.fn();
    const { getByTestId } = render(
      <GlobalModal onModalClose={onClickHandler} />,
    );
    const backdrop = getByTestId('backdrop');
    fireEvent.click(backdrop);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
  it('should call onBackdropClick when clicking cancel button', () => {
    const onClickHandler = jest.fn();
    const { getByTestId } = render(
      <GlobalModal onModalClose={onClickHandler} />,
    );
    const cancelButton = getByTestId('modalCancelButton');
    fireEvent.click(cancelButton);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
  it('should not call onBackdropClick while clicking any other element', () => {
    const onClickHandler = jest.fn();
    const { getByTestId } = render(
      <GlobalModal onModalClose={onClickHandler} />,
    );
    fireEvent.click(getByTestId('containerTitle'));
    fireEvent.click(getByTestId('containerBody'));
    fireEvent.click(getByTestId('containerFooter'));
    fireEvent.click(getByTestId('modalUploadButton'));
    fireEvent.click(getByTestId('modalAddRecordButton'));
    expect(onClickHandler).toHaveBeenCalledTimes(0);
  });
});
