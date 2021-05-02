import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
} from "@react-navigation/native";

import {
  Container,
  SideBarContainer,
  SideBarItem,
  SideBarItemContainer,
  SideBarItemText,
} from "./styles";
import theme from "../../commom/theme";

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

interface SideBarPinProps {
  initialRouteName?: string;
  children?: any;
  screenOptions?: any;
  tabBarStyle?: any;
  contentStyle?: any;
}

export default function SideBarPin({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}: SideBarPinProps) {
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <Container>
        <SideBarContainer>
          {state.routes.map((route) => (
            <SideBarMenuItem
              key={route.key}
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!event.defaultPrevented) {
                  navigation.dispatch({
                    ...TabActions.jumpTo(route.name),
                    target: state.key,
                  });
                }
              }}
              title={descriptors[route.key].options.title || route.name}
            />
          ))}
        </SideBarContainer>
        <View style={[{ flex: 1 }, contentStyle]}>
          {descriptors[state.routes[state.index].key].render()}
        </View>
      </Container>
    </NavigationHelpersContext.Provider>
  );
}

export const createSideBarPin = createNavigatorFactory(SideBarPin);
