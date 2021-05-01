import React, { useEffect, useState } from "react";
import { View, Dimensions, ImageBackground } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import MarvelTitle from "../MarvelTitle";

import { Container } from "./styles";

interface SplashProps {
  onDoneSplash(): void;
}

const Splash = ({ onDoneSplash }: SplashProps) => {
  const dimension = Dimensions.get("window");
  const [actualStep, setActualStep] = useState(0);
  const MarvelTitlePositionLeft = useSharedValue(30);
  const MarvelTitlePositionTop = useSharedValue(40);
  const MarvelTitleAnimatedPosition = useAnimatedStyle(() => {
    return {
      position: "absolute",
      left: MarvelTitlePositionLeft.value,
      top: MarvelTitlePositionTop.value,
      zIndex: 999,
    };
  });

  const wait = (miliseconds: number): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, miliseconds);
    });
  };

  const firstStep = async () => {
    await wait(800);
    setActualStep(1);
    MarvelTitlePositionLeft.value = withTiming(dimension.width - 172, {
      duration: 1500,
    });
    MarvelTitlePositionTop.value = withTiming(dimension.height - 92, {
      duration: 1500,
    });
    await wait(2501);
    secondStep();
  };

  const secondStep = async () => {
    setActualStep(2);
    MarvelTitlePositionLeft.value = withTiming(dimension.width / 2 - 70, {
      duration: 1200,
    });
    MarvelTitlePositionTop.value = withTiming(dimension.height / 2 - 92, {
      duration: 1200,
    });
    await wait(1600);
    onDoneSplash();
  };

  useEffect(() => {
    firstStep();
  }, []);

  const getBackgroundImage = () => {
    switch (actualStep) {
      case 0:
        return null;
      case 1:
        return require("../../../assets/images/Splash/Background1.png");
      case 2:
        return require("../../../assets/images/Splash/Background2.png");
    }
  };

  return (
    <Container>
      <ImageBackground
        source={getBackgroundImage()}
        style={{
          width: dimension.width,
          height: dimension.height,
        }}
      >
        <MarvelTitle containerStyle={[MarvelTitleAnimatedPosition]} />
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            opacity: 0.75,
            zIndex: 1,
          }}
        />
      </ImageBackground>
    </Container>
  );
};

export default Splash;
