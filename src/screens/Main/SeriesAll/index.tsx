import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import CardFlatListHorizontal from "../../../commom/components/CardFlatListHorizontal";
import { CardItemProps } from "../../../commom/components/CardFlatListHorizontal/CardItem";
import ModalInfoDetail from "../../../commom/components/ModalInfoDetail";
import ToolBar from "../../../commom/components/ToolBar";
import { Series } from "../../../models/series";
import { RootState } from "../../../redux";
import { hideSideBar, showSideBar } from "../../../redux/sideBarPin";

import {
  Container,
  ModalInfoDescription,
  ModalInfoTitle,
  ModalInfoText,
} from "./styles";

const SeriesAll = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const characters: Series[] = useSelector(
    (state: RootState) => state.seriesReducer.list
  );
  const [modalShowMore, setModalShowMore] = useState(false);
  const [showMoreSerie, setShowMoreSerie] = useState<Series>({});

  const onBackPress = () => {
    dispatch(showSideBar());
    navigation.goBack();
  };

  useEffect(() => {
    setTimeout(() => dispatch(hideSideBar()), 200);
    navigation.navigate("SeriesAll");
  }, []);

  const onDetailPress = (item: CardItemProps, index: number) => {
    setShowMoreSerie(item.data);
    setModalShowMore(true);
  };

  const characterToCardListData = (): CardItemProps[] => {
    const cardItems: CardItemProps[] = [];
    characters.forEach((item: Series, index) => {
      cardItems.push({
        data: item,
        description: item.description!,
        imgURL: `${item.thumbnail?.path}.${item.thumbnail?.extension}`,
        title: item.title!,
        index: index,
      });
    });
    return cardItems;
  };

  return (
    <Container>
      <ModalInfoDetail
        visible={modalShowMore}
        imageUrl={`${showMoreSerie.thumbnail?.path}.${showMoreSerie.thumbnail?.extension}`}
        onRequestClose={() => setModalShowMore(false)}
        rateTitle={"Critica"}
      >
        <ScrollView style={{ flex: 1 }}>
          <ModalInfoTitle>{showMoreSerie.title}</ModalInfoTitle>
          <ModalInfoDescription>
            {showMoreSerie.description}
          </ModalInfoDescription>
        </ScrollView>
      </ModalInfoDetail>
      <ToolBar
        title={"Filmes"}
        iconName={"film-outline"}
        onBackPress={onBackPress}
      />
      <CardFlatListHorizontal
        data={characterToCardListData()}
        onItemDetailPress={onDetailPress}
      />
    </Container>
  );
};

export default SeriesAll;
