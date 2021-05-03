import { TextProps, TouchableOpacityProps, ViewProps } from "react-native";
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

export const ShowAllContainer = styled.View<ViewProps>`
  height: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding-right: 10px;
`;

export const ShowAllTitle = styled.Text<TextProps>`
  color: ${(props) => props.theme.colors.terciary};
  font-family: axiforma-medium;
  font-size: 16px;
`;

export const ShowAllButton = styled.TouchableOpacity<TouchableOpacityProps>`
  display: flex;
  justify-content: center;
`;

export const ShowAllButtonText = styled.Text<TextProps>`
  color: ${(props) => props.theme.colors.terciary};
  font-family: axiforma-medium;
  font-size: 16px;
`;
