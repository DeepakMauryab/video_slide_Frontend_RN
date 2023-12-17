import {
  View,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../../Style/Styles';
import commonStyle from '../../../Style/common';
import {dpHeight, dpWidth} from '../../../utilities/SizeInDp';
import Animated, {
  FadeInUp,
  FadeInDown,
  ZoomInDown,
  ZoomIn,
} from 'react-native-reanimated';
import IconInput from '../../../components/IconInput';
import {useForm} from 'react-hook-form';
import ButtonComponent from '../../../components/ButtonComponent';
import Validation from '../../../constant/Validation';
import Lottie from 'lottie-react-native';
import Color from '../../../constant/Color';
import Screens from '../../../constant/Screens';
import {createUser} from '../../../api/Api';
import {useDispatch} from 'react-redux';

const SignUp = ({navigation}) => {
  const {control, handleSubmit, getValues, watch, setValue} = useForm();
  const [submitRef, setSubmitRef] = useState(false);
  const dispatch = useDispatch();

  const loginSubmit = () => {
    const {name, mobile, password} = getValues();
    setSubmitRef(true);
    const payload = {
      name,
      channel: name,
      channelHandle: '@' + new Date().getTime(),
      mobile,
      password,
    };

    dispatch(createUser({payload, navigation}));
  };
  const {mobileNumber, confirmPassMessage, password, Name} = Validation;
  return (
    <KeyboardAvoidingView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <Animated.View entering={ZoomIn.delay(10).duration(100).springify()}>
            <ImageBackground
              style={styles.backgroundImg}
              source={require('../../../Assets/images/background.png')}
            />
          </Animated.View>
          <View style={styles.loginContent}>
            <View style={commonStyle.aroundFlex}>
              <Animated.Image
                entering={FadeInUp.delay(300).duration(1000).springify()}
                style={styles.lightImg}
                source={require('../../../Assets/images/light.png')}
              />
              <Animated.Image
                entering={FadeInUp.delay(300).duration(3000).springify()}
                style={[styles.lightImg, {height: dpHeight(150)}]}
                source={require('../../../Assets/images/light.png')}
              />
            </View>
            <Animated.Text
              entering={FadeInDown.delay(300).duration(1000).springify()}
              style={styles.heading}>
              Sign Up
            </Animated.Text>
            <Lottie
              source={require('../../../Assets/lottie/roundup.json')}
              loop
              autoPlay
              style={styles.loginLottie}
            />
            <View style={{marginTop: dpHeight(40)}}>
              <Animated.View
                entering={FadeInUp.delay(300).duration(1000).springify()}>
                <IconInput
                  name={'name'}
                  control={control}
                  rules={Name}
                  label="Name"
                  image={require('../../../Assets/Icons/phonesmall.png')}
                />
              </Animated.View>
              <Animated.View
                entering={FadeInUp.delay(300).duration(1000).springify()}>
                <IconInput
                  name={'mobile'}
                  control={control}
                  rules={mobileNumber}
                  keyboard="numeric"
                  label="Mobile Number"
                  image={require('../../../Assets/Icons/phonesmall.png')}
                />
              </Animated.View>
              <Animated.View
                entering={FadeInUp.delay(250).duration(2500).springify()}>
                <IconInput
                  name={'password'}
                  control={control}
                  rules={password}
                  label="Password"
                  secureTextEntry={true}
                  image={require('../../../Assets/Icons/password.png')}
                />
              </Animated.View>
              <Animated.View
                entering={FadeInUp.delay(250).duration(2500).springify()}>
                <IconInput
                  name={'confirmPassword'}
                  control={control}
                  rules={{
                    validate: val => {
                      if (watch('password') != val) {
                        return confirmPassMessage;
                      }
                    },
                  }}
                  label="Confirm Password"
                  secureTextEntry={true}
                  image={require('../../../Assets/Icons/password.png')}
                />
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(400).duration(3000).springify()}>
                <ButtonComponent
                  name="Submit"
                  submitRef={submitRef}
                  onSubmit={handleSubmit(loginSubmit)}
                />
              </Animated.View>
              <Animated.Text
                style={styles.noAccountText}
                entering={FadeInDown.delay(300).duration(1000).springify()}>
                Already Have an Account?{' '}
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    navigation.navigate(Screens.login);
                  }}>
                  <Text style={{color: Color.theme}}>login</Text>
                </TouchableOpacity>
              </Animated.Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
