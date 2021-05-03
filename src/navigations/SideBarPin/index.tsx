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
import { Container, SideBarContainer } from "./styles";
import SideBarMenuItem from "./MenuItem";
import TopBar from "./TopBar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

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
  const visible = useSelector(
    (state: RootState) => state.sideBarPinReducer.visible
  );

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <Container>
        <TopBar />
        <View style={{ flex: 1, display: "flex", flexDirection: "row" }}>
          {visible ? (
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
          ) : null}
          <View style={[{ flex: 1 }, contentStyle]}>
            {descriptors[state.routes[state.index].key].render()}
          </View>
        </View>
      </Container>
    </NavigationHelpersContext.Provider>
  );
}

export const createSideBarPin = createNavigatorFactory(SideBarPin);
