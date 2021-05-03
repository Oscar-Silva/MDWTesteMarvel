import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import theme from "../../theme";
import {
  Container,
  ContainerModal,
  Content,
  ImageHeader,
  InfoContainer,
  Footer,
  FooterTitle,
  FooterRateContainer,
  FooterCloseButton,
  CONTENT_HEIGHT,
} from "./styles";

const ContentAnimated = Animated.createAnimatedComponent(Content);

interface ModalInfoDetailProps {
  visible: boolean;
  imageUrl: string;
  onRequestClose(): void;
  children: React.ReactNode;
}

const ModalInfoDetail = ({
  visible = false,
  onRequestClose = () => {},
  children,
  imageUrl,
}: ModalInfoDetailProps) => {
  const height = useRef(new Animated.Value(250)).current;

  useEffect(() => {
    height.setValue(250);
    Animated.timing(height, {
      toValue: CONTENT_HEIGHT,
      delay: 1000,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  return (
    <ContainerModal
      visible={visible}
      transparent
      onRequestClose={onRequestClose}
    >
      <Container>
        <ContentAnimated
          colors={theme.colors.gradient.secondary}
          style={{ height }}
        >
          <ImageHeader source={{ uri: imageUrl }} />
          <InfoContainer>{children}</InfoContainer>
          <Footer>
            <FooterTitle>Avaliações dos Fãs</FooterTitle>
            <FooterRateContainer>
              <Ionicons name="star" size={26} color={"yellow"} />
              <Ionicons name="star" size={26} color={"yellow"} />
              <Ionicons name="star" size={26} color={"yellow"} />
              <Ionicons name="star" size={26} color={"yellow"} />
              <Ionicons name="star" size={26} color={"grey"} />
            </FooterRateContainer>
            <FooterCloseButton onPress={() => onRequestClose()}>
              <Ionicons
                name="close-circle-outline"
                size={36}
                color={theme.colors.terciary}
              />
            </FooterCloseButton>
          </Footer>
        </ContentAnimated>
      </Container>
    </ContainerModal>
  );
};

export default ModalInfoDetail;
