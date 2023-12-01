import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Screens from '../../constant/Screens';
import Lottie from 'lottie-react-native';
import { FontSize } from '../../constant/FontSize';
import Fonts from "../../constant/Fonts";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: Screens.BottomTab }],
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.body}>
      <Lottie
        source={require('./splash.json')}
        autoPlay
        style={styles.loader1}

      />
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Video Player</Text>
        <Text style={[styles.welcomeText, { fontSize: FontSize.FONT_SMALL, fontFamily: Fonts.SemiBold, letterSpacing: .5 }]}>
          Welcome To Our Reels
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
  },
  loader1: {
    width: '100%',
    flex: 1,
    // marginTop: dpHeight(100),
  },
  welcome: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -70 }, { translateY: -50 }],
  },
  welcomeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: FontSize.FONT_XXXL,
    fontFamily: Fonts.Regular,
  },
});
