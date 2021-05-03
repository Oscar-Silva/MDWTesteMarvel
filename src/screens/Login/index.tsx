import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import MarvelTitle from "../../commom/components/MarvelTitle";
import Splash from "../../commom/components/Splash";

import BackImage from "./BackImage";
import Form from "./Form";
import MarvelHeader from "./MarvelHeader";
import { Container } from "./styles";

const Login = () => {
  const navigation = useNavigation();
  const [splashRuning, setSplashRuning] = useState(true);
  if (splashRuning) {
    return <Splash onDoneSplash={() => setSplashRuning(false)} />;
  }

  const onLoginPress = async (
    email: string,
    password: string,
    rememberUser: boolean
  ) => {
    navigation.navigate("main");
  };

  return (
    <Container>
      <MarvelHeader />
      <Form onLoginPress={onLoginPress} />
      <BackImage />
    </Container>
  );
};

export default Login;
