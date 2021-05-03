import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import {
  ImageProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import styled from "styled-components/native";

export const Container = styled.View<ViewProps>`
  display: flex;
  flex: 1;
`;

const CARD_HEIGHT = 245;
const CARD_WIDTH = 161;

export const CardItemContainer = styled.View<ViewProps>`
  display: flex;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  border-radius: 30px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const CardPicture = styled.Image<ImageProps>`
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  border-radius: 30px;
`;

export const CardInfoContainer = styled(LinearGradient)<LinearGradientProps>`
  position: absolute;
  height: 131px;
  width: ${CARD_WIDTH}px;
  bottom: 0px;
  border-radius: 30px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const CardInfoTitle = styled.Text<TextProps>`
  font-size: 12px;
  font-family: axiforma-bold;
  color: ${(props) => props.theme.colors.terciary};
`;

export const CardInfoDescription = styled.Text<TextProps>`
  font-size: 12px;
  font-family: axiforma;
  color: ${(props) => props.theme.colors.terciary};
`;

export const CardInfoShowMore = styled.TouchableOpacity<TouchableOpacityProps>``;

export const CardInfoShowMoreText = styled.Text<TextProps>`
  font-size: 12px;
  color: ${(props) => props.theme.colors.terciary};
  font-family: axiforma-semibold;
`;
