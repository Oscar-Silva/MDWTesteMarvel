import {
  ImageProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 100px;
`;

export const Title = styled.Text<TextProps>`
  font-size: 17px;
  color: ${(props) => props.theme.colors.terciary};
  font-family: axiforma-medium;
`;

export const ItemContainer = styled.TouchableOpacity<TouchableOpacityProps>`
  height: 90px;
`;

export const ItemImage = styled.Image<ImageProps>`
  width: 142px;
  height: 69px;
  margin: 10px;
  border-radius: 13px;
`;

export const ItemTitle = styled.Text<TextProps>`
  font-family: axiforma-thin;
  font-size: 12px;
  bottom: 0px;
  color: ${(props) => props.theme.colors.terciary};
  text-align: center;
  width: 142px;
`;
