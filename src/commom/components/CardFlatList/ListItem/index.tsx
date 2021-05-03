import React from "react";
import { StyleProp, View, ViewStyle, Animated } from "react-native";
import theme from "../../../theme";
import {
  Container,
  CardContainer,
  Picture,
  TitleContainer,
  TitleText,
  RateContainer,
  RateTitle,
  RateStars,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export interface ItemData {
  title: string;
  pictureURL: string;
}

interface ListItemsProps {
  item: ItemData;
  index: number;
  containerStyle?: StyleProp<ViewStyle>;
  showRateBox: boolean;
}

const ListItem = ({
  item,
  index,
  containerStyle = {},
  showRateBox = false,
}: ListItemsProps) => {
  const trenderRateItems = () => {
    const fakeStars = [true, true, true, true, false];
    return fakeStars
      .sort((a, b) => Number(b) - Number(a))
      .map((rated) => (
        <Ionicons name="star" size={16} color={rated ? "yellow" : "grey"} />
      ));
  };

  return (
    <Container key={index} as={Animated.View} style={[containerStyle]}>
      <CardContainer>
        <Picture
          source={{
            uri: item.pictureURL,
          }}
          resizeMode={"stretch"}
        />
        <TitleContainer colors={theme.colors.gradient.secondaryWithOpacity2}>
          <TitleText>{item.title}</TitleText>
        </TitleContainer>
      </CardContainer>
      {showRateBox === true ? (
        <RateContainer>
          <RateTitle>Avaliação dos Fãs</RateTitle>
          <RateStars>{trenderRateItems()}</RateStars>
        </RateContainer>
      ) : null}
    </Container>
  );
};

export default ListItem;
