import React from "react";
import { FlatList, View } from "react-native";
import theme from "../../theme";
import CardItem, { CardItemProps } from "./CardItem";
import { Container } from "./styles";

interface CardFlatListHorizontalProps {
  data: CardItemProps[];
  onItemDetailPress(item: CardItemProps, index: number): void;
}

const CardFlatListHorizontal = ({
  data,
  onItemDetailPress = () => {},
}: CardFlatListHorizontalProps) => {
  const renderCards = ({
    item,
    index,
  }: {
    item: CardItemProps;
    index: number;
  }) => {
    return (
      <CardItem
        key={index}
        index={index}
        data={item}
        description={item.description!}
        imgURL={item.imgURL}
        title={item.title}
        onDetailsPress={() => onItemDetailPress(item, index)}
      />
    );
  };

  return (
    <Container>
      <FlatList
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: theme.colors.primary,
        }}
        horizontal
        contentContainerStyle={{
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: 10,
        }}
        data={data}
        renderItem={renderCards}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

export default CardFlatListHorizontal;
