import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ToolBarContainer, ToolBarButton, ToolBarButtonText } from "./styles";
import theme from "../../../commom/theme";

interface ToolBarProps {
  title: string;
  iconName: string;
  onBackPress(): void;
}

const ToolBar = ({ title, iconName, onBackPress = () => {} }: ToolBarProps) => {
  return (
    <ToolBarContainer>
      <ToolBarButton onPress={onBackPress}>
        <Ionicons
          name="arrow-back-outline"
          size={28}
          color={theme.colors.secondary}
        />
        <Ionicons
          name={iconName}
          size={38}
          color={theme.colors.secondary}
          style={{ marginLeft: 10 }}
        />
        <ToolBarButtonText>{title}</ToolBarButtonText>
      </ToolBarButton>
    </ToolBarContainer>
  );
};

export default ToolBar;
