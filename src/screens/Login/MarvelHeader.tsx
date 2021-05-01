import React, { useEffect } from "react";
import { Dimensions, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import MarvelTitle from "../../commom/components/MarvelTitle";

const MarvelHeader = () => {
  const dimension = Dimensions.get("window");
  const MarvelTitlePositionTop = useSharedValue(dimension.height / 2 - 92);

  const MarvelTitleAnimatedPosition = useAnimatedStyle(() => ({
    zIndex: 999,
    top: MarvelTitlePositionTop.value,
  }));

  useEffect(() => {
    MarvelTitlePositionTop.value = withTiming(35, { duration: 800 });
  }, []);

  return (
    <Animated.View style={MarvelTitleAnimatedPosition}>
      <MarvelTitle />
    </Animated.View>
  );
};

export default MarvelHeader;
