import { TextProps, TouchableOpacityProps, ViewProps } from "react-native";
import styled from "styled-components/native";

export const ToolBarContainer = styled.View<ViewProps>`
  padding-left: 25px;
  flex-direction: row;
  height: 42px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ToolBarButton = styled.TouchableOpacity<TouchableOpacityProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ToolBarButtonText = styled.Text<TextProps>`
  color: ${(props) => props.theme.colors.terciary};
  font-size: 18px;
  font-family: axiforma-bold;
  margin-left: 10px;
`;
