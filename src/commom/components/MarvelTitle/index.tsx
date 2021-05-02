import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import { Container, Title } from "./styles";

interface MarveTitleProps {
  width?: number;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const MarvelTitle = ({
  width = 140,
  height = 56,
  containerStyle = {},
  textStyle = {},
}: MarveTitleProps) => {
  return (
    <Container
      as={Animated.View}
      style={containerStyle}
      width={width}
      height={height}
    >
      <Title style={[textStyle]}>MARVEL</Title>
    </Container>
  );
};

export default MarvelTitle;
