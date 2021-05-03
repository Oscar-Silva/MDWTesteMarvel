import React from "react";
import { Image, View } from "react-native";
import theme from "../../../commom/theme";

import {
  CardInfoContainer,
  CardInfoDescription,
  CardInfoShowMore,
  CardInfoShowMoreText,
  CardInfoTitle,
  CardItemContainer,
  CardPicture,
} from "./styles";

export interface CardItemProps {
  imgURL: string;
  title: string;
  index: number;
  description: string;
  onDetailsPress?(data: any, index: number): void;
  data: any;
}

const CardItem = ({
  imgURL,
  title,
  description,
  index,
  onDetailsPress = () => {},
  data,
}: CardItemProps) => {
  return (
    <CardItemContainer>
      <CardPicture source={{ uri: imgURL }} />
      <CardInfoContainer
        colors={theme.colors.gradient.secondaryWithOpacity2}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <CardInfoTitle numberOfLines={1}>{title}</CardInfoTitle>
        <CardInfoDescription numberOfLines={5}>
          {description}
        </CardInfoDescription>
        <CardInfoShowMore onPress={() => onDetailsPress(data, index)}>
          <CardInfoShowMoreText>ver mais</CardInfoShowMoreText>
        </CardInfoShowMore>
      </CardInfoContainer>
    </CardItemContainer>
  );
};

export default CardItem;
