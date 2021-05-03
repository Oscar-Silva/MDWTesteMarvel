import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  Container,
  ItemImage,
  ItemContainer,
  ItemTitle,
  Title,
} from "./styles";

export interface ImgBoxItemData {
  id: number;
  imgURL: string;
  title: string;
}

interface ImgBoxFlatListProps {
  data: ImgBoxItemData[];
  onItemPress(item: ImgBoxItemData, index: number): void;
}

const ImgBoxFlatList = ({
  data = [],
  onItemPress = () => {},
}: ImgBoxFlatListProps) => {
  const renderItems = ({
    item,
    index,
  }: {
    item: ImgBoxItemData;
    index: number;
  }) => (
    <ItemContainer>
      <ItemImage source={{ uri: item.imgURL }} />
      <ItemTitle>{item.title}</ItemTitle>
    </ItemContainer>
  );
  return (
    <Container>
      <FlatList data={data} renderItem={renderItems} horizontal />
    </Container>
  );
};

export default ImgBoxFlatList;
