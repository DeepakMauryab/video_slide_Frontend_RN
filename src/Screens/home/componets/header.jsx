import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyle from '../../../Style/common';
import styles from '../../../Style/Styles';

const Header = () => {
  return (
    <View
      style={[commonStyle.betweenFlex, commonStyle.px_2, commonStyle.bgDark]}>
      <Text style={commonStyle.logoText}>Video Slide</Text>
      <View>
        <Text>Video Slide</Text>
      </View>
    </View>
  );
};

export default Header;
