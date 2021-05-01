import { PressableProps, TextProps, ViewProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.Pressable<PressableProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Rect = styled.View<ViewProps>`
  background-color: ${(props) => props.theme.colors.terciary};
  height: 16px;
  width: 16px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.secondary};
`;

export const Title = styled.Text<TextProps>`
  font-size: 8px;
  font-family: axiforma-semibold;
  margin-left: 5px;
`;
