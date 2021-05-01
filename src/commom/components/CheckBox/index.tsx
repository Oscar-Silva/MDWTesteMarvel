import React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";

import { Container, Rect, Title } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";

interface CheckBoxProps {
  value: boolean;
  onPress(value: boolean): void;
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  rectStyle?: StyleProp<ViewStyle>;
}

const CheckBox = ({
  value,
  onPress,
  title,
  containerStyle = {},
  titleStyle = {},
  rectStyle = {},
}: CheckBoxProps) => {
  return (
    <Container style={[containerStyle]} onPress={() => onPress(value)}>
      <Rect style={[rectStyle]}>
        {value ? (
          <Ionicons name="checkmark" size={12} color={theme.colors.secondary} />
        ) : null}
      </Rect>
      <Title style={[titleStyle]}>{title}</Title>
    </Container>
  );
};

export default CheckBox;
