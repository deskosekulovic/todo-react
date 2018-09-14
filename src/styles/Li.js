import styled, { css } from 'styled-components';

const Li = styled.li`
  grid-area: li;
  font-size: ${props => props.theme.fontSize};
  ${props => props.completed && css`
    text-decoration: line-through;
    color: ${props => props.theme.buttonItem};
  `};
  &:hover {
    cursor: pointer;
  }
`;

export default Li;
