import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Container, ImageItem, Title } from "./styles";

interface ImgSmallFlatListProps {
  title: string;
  imgURLs: string[];
}

const ImgSmallFlatList = ({ title, imgURLs = [] }: ImgSmallFlatListProps) => {
  const renderItems = ({ item, index }: { item: string; index: number }) => (
    <ImageItem key={index} source={{ uri: item }} />
  );
  return (
    <Container>
      <Title>{title}</Title>
      <FlatList data={imgURLs} renderItem={renderItems} horizontal />
    </Container>
  );
};

export default ImgSmallFlatList;
