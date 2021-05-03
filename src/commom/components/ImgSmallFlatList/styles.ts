import { ImageProps, TextProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 95px;
`;

export const Title = styled.Text<TextProps>`
  font-size: 17px;
  color: ${(props) => props.theme.colors.terciary};
  font-family: axiforma-medium;
`;

export const ImageItem = styled.Image<ImageProps>`
  width: 65px;
  height: 65px;
  margin: 10px;
  border-radius: 13px;
`;
