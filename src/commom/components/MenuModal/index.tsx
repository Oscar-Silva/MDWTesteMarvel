import React from "react";
import { Image, Pressable, View } from "react-native";

import {
  ContainerModal,
  Container,
  ProfileContainer,
  Wrapper,
  ProfilePictureContainer,
  ProfileMenuContainer,
  ProfileMenuItem,
  ProfileMenuItemText,
} from "./styles";
import ImgProfilePicture from "../../../assets/images/TopBar/profilePicture.png";
import { useNavigation } from "@react-navigation/core";

interface ProfileModalProps {
  visible: boolean;
  onRequestClose(): void;
}

const MenuModal = ({
  visible = false,
  onRequestClose = () => {},
}: ProfileModalProps) => {
  const navigation = useNavigation();

  const onExitPress = () => {
    onRequestClose();
    navigation.navigate("login");
  };

  return (
    <ContainerModal
      visible={visible}
      transparent
      onRequestClose={onRequestClose}
    >
      <Container onTouchEnd={() => console.log("aaa")}>
        <Wrapper />
        <Pressable
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          onPress={onRequestClose}
        />
        <ProfileContainer>
          <ProfilePictureContainer>
            <Image
              source={ImgProfilePicture}
              width={55}
              height={55}
              style={{ height: 55, width: 55, borderRadius: 100 }}
            />
          </ProfilePictureContainer>
          <ProfileMenuContainer>
            <ProfileMenuItem>
              <ProfileMenuItemText>Perfil</ProfileMenuItemText>
            </ProfileMenuItem>
            <ProfileMenuItem>
              <ProfileMenuItemText>Configurações</ProfileMenuItemText>
            </ProfileMenuItem>
            <ProfileMenuItem>
              <ProfileMenuItemText>Visite nosso site</ProfileMenuItemText>
            </ProfileMenuItem>
            <ProfileMenuItem onPress={onExitPress}>
              <ProfileMenuItemText>Sair</ProfileMenuItemText>
            </ProfileMenuItem>
          </ProfileMenuContainer>
        </ProfileContainer>
      </Container>
    </ContainerModal>
  );
};

export default MenuModal;
