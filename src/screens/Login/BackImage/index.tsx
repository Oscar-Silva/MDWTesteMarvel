import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Image, ImageBackground, Dimensions } from "react-native";
import theme from "../../../commom/theme";
import BackgroundImage1 from "../../../assets/images/Splash/Background2.png";

// import { Container } from './styles';

const BackImage = () => {
  const dimension = Dimensions.get("window");
  return (
    <View>
      <LinearGradient
        colors={theme.colors.gradient.primaryWithOpacity1}
        style={{
          position: "absolute",
          width: dimension.width,
          height: dimension.height,
          zIndex: 1,
        }}
        start={{ x: 0, y: -0.1 }}
        end={{ x: 0, y: 0.75 }}
      />
      <Image
        source={BackgroundImage1}
        style={{
          width: dimension.width,
          height: dimension.height - 440,
          zIndex: 0,
        }}
        resizeMode={"center"}
      />
    </View>
  );
};

export default BackImage;
