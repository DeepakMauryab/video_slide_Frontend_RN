import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { dpFont, dpWidth } from '../utilities/SizeInDp';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constant/Screens';

const TabMainButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const SelectVideo = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
      includeBase64: true,
      //   multiple: true,
    }).then(image => {
      navigation.navigate(Screens.UploadVideo, { videoData: image });
    });
  };
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        onPress={() => setModalVisible(!modalVisible)}>
        <Image
          style={styles.button}
          source={require('../Assets/tabIcon/plus.png')}
          tintColor={'#fff'}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.popUp}>
          <View
            style={{
              height: dpWidth(300),
              backgroundColor: '#333',
              width: '100%',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                alignItems: 'center',
              }}>
              <Text>Actions</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={styles.button}
                  source={require('../Assets/tabIcon/plus.png')}
                  tintColor={'#fff'}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.createBtn}
                activeOpacity={0.7}
                onPress={SelectVideo}>
                <Text style={styles.createBtnText}>Upload Video</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default TabMainButton;

const styles = StyleSheet.create({
  popUp: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    alignItems: 'center',
    transform: [{ translateY: -20 }],
    // backgroundColor: 'red',
  },
  button: {
    // top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: dpWidth(40),
    height: dpWidth(40),
    borderRadius: 100,
    borderColor: '#fff',
    backgroundColor: '#000',
  },
  createBtn: {
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    padding: 10,
    borderColor: '#ddd',
  },
  createBtnText: {
    color: '#ddd',
    fontSize: dpFont(15),
    letterSpacing: 0.2,
  },
});
