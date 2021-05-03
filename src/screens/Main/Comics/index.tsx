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
import { Comic as ComicModel } from "../../../models/comics";
import { RootState } from "../../../redux";
import { fetchComicsData } from "../../../redux/comics/actions";
import { hideSideBar } from "../../../redux/sideBarPin";
import requestComicsCreators from "../../../services/api/comics/requestComicsCreators";
import { wait } from "../../../services/helpers";
import { Container, Title } from "./styles";

const Comics = () => {
  const [actualItemIndex, setActualItemIndex] = useState(0);
  const [creatorsImgs, setCreatorsImgs] = useState<string[]>([]);
  const navigation = useNavigation();

  const comics = useSelector((state: RootState) => state.comicsReducer.list);
  const dispatch = useDispatch();

  const charactersToItemData = (): ItemData[] => {
    const itemsData: ItemData[] = [];
    comics.forEach((item: ComicModel) => {
      itemsData.push({
        title: item.title as string,
        pictureURL: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
      });
    });

    return itemsData;
  };

  const seriesToImgBoxItemData = () => {
    const itemsData: ImgBoxItemData[] = [];
    comics.forEach((item: ComicModel) => {
      itemsData.push({
        id: item?.id!,
        imgURL: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
        title: item.title!,
      });
    });
    return itemsData;
  };

  const getCreators = async () => {
    await wait(100);
    const creators = await requestComicsCreators(comics[actualItemIndex]?.id!);
    const apparitoinsImgUrls: string[] = [];
    creators?.forEach((item) => {
      apparitoinsImgUrls.push(
        `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`
      );
    });
    setCreatorsImgs(apparitoinsImgUrls);
  };

  const onChangeItemIndex = (activeItemIndex: number) => {
    setActualItemIndex(activeItemIndex);
  };

  const ShowAllButtonPress = () => {
    dispatch(hideSideBar());
    navigation.navigate("ComicsAll");
  };

  useEffect(() => {
    dispatch(fetchComicsData());
  }, []);

  useEffect(() => {
    getCreators();
  }, [actualItemIndex]);

  return (
    <Container>
      <Title>Top 10 - HQ's populares</Title>
      <CardFlatList
        data={charactersToItemData()}
        onChangeItemIndex={onChangeItemIndex}
      />
      <ScrollView style={{ flex: 1 }}>
        <Description description={comics[actualItemIndex]?.description!} />
        <ImgSmallFlatList title={"Criadores"} imgURLs={creatorsImgs} />
        <ShowAllContainer>
          <ShowAllTitle>Quadrinhos</ShowAllTitle>
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

export default Comics;
