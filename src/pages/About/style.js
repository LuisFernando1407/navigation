import styled from 'styled-components/native'

export const View = styled.View`
  color: #000;
  width: ${props => props.width};
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: baseline;
  margin-left: 20px;
`;