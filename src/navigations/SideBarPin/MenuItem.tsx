import React from "react";
import theme from "../../commom/theme";
import { SideBarItem, SideBarItemContainer, SideBarItemText } from "./styles";

const SideBarMenuItem = ({
  onPress,
  title,
}: {
  onPress(): void;
  title: string;
}) => {
  return (
    <SideBarItem onPress={onPress}>
      <SideBarItemContainer colors={theme.colors.gradient.secondaryWithOpacity}>
        <SideBarItemText numberOfLines={1}>{title}</SideBarItemText>
      </SideBarItemContainer>
    </SideBarItem>
  );
};

export default SideBarMenuItem;
