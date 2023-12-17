import {View, Text, TextInput, StyleSheet, Image, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Controller} from 'react-hook-form';
import styles from '../Style/Styles';
import {dpHeight, dpWidth} from '../utilities/SizeInDp';
import {FontSize} from '../constant/FontSize';
import Fonts from '../constant/Fonts';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import Color from '../constant/Color';

const IconInput = ({
  name,
  control,
  label = false,
  rules,
  textarea = false,
  lines = 2,
  keyboard,
  image,
  secureTextEntry,
}) => {
  const top = useSharedValue(0);
  const [inputVal, setInputVal] = useState('');

  const focus = (state, text) => {
    if (state) {
      top.value = withSpring(-17);
    } else {
      if (inputVal == '') {
        top.value = withSpring(0);
      }
    }
  };
  const focus2 = text => {
    setInputVal(text);
    top.value = withSpring(-17);
  };
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      top.value = withSpring(-17);
    });
  }, []);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: {onChange, onBlur, value, ref},
        fieldState: {error},
      }) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignItems: 'flex-end',
              marginLeft: 20,
              marginBottom: dpHeight(35),
            }}>
            <Image
              source={image}
              style={{width: 25, height: 25, marginRight: 10}}
              tintColor={Color.theme}
            />
            <View style={style.container}>
              <Animated.Text style={[styles.label, style.label, {top}]}>
                {label}
              </Animated.Text>
              <TextInput
                value={value}
                onChangeText={text => {
                  onChange(text);
                  focus2(text);
                }}
                onBlur={e => {
                  onBlur();
                  focus(false, e);
                }}
                ref={ref}
                placeholderTextColor={'#c7c7c7'}
                multiline={textarea}
                numberOfLines={lines}
                keyboardType={keyboard}
                style={style.input}
                onFocus={e => focus(true, e)}
                secureTextEntry={secureTextEntry}
              />
              {error && (
                <Text style={[styles.errorText, {bottom: -20}]}>
                  {error?.message + '*' || 'This Field Is Required*'}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

export default IconInput;

const style = StyleSheet.create({
  label: {
    color: '#555',
    marginBottom: 0,
    position: 'absolute',
    fontSize: FontSize.FONT_LARGE,
  },
  container: {
    alignSelf: 'center',
    width: '90%',
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    // backgroundColor: 'red',
    width: '100%',
    height: dpHeight(18),
    color: '#444',
    fontFamily: Fonts.Regular,
    padding: 0,
    paddingHorizontal: dpWidth(10),
  },
});
