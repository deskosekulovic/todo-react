import styled from 'styled-components';

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: end;
  grid-template-areas: 'li . button';
  list-style-type: none;
  padding: ${props => props.theme.padding};
  background: ${props => props.theme.backgroundItem};
  border-radius: ${props => props.theme.borderRadius};

  :nth-child(odd) {
    background: ${props => props.theme.backgroundItemOdd};
  }
`;

export default StyledItem;
