import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ModalInfoTitle = styled.Text`
  font-size: 20px;
  font-family: axiforma-bold;
  margin-top: 5px;
  color: ${(props) => props.theme.colors.terciary};
`;
export const ModalInfoSubTitle = styled.Text`
  font-size: 16px;
  font-family: axiforma-bold;
  margin-top: 10px;

  color: ${(props) => props.theme.colors.terciary};
`;

export const ModalInfoText = styled.Text`
  font-size: 16px;
  font-family: axiforma-thin;
  margin-top: 5px;
  color: ${(props) => props.theme.colors.terciary};
`;
