import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Menu from './Menu';

describe('Menu', () => {
  it('should match the snapshot', () => {
    const openModal = jest.fn();
    const { asFragment } = render(<Menu onVisibilityChange={openModal} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render plus button and filter', () => {
    const openModal = jest.fn();
    const { getByTestId } = render(<Menu onVisibilityChange={openModal} />);
    expect(getByTestId('plusIcon')).toBeInTheDocument();
  });
  it('should call onVisibilityChange after click', () => {
    const openModal = jest.fn();
    const { getByTestId } = render(<Menu onVisibilityChange={openModal} />);
    fireEvent.click(getByTestId('plusIcon'));
    expect(openModal).toHaveBeenCalledTimes(1);
  });
});
