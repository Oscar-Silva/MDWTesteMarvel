import React, { useState } from "react";
import { View } from "react-native";
import Splash from "../../commom/components/Splash";
import { Container } from "./styles";

const Login = () => {
  const [splashRuning, setSplashRuning] = useState(true);
  if (splashRuning) {
    return <Splash onDoneSplash={() => setSplashRuning(false)} />;
  }
  return <Container></Container>;
};

export default Login;
