import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import styles from '../../Style/Styles';
import InputBox from '../../components/InputBox';
import {useForm} from 'react-hook-form';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {uploadVideoApi} from '../../api/Api';

const UploadVideo = ({route, navigation}) => {
  const videoRef = useRef();
  const isFocused = useIsFocused();
  const {register, control, handleSubmit, getValues} = useForm();
  const [paused, setPaused] = useState(true);
  const [videoData, setVideoData] = useState(route.params.videoData ?? {});
  const dispatch = useDispatch();

  const submitVideo = () => {
    const {title, description} = getValues();
    const formData = new FormData();
    formData.append('name', title);
    formData.append('description', description);
    formData.append('video', videoData);
    formData.append('user_Id', 2);
    // return;
    dispatch(uploadVideoApi(formData, navigation));
  };

  useEffect(() => {
    if (isFocused) {
      setVideoData(route.params.videoData);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{height: '100%'}}>
        <View style={styles.uploadHeader}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}>
            <FontAwesome name="chevron-left" size={15} color="#fff" />
            <Text style={styles.headerText}>Upload Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.post}
            onPress={handleSubmit(submitVideo)}>
            <FontAwesome name="upload" size={13} color="#000" />
            <Text style={styles.postText}>Post</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setPaused(!paused)}
          activeOpacity={0.8}>
          <Video
            repeat
            source={{uri: videoData.path}}
            resizeMode="contain"
            paused={paused}
            ref={videoRef}
            style={styles.backgroundVideo}
          />
          {paused && (
            <View
              style={[
                styles.stateIcon,
                {borderWidth: 0.8, borderColor: '#ddd'},
              ]}>
              <Image
                source={require('../../Assets/Icons/pause.png')}
                tintColor={'#fff'}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </View>
          )}
        </TouchableOpacity>
        <ScrollView
          style={[styles.container, styles.section, styles.bgDark]}
          keyboardShouldPersistTaps="handled">
          <InputBox
            name={'title'}
            control={control}
            placeholder={'Enter Your Video Title !'}
            rules={{required: true}}
            bg={'#202124'}
          />
          <InputBox
            name={'description'}
            control={control}
            placeholder={'Write a Description for your Video'}
            rules={{required: true}}
            textarea={true}
            lines={20}
            bg={'#202124'}
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default UploadVideo;
