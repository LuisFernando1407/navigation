import styled from 'styled-components/native'

export const View = styled.View`
  width: 100%;
  border-color: ${props => props.borderColor};
  border-radius: 8px;
  border-width: 1px;
`;

export const Text = styled.Text`
  padding-start: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: normal;
  color: ${props => props.color};
`;

export const Title = styled.Text`
  padding: 15px;
  font-size: 18px;
  font-weight: bold;  
`;