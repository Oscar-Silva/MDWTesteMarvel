import { PressableProps, TextProps, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  height: 122px;
  margin-top: 10px;
  padding-right: 10px;
`;

export const DescriptionText = styled.Text<TextProps>`
  font-size: 14px;
  color: ${(props) => props.theme.colors.terciary};
  font-family: axiforma-thin;
`;

export const ShowMoreButton = styled.TouchableOpacity<TouchableOpacityProps>`
  padding-top: 10px;
`;
export const ShowMoreButtonText = styled.Text<TextProps>`
  font-size: 10px;
  font-family: axiforma-book;
  color: ${(props) => props.theme.colors.secondary};
`;
