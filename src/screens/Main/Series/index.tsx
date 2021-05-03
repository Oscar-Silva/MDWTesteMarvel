import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CardFlatList from "../../../commom/components/CardFlatList";
import { ItemData } from "../../../commom/components/CardFlatList/ListItem";
import Description from "../../../commom/components/Description";
import ImgBoxFlatList, {
  ImgBoxItemData,
} from "../../../commom/components/ImgBoxFlatList";
import ImgSmallFlatList from "../../../commom/components/ImgSmallFlatList";
import {
  ShowAllButton,
  ShowAllButtonText,
  ShowAllContainer,
  ShowAllTitle,
} from "../../../commom/styles/shollAllComponents";
import { Series as SeriesModel } from "../../../models/series";
import { RootState } from "../../../redux";
import { fetchSeriesData } from "../../../redux/series/actions";
import { hideSideBar } from "../../../redux/sideBarPin";
import requestSeriesCharacters from "../../../services/api/series/requestSeriesCharacters";
import { wait } from "../../../services/helpers";
import { Container, Title } from "./styles";

const Series = () => {
  const [actualItemIndex, setActualItemIndex] = useState(0);
  const [apparitionsImgs, setApparitionsImgs] = useState<string[]>([]);
  const navigation = useNavigation();

  const series = useSelector((state: RootState) => state.seriesReducer.list);
  const dispatch = useDispatch();

  const charactersToItemData = (): ItemData[] => {
    const itemsData: ItemData[] = [];
    series.forEach((item: SeriesModel) => {
      itemsData.push({
        title: item.title as string,
        pictureURL: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
      });
    });

    return itemsData;
  };

  const seriesToImgBoxItemData = () => {
    const itemsData: ImgBoxItemData[] = [];
    series.forEach((item: SeriesModel) => {
      itemsData.push({
        id: item?.id!,
        imgURL: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
        title: item.title!,
      });
    });
    return itemsData;
  };

  const getCharacters = async () => {
    await wait(100);
    const characters = await requestSeriesCharacters(
      series[actualItemIndex]?.id!
    );
    const apparitoinsImgUrls: string[] = [];
    characters?.forEach((item) => {
      apparitoinsImgUrls.push(
        `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`
      );
    });
    setApparitionsImgs(apparitoinsImgUrls);
  };

  const onChangeItemIndex = (activeItemIndex: number) => {
    setActualItemIndex(activeItemIndex);
  };

  const ShowAllButtonPress = () => {
    dispatch(hideSideBar());
    navigation.navigate("SeriesAll");
  };

  useEffect(() => {
    dispatch(fetchSeriesData());
  }, []);

  useEffect(() => {
    getCharacters();
  }, [actualItemIndex]);

  return (
    <Container>
      <Title>Top 10 - Filmes populares</Title>
      <CardFlatList
        data={charactersToItemData()}
        onChangeItemIndex={onChangeItemIndex}
      />
      <ScrollView style={{ flex: 1 }}>
        <Description description={series[actualItemIndex]?.description!} />
        <ImgSmallFlatList title={"Personagens"} imgURLs={apparitionsImgs} />
        <ShowAllContainer>
          <ShowAllTitle>Filmes</ShowAllTitle>
          <ShowAllButton onPress={ShowAllButtonPress}>
            <ShowAllButtonText>+ Ver todos</ShowAllButtonText>
          </ShowAllButton>
        </ShowAllContainer>
        <ImgBoxFlatList
          data={seriesToImgBoxItemData()}
          onItemPress={() => {}}
        />
        <View style={{ height: 30 }} />
      </ScrollView>
    </Container>
  );
};

export default Series;
