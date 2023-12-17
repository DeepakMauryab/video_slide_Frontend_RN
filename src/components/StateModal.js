import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../Style/Styles';
import Animated, {
  ZoomInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {setModalState} from '../redux/slice/UserActionsSlice';
import Lottie from 'lottie-react-native';
import commonStyle from '../Style/common';

const StateModal = () => {
  const {modalState, modalScaleValue, message, status, para} = useSelector(
    s => s.UserActions,
  );
  const dispatch = useDispatch();
  const scale = useSharedValue(0);
  const [uri, setUri] = useState(null);
  useEffect(() => {
    scale.value = withSpring(modalScaleValue, {duration: 400});
  }, [modalState]);
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  useEffect(() => {
    if (status === 'success') {
      setUri(require('../Assets/lottie/check.json'));
    } else {
      setUri(require('../Assets/lottie/error.json'));
    }
  }, [status]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalState}
      onRequestClose={() => dispatch(setModalState({action: !modalState}))}>
      <View style={styles.popupParent}>
        <Animated.View style={[styles.popup, rStyle, commonStyle.allCenter]}>
          {uri && (
            <Lottie
              source={uri}
              style={{height: 100, width: 200}}
              autoPlay
              speed={0.2}
            />
          )}
          <Animated.Text style={[styles.popupHeading, rStyle]}>
            {message}
          </Animated.Text>
          <Animated.Text style={[styles.popupPara, rStyle]}>
            {para}
          </Animated.Text>
        </Animated.View>
        <TouchableOpacity
          onPress={() => dispatch(setModalState({action: !modalState}))}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            height: '100%',
            width: '100%',
          }}></TouchableOpacity>
      </View>
    </Modal>
  );
};

export default StateModal;
