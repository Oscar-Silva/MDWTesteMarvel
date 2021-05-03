import React from "react";
import { View } from "react-native";

import {
  Container,
  DescriptionText,
  ShowMoreButton,
  ShowMoreButtonText,
} from "./styles";

interface DescriptionProps {
  description: string;
  onShowMorePress?(): void;
}

const Description = ({
  description,
  onShowMorePress = () => {},
}: DescriptionProps) => {
  console.log(description);
  return (
    <Container>
      <DescriptionText>{description}</DescriptionText>
      <ShowMoreButton onPress={onShowMorePress}>
        <ShowMoreButtonText>ver mais</ShowMoreButtonText>
      </ShowMoreButton>
    </Container>
  );
};

export default Description;
