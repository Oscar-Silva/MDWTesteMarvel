import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  ListRenderItem,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import ListItem, { ItemData } from "./ListItem";
import { ITEM_HEIGHT, ITEM_WIDTH } from "./ListItem/styles";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

import { Container } from "./styles";

interface ListProps {
  data: ItemData[];
  onChangeItemIndex?(activeItemIndex: number): void;
  onLeftSwipe?(activeItemIndex: number): void;
  onRightSwipe?(activeItemIndex: number): void;
}

const CardFlatList = ({
  data,
  onChangeItemIndex = () => {},
  onRightSwipe = () => {},
  onLeftSwipe = () => {},
}: ListProps) => {
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const [itemIndex, setItemIndex] = useState(0);
  const setActiveItemIndex = useCallback((activeIndex) => {
    setItemIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
    onChangeItemIndex(activeIndex);
  }, []);

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderItems = ({ item, index }: { item: ItemData; index: number }) => {
    const inputRange = [index - 1, index, index + 1];
    const translateX = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [80, 0, -100],
    });

    const translateY = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [-40, 0, 100],
    });

    const scale = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [0.7, 1, 1.3],
    });

    const opacity = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [1.8 / 3, 1, 0],
    });

    return (
      <ListItem
        key={index}
        item={item}
        index={index}
        actual={false}
        containerStyle={{
          position: "absolute",
          transform: [{ translateX }, { translateY }, { scale }],
          opacity,
        }}
        showRateBox={itemIndex === index ? true : false}
      />
    );
  };

  const CellRendererComponent = ({
    item,
    index,
    children,
    style,
    ...props
  }: {
    item: ItemData;
    index: number;
    children: any;
    style: StyleProp<ViewStyle>;
  }) => {
    const newStyle: StyleProp<ViewStyle> = [
      style,
      {
        zIndex: data.length - index,
      },
    ];

    return (
      <View style={newStyle} index={index} {...props}>
        {children}
      </View>
    );
  };

  return (
    <FlingGestureHandler
      key={"left"}
      direction={Directions.LEFT || Directions.UP}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (itemIndex === data.length - 1) {
            return null;
          }
          onLeftSwipe(itemIndex);
          setActiveItemIndex(itemIndex + 1);
        }
      }}
    >
      <FlingGestureHandler
        key={"right"}
        direction={Directions.RIGHT || Directions.DOWN}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (itemIndex === 0) {
              return null;
            }
            onRightSwipe(itemIndex);
            setActiveItemIndex(itemIndex - 1);
          }
        }}
      >
        <Container>
          <AnimatedFlatList
            data={data}
            style={{
              display: "flex",
              height: ITEM_HEIGHT,
            }}
            renderItem={renderItems}
            contentContainerStyle={{
              flex: 1,
            }}
            horizontal
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={CellRendererComponent}
            keyExtractor={(item, index) => index.toString()}
          />
        </Container>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default CardFlatList;
