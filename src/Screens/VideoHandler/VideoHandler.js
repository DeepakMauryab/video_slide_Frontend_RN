import { Animated, FlatList, Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import VideoPlay from '../VideoComponent/VideoPlay';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getVideos } from '../../api/Api';
import { Dimensions } from 'react-native';
import styles from "../../Style/Styles";

const VideoHandler = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const scrollX = useRef(new Animated.Value(0)).current;
  const [videoIndex, setVideoIndex] = useState(0);

  const [query, setQuery] = useState({ from: 0, to: 3 })

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const Videos = useSelector(s => s.videos.data);
  useEffect(() => {
    if (isFocused)
      dispatch(getVideos(`?from=${query.from}&to=${query.to}`));
  }, [query, isFocused]);
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
    <SafeAreaView>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Icons/left-arrow.png')}
            tintColor={'#fff'}
            style={[styles.sideIcons, { height: 13, width: 13 }]}
          />
        </TouchableOpacity>
        <View style={styles.backInner}>
          <TouchableOpacity>
            <Image
              source={require('../../Assets/Icons/search.png')}
              tintColor={'#fff'}
              style={[styles.sideIcons, { height: 15, width: 15 }]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../Assets/Icons/camera.png')}
              tintColor={'#fff'}
              style={[styles.sideIcons, { height: 20, width: 20 }]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={Videos}
        // style={{ height: windowHeight - 40, width: windowWidth }}
        keyExtractor={(item, index) => index}
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

