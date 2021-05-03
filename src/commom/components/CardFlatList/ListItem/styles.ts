import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { ImageProps, ViewProps } from "react-native";
import styled from "styled-components/native";

export const ITEM_HEIGHT = 222;
export const ITEM_WIDTH = 334;

export const CARD_WIDTH = 192;
export const CARD_HEIGHT = 210;

export const Container = styled.View<ViewProps>`
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: row;
  height: ${ITEM_HEIGHT}px;
  width: ${ITEM_WIDTH}px;
  align-items: flex-end;
  z-index: 3;
`;

export const CardContainer = styled.View<ViewProps>`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.secondary};
  border-radius: 30px;
`;

export const Picture = styled.Image<ImageProps>`
  width: ${CARD_WIDTH - 2}px;
  height: ${CARD_HEIGHT - 2}px;
  border-radius: 30px;
  z-index: 1px;
`;

export const TitleContainer = styled(LinearGradient)<LinearGradientProps>`
  border-radius: 30px;
  height: 58px;
  width: ${CARD_WIDTH};
  position: absolute;
  bottom: 0;
  z-index: 2px;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.terciary};
  font-family: axiforma-bold;
`;

export const RateContainer = styled.View<ViewProps>`
  width: 178px;
  height: 59px;
  margin-left: -50px;
  background-color: ${(props) => props.theme.colors.primary};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.secondary};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const RateTitle = styled.Text`
  color: ${(props) => props.theme.colors.terciary};
  font-size: 13px;
  font-family: axiforma;
`;

export const RateStars = styled.View<ViewProps>`
  flex-direction: row;
`;
