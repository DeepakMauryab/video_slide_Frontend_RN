import { Animated, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import VideoPlay from '../VideoComponent/VideoPlay';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getVideos } from '../../api/Api';
import { Dimensions } from 'react-native';

const VideoHandler = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const scrollX = useRef(new Animated.Value(0)).current;
  const [videoIndex, setVideoIndex] = useState(0);

  const [query, setQuery] = useState({ from: 0, to: 3 })

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const Videos = useSelector(s => s.video.data);
  useEffect(() => {
    dispatch(getVideos(`?from=${query.from}&to=${query.to}`));
  }, [query]);
  useEffect(() => {
    if (videoIndex + 2 == Videos?.length) {
      setQuery({ from: Videos?.length, to: 2 })
    }
  }, [videoIndex]);

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {

    if (viewableItems.length > 0) {
      setVideoIndex(viewableItems[0]?.index);
    }
  }).current;

  return (
    <SafeAreaView style={{ height: windowHeight - 40, width: windowWidth }}>
      <FlatList
        data={Videos}
        style={{ height: windowHeight - 40, width: windowWidth }}
        keyExtractor={item => item.id}
        snapToAlignment="center"
        showsVerticalScrollIndicator={false}
        decelerationRate={0.5}
        onScroll={handleOnScroll}
        initialNumToRender={4}
        onViewableItemsChanged={onViewableItemsChanged}
        pagingEnabled
        disableIntervalMomentum
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        renderItem={item => {
          return <VideoPlay content={{ videoIndex: videoIndex, item: item }} />;
        }}
      />
    </SafeAreaView>
  );
};

export default VideoHandler;

const styles = StyleSheet.create({});
