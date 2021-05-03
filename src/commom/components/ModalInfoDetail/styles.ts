import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import {
  Dimensions,
  ImageProps,
  ModalProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import theme from "../../theme";

const dimension = Dimensions.get("window");

export const ContainerModal = styled.Modal<ModalProps>`
  display: flex;
  flex: 1;
`;

export const Container = styled.View<ViewProps>`
  display: flex;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const CONTENT_HEIGHT = dimension.height / 1.3;
export const CONTENT_WIDTH = dimension.width / 1.5;
export const CONTENT_PADDING = 10;

export const Content = styled(LinearGradient)<LinearGradientProps>`
  display: flex;
  height: ${CONTENT_HEIGHT}px;
  width: ${CONTENT_WIDTH}px;
  background-color: ${theme.colors.secondary};
  border-radius: 30px;
  min-width: 280px;
`;

export const ImageHeader = styled.Image<ImageProps>`
  height: 169px;
  border-radius: 28px;
`;

export const InfoContainer = styled.View<ViewProps>`
  display: flex;
  flex: 1;
  margin: 10px;
`;

export const Footer = styled.View<ViewProps>`
  height: 70px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const FooterTitle = styled.Text<TextProps>`
  font-size: 18px;
  font-family: axiforma;
  color: ${(props) => props.theme.colors.terciary};
`;

export const FooterRateContainer = styled.View<ViewProps>`
  display: flex;
  flex-direction: row;
`;

export const FooterCloseButton = styled.TouchableOpacity<TouchableOpacityProps>`
  position: absolute;
  width: 38px;
  height: 38px;
  bottom: 25px;
  right: 15px;
  justify-content: center;
  align-items: center;
`;
