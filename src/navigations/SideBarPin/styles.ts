import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { TextProps, TouchableOpacityProps, ViewProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const SideBarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  width: 49.5px;
  justify-content: center;
`;

export const SideBarItem = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 49.5px;
  margin-left: -10px;
  border-radius: 18px;
`;

export const SideBarItemContainer = styled(LinearGradient)<LinearGradientProps>`
  justify-content: center;
  height: 110px;
  border-radius: 12px;
`;
export const SideBarItemText = styled.Text<TextProps>`
  transform: rotate(90deg);
  width: 110px;
  text-align: center;
  margin-left: -25px;
  font-size: 10px;
  font-family: axiforma-medium;
  color: ${(props) => props.theme.colors.terciary};
`;
