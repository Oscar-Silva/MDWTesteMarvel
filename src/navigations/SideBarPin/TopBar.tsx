import React, { useState } from "react";
import { Image } from "react-native";
import MarvelTitle from "../../commom/components/MarvelTitle";
import MenuModal from "../../commom/components/MenuModal";
import { TopBarContainer, TopBarProfileButton } from "./styles";

const TopBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <TopBarContainer>
      <MenuModal onRequestClose={() => setVisible(false)} visible={visible} />
      <TopBarProfileButton onPress={() => setVisible(true)}>
        <Image source={require("../../assets/images/TopBar/menuIcon.png")} />
      </TopBarProfileButton>
      <MarvelTitle
        height={25}
        width={66}
        textStyle={{ fontSize: 30, marginTop: 1 }}
      />
    </TopBarContainer>
  );
};

export default TopBar;
