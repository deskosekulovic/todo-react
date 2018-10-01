import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: ${props => props.theme.padding};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  background: ${props => props.theme.buttonFooter};
  ${props =>
    props.itemButton &&
    css`
      grid-area: button;
      justify-self: end;
      background: ${props => props.theme.buttonItem};
    `};
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
