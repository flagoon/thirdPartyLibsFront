import styled from 'styled-components';

interface Props {
  readonly color?: string;
}

const StyledInput = styled.input`
  color: ${(props: Props): string => (props.color ? props.color : 'black')};
  padding-left: 1rem;
`;

export default StyledInput;
