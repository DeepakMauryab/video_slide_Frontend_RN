import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Share,
} from 'react-native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { baseURL } from '../../api/AxiosAuth';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from "../../Style/Styles";

const VideoPlay = ({ content }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { videoIndex, item } = content;
  const isFocused = useIsFocused();
  const videoRef = useRef();
  const [paused, setPaused] = useState(videoIndex);
  const [stateIcons, setStateIcons] = useState(false);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [sliderVal, setSliderVal] = useState(0);
  const [progress, setProgress] = useState({});
  const navigation = useNavigation();

  const changeLikeState = state => {
    if (state === 'like' && !like) {
      setDisLike(false);
      setLike(true);
    } else if (state === 'dislike' && !disLike) {
      setDisLike(true);
      setLike(false);
    } else {
      setDisLike(false);
      setLike(false);
    }
  };
  const onShare = async () => {
    try {
      const share = await Share.share({
        message:
          'subscribe My youtube channel https://www.youtube.com/@theCodeDefinition',
      });
    } catch (error) { }
  };
  const videoState = () => {
    if (paused === -1) {
      setPaused(videoIndex);
    } else {
      setPaused(-1);
    }
    setStateIcons(true);
    setTimeout(() => {
      setStateIcons(false);
    }, 700);
  };
  useMemo(() => {
    setPaused(videoIndex);
  }, [videoIndex]);

  return (
    <View
      style={{
        backgroundColor: '#000',
        height: windowHeight - 30,
        width: windowWidth,
        flex: 1,
      }}>
      <TouchableOpacity activeOpacity={0.9} onPress={videoState}>
        <Video
          repeat
          source={{ uri: `${baseURL}${item?.item?.video}` }}
          style={{ height: "100%", width: windowWidth }}
          resizeMode="contain"
          paused={paused !== item.index}
          ref={videoRef}
          onProgress={e => {
            setProgress(e);
            setSliderVal(e?.currentTime);
          }}
        />
        {stateIcons && (
          <View style={styles.stateIcon}>
            <Image
              source={
                paused === -1
                  ? require('../../Assets/Icons/pause.png')
                  : require('../../Assets/Icons/play.png')
              }
              tintColor={'#fff'}
              style={{
                height: 30,
                width: 30,
              }}
            />
          </View>
        )}
      </TouchableOpacity>

      <LinearGradient
        colors={['#000', '#0000006b', 'transparent']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.profile}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity style={{ marginRight: 10, marginTop: 6 }}>
            <Image
              source={require('../../Assets/Icons/profile.png')}
              style={[styles.sideIcons, { marginBottom: 0 }]}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Deepak Maurya</Text>
          <TouchableOpacity style={styles.subscribe}>
            <Text style={styles.subText}>Suscribe</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.des}>
          {item?.item?.name}
        </Text>
      </LinearGradient>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          right: 0,
        }}>
        <Slider
          style={{
            width: '110%',
            marginHorizontal: -15,
          }}
          minimumValue={0}
          maximumValue={progress?.seekableDuration}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#ddd"
          thumbTintColor="transparent"
          value={sliderVal}
          onValueChange={state => {
            setSliderVal(state);
            videoRef.current.seek(state);
          }}
        />
      </View>

      <View style={styles.sideIconPrt}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => { }}
          style={[styles.sideIconTO, { marginBottom: 22, width: 1, height: 1 }]}>
          <Image
            source={require('../../Assets/Icons/more.png')}
            tintColor={'#fff'}
            style={styles.sideIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => changeLikeState('like')}
          style={styles.sideIconTO}>
          <Image
            source={require('../../Assets/Icons/like.png')}
            tintColor={like ? '#1f6dff' : '#fff'}
            style={styles.sideIcons}
          />
          <Text style={styles.sideText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => changeLikeState('dislike')}
          style={styles.sideIconTO}>
          <Image
            source={require('../../Assets/Icons/dislike.png')}
            tintColor={disLike ? '#ff0000' : '#fff'}
            style={styles.sideIcons}
          />
          <Text style={styles.sideText}>Dislike</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.sideIconTO}>
          <Image
            source={require('../../Assets/Icons/comment.png')}
            tintColor={'#fff'}
            style={styles.sideIcons}
          />
          <Text style={styles.sideText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onShare()}
          style={styles.sideIconTO}>
          <Image
            source={require('../../Assets/Icons/share.png')}
            tintColor={'#fff'}
            style={[styles.sideIcons, { height: 22, width: 22 }]}
          />
          <Text style={styles.sideText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoPlay;

