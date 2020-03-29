import React from 'react';
import styled from 'styled-components';

interface Props extends HTMLInputElement {
  readonly color?: string;
}

const Input = (props: Props): JSX.Element => <StyledInput {...props} />;

const StyledInput = styled.input<Props>`
  color: ${(props: Props): string => (props.color ? props.color : 'black')};
`;

export default Input;
