import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import CardFlatListHorizontal from "../../../commom/components/CardFlatListHorizontal";
import { CardItemProps } from "../../../commom/components/CardFlatListHorizontal/CardItem";
import ModalInfoDetail from "../../../commom/components/ModalInfoDetail";
import ToolBar from "../../../commom/components/ToolBar";
import { Comic } from "../../../models/comics";
import { RootState } from "../../../redux";
import { hideSideBar, showSideBar } from "../../../redux/sideBarPin";

import {
  Container,
  ModalInfoDescription,
  ModalInfoTitle,
  ModalInfoText,
} from "./styles";

const ComicsAll = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const comics: Comic[] = useSelector(
    (state: RootState) => state.comicsReducer.list
  );
  const [modalShowMore, setModalShowMore] = useState(false);
  const [showMoreComic, setShowMoreComic] = useState<Comic>({});

  const onBackPress = () => {
    dispatch(showSideBar());
    navigation.goBack();
  };

  useEffect(() => {
    setTimeout(() => dispatch(hideSideBar()), 200);
    navigation.navigate("SeriesAll");
  }, []);

  const onDetailPress = (item: CardItemProps, index: number) => {
    setShowMoreComic(item.data);
    setModalShowMore(true);
  };

  const characterToCardListData = (): CardItemProps[] => {
    const cardItems: CardItemProps[] = [];
    comics.forEach((item: Comic, index) => {
      cardItems.push({
        data: item,
        description: item.variantDescription!,
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
        imageUrl={`${showMoreComic.thumbnail?.path}.${showMoreComic.thumbnail?.extension}`}
        onRequestClose={() => setModalShowMore(false)}
        rateTitle={"Critica"}
      >
        <ScrollView style={{ flex: 1 }}>
          <ModalInfoTitle>{showMoreComic.title}</ModalInfoTitle>
          <ModalInfoDescription>
            {showMoreComic.description}
          </ModalInfoDescription>
        </ScrollView>
      </ModalInfoDetail>
      <ToolBar
        title={"HQ's"}
        iconName={"book-outline"}
        onBackPress={onBackPress}
      />
      <CardFlatListHorizontal
        data={characterToCardListData()}
        onItemDetailPress={onDetailPress}
      />
    </Container>
  );
};

export default ComicsAll;
