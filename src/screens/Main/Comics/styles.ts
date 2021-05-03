import { TextProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  padding-left: 10px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.Text<TextProps>`
  color: ${(props) => props.theme.colors.terciary};
  font-family: axiforma-medium;
  font-size: 18px;
  text-align: center;
  margin-top: 25px;
`;
