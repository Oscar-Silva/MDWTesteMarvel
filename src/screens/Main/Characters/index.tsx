import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { fetchCharactersData } from "../../../redux/characters/actions";
import CardFlatList from "../../../commom/components/CardFlatList";
import {
  ShowAllButton,
  ShowAllButtonText,
  ShowAllContainer,
  ShowAllTitle,
  Title,
} from "./styles";
import { Container } from "./styles";
import { ItemData } from "../../../commom/components/CardFlatList/ListItem";
import { ImgBoxItemData } from "../../../commom/components/ImgBoxFlatList";
import { Character } from "../../../models/characters";
import Description from "../../../commom/components/Description";
import ImgSmallFlatList from "../../../commom/components/ImgSmallFlatList";
import requestCharactersSeries from "../../../services/api/characters/requestCharactersSeries";
import { ScrollView } from "react-native-gesture-handler";
import ImgBoxFlatList from "../../../commom/components/ImgBoxFlatList";

const Characters = () => {
  const [actualItemIndex, setActualItemIndex] = useState(0);
  const [apparitionsImgs, setApparitionsImgs] = useState<string[]>([]);

  const characters = useSelector(
    (state: RootState) => state.charactersReducer.list
  );
  const dispatch = useDispatch();

  const charactersToItemData = (): ItemData[] => {
    const itemsData: ItemData[] = [];
    characters.forEach((item: Character) => {
      itemsData.push({
        title: item.name as string,
        pictureURL: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
      });
    });

    return itemsData;
  };

  const charactersToImgBoxItemData = () => {
    const itemsData: ImgBoxItemData[] = [];
    characters.forEach((item: Character) => {
      itemsData.push({
        id: item?.id!,
        imgURL: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
        title: item.name!,
      });
    });
    return itemsData;
  };

  useEffect(() => {
    dispatch(fetchCharactersData());
    getApparitions();
  }, []);

  useEffect(() => {
    getApparitions();
  }, [actualItemIndex]);

  const getApparitions = async () => {
    const series = await requestCharactersSeries(
      characters[actualItemIndex]?.id!
    );
    const apparitoinsImgUrls: string[] = [];
    series?.forEach((item) => {
      apparitoinsImgUrls.push(
        `${item.thumbnail.path}.${item.thumbnail.extension}`
      );
    });
    setApparitionsImgs(apparitoinsImgUrls);
    console.log(apparitoinsImgUrls);
  };

  const onChangeItemIndex = (activeItemIndex: number) => {
    setActualItemIndex(activeItemIndex);
  };

  return (
    <Container>
      <Title>Top 10 - Personagens Populares</Title>
      <CardFlatList
        data={charactersToItemData()}
        onChangeItemIndex={onChangeItemIndex}
      />
      <ScrollView style={{ flex: 1 }}>
        <Description description={characters[actualItemIndex]?.description!} />
        <ImgSmallFlatList title={"Aparições"} imgURLs={apparitionsImgs} />
        <ShowAllContainer>
          <ShowAllTitle>Personangens</ShowAllTitle>
          <ShowAllButton>
            <ShowAllButtonText>+ Ver todos</ShowAllButtonText>
          </ShowAllButton>
        </ShowAllContainer>
        <ImgBoxFlatList
          data={charactersToImgBoxItemData()}
          onItemPress={() => {}}
        />
        <View style={{ height: 30 }} />
      </ScrollView>
    </Container>
  );
};

export default Characters;
