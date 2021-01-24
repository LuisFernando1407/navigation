import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Content = styled.View`
  color: #fff;
  width: ${props => props.width};
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: baseline;
  margin-left: 20px;
`;

export const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center"
  },
  openButton: {
    backgroundColor: "#F194FF",
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  }
});