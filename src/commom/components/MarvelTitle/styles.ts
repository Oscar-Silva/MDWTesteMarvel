import { ViewProps } from "react-native";
import styled from "styled-components/native";

interface ContainerProps extends ViewProps {
  width: number;
  height: number;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.theme.colors.secondary};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  display: flex;
  font-size: 60px;
  font-family: marvel;
  margin-top: 5px;
  color: ${(props) => props.theme.colors.terciary};
`;
