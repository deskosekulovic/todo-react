import styled from 'styled-components';

export const theme = {
  backgroundApp: '#c7c7c7',
  backgroundItem: '#eee',
  backgroundItemOdd: '#ddd',
  buttonItem: '#f44336',
  buttonFooter: '#4CAF50',
  padding: '10px',
  borderRadius: '5px',
  fontSize: '20px'
};

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 1em;
  grid-template-areas:
  ". form ."
  ". content ."
  ". footer .";
  background: ${props => props.theme.backgroundApp};
  padding: ${props => props.theme.padding};
`;

export default StyledApp;
