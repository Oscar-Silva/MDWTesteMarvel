import React, { useEffect, useState } from "react";
import {
  Container,
  ModalInfoTitle,
  ModalInfoSubTitle,
  ModalInfoText,
} from "./styles";
import ToolBar from "../../../commom/components/ToolBar";
import { useDispatch, useSelector } from "react-redux";
import { hideSideBar, showSideBar } from "../../../redux/sideBarPin";
import { useNavigation } from "@react-navigation/native";
import { Character } from "../../../models/characters";
import { RootState } from "../../../redux";
import CardFlatListHorizontal from "../../../commom/components/CardFlatListHorizontal";
import { CardItemProps } from "../../../commom/components/CardFlatListHorizontal/CardItem";
import ModalInfoDetail from "../../../commom/components/ModalInfoDetail";
import { ScrollView, View } from "react-native";

const CharactersAll = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const characters: Character[] = useSelector(
    (state: RootState) => state.charactersReducer.list
  );
  const [modalShowMore, setModalShowMore] = useState(false);
  const [showMoreCharacter, setShowMoreCharacter] = useState<Character>({});

  const onBackPress = () => {
    dispatch(showSideBar());
    navigation.goBack();
  };

  useEffect(() => {
    setTimeout(() => dispatch(hideSideBar()), 200);
    navigation.navigate("CharactersAll");
  }, []);

  const onDetailPress = (item: CardItemProps, index: number) => {
    console.log(item.data.thumbnail);
    setShowMoreCharacter(item.data);
    setModalShowMore(true);
  };

  const characterToCardListData = (): CardItemProps[] => {
    const cardItems: CardItemProps[] = [];
    characters.forEach((item: Character, index) => {
      cardItems.push({
        data: item,
        description: item.description!,
        imgURL: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
        title: item.name!,
        index: index,
      });
    });
    return cardItems;
  };

  return (
    <Container>
      <ModalInfoDetail
        visible={modalShowMore}
        imageUrl={`${showMoreCharacter.thumbnail?.path}.${showMoreCharacter.thumbnail?.extension}`}
        onRequestClose={() => setModalShowMore(false)}
      >
        <ScrollView style={{ flex: 1 }}>
          <ModalInfoTitle>{showMoreCharacter.name}</ModalInfoTitle>
          <ModalInfoSubTitle>Aparições:</ModalInfoSubTitle>
          {showMoreCharacter.series?.items?.map((item) => (
            <ModalInfoText>{item.name}</ModalInfoText>
          ))}
        </ScrollView>
      </ModalInfoDetail>
      <ToolBar
        title={"Personagens"}
        iconName={"people-outline"}
        onBackPress={onBackPress}
      />
      <CardFlatListHorizontal
        data={characterToCardListData()}
        onItemDetailPress={onDetailPress}
      />
    </Container>
  );
};

export default CharactersAll;
