import styled from 'styled-components';

const Form = styled.form`
  grid-area: form;
  justify-self: center;
  grid-template-rows: 1fr 1fr;

  input {
    font-size: ${props => props.theme.fontSize};
    padding: ${props => props.theme.padding};
    outline: none;
  }
`;

export default Form;
