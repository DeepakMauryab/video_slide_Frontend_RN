import {StyleSheet, Dimensions} from 'react-native';
import {dpHeight, dpWidth, dpFont} from '../utilities/SizeInDp';
import Fonts from '../constant/Fonts';
import {FontSize} from '../constant/FontSize';
import Color from '../constant/Color';
const innerWidth = Dimensions.get('screen').width;
const innerHeight = Dimensions.get('screen').height;

const commonStyle = StyleSheet.create({
  tabBar: {
    height: dpHeight(40),
    paddingBottom: 5,
    backgroundColor: '#000',
    // display: 'none'
  },
  tabLabel: {
    marginTop: -5,
    fontFamily: Fonts.Regular,
    textTransform: 'uppercase',
    fontSize: FontSize.FONT_XXS,
    letterSpacing: 0.5,
  },
  betweenFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  aroundFlex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  allCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: Color.themeText,
    fontFamily: Fonts.Medium,
    fontSize: FontSize.FONT_XXL,
  },
  px_2: {
    paddingHorizontal: dpWidth(20),
  },
  bgDark: {
    backgroundColor: Color.black,
  },
  videoListing: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  videoListBox: {
    width: innerWidth / 2,
    height: 200,
    // margin: 5,
    borderWidth: 1,
  },
});

export default commonStyle;
