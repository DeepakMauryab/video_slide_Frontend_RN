import { Dimensions, StyleSheet } from 'react-native';
import { dpHeight, dpWidth, dpFont } from '../utilities/SizeInDp';
import Fonts from '../constant/Fonts';
import { FontSize } from '../constant/FontSize';
import Color from "../constant/Color";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: dpHeight(40),
    backgroundColor: '#222',
  },
  backBtn: {
    padding: dpWidth(10),
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: FontSize.FONT_XL,
  },
  container: {
    paddingHorizontal: 10,
  },
  section: {
    paddingVertical: 5,
  },
  postText: {
    color: '#000',
  },
  bgDark: {
    backgroundColor: '#2d3037',
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    paddingTop: 5,
  },
  post: {
    backgroundColor: '#fff',
    borderWidth: 1,
    width: dpWidth(70),
    borderRadius: 5,
    flexDirection: 'row',
    gap: 10,
    height: dpHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundVideo: {
    height: dpHeight(170),
    backgroundColor: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  inputBox: {
    backgroundColor: '#fff',
    fontFamily: Fonts.Bold,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 15,
    elevation: 10,
    margin: 5,
    shadowColor: '#ffffff1e',
    borderRadius: 4,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontFamily: Fonts.Regular,
  },
  errorText: {
    position: 'absolute',
    left: '0',
    // bottom: 0,
    marginLeft: 10,
    color: 'red',
    fontFamily: Fonts.Regular,
    fontSize: FontSize.FONT_SMALL,
  },
  sideIcons: {
    height: 25,
    width: 25,
    marginBottom: 5,
  },
  sideText: {
    fontSize: 10,
    color: '#fff',
  },
  sideIconTO: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  sideIconPrt: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '40%',
    right: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  stateIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 40,
    height: 70,
    width: 70,
    top: '50%',
    left: '55%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  back: {
    position: 'absolute',
    top: 8,
    left: 0,
    zIndex: 999,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  backInner: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  profile: {
    position: 'absolute',
    bottom: 30,
    left: 15,
    width: '80%',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
    color: '#fff',
  },
  des: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 0.5,
  },
  subscribe: {
    backgroundColor: 'red',
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginLeft: 10,
    borderRadius: 5,
  },
  subText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  sideIcons: {
    height: 25,
    width: 25,
    marginBottom: 5,
  },
  sideText: {
    fontSize: 10,
    color: '#fff',
  },
  sideIconTO: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  sideIconPrt: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '40%',
    right: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  stateIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 40,
    height: 70,
    width: 70,
    top: '50%',
    left: '55%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  back: {
    position: 'absolute',
    top: 10,
    left: 0,
    zIndex: 999,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  backInner: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  profile: {
    position: 'absolute',
    bottom: dpHeight(10),
    left: 0,
    flex: 1,
    padding: 10,
    width: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
    color: '#fff',
  },
  des: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 0.5,
  },
  subscribe: {
    backgroundColor: 'red',
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginLeft: 10,
    borderRadius: 5,
  },
  subText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  backgroundImg: {
    height: windowHeight,
    width: windowWidth
  },
  lightImg: {
    height: dpHeight(180),
    objectFit: 'contain',
  },
  loginContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: windowHeight,
    width: windowWidth,
    flex: 1
  },
  heading: {
    color: '#444',
    fontSize: FontSize.FONT_XXXXXL,
    textAlign: 'right',
    fontFamily: Fonts.Medium,
    letterSpacing: .5,
    marginTop: dpHeight(90),
    marginRight: dpWidth(17)
  },
  noAccountText: {
    color: '#000',
    fontFamily: Fonts.Regular,
    textAlign: 'center',
    marginTop: dpHeight(5),
    flexDirection: 'row'
  },
  loginLottie: {
    height: dpHeight(40),
    width: dpWidth(40),
    position: 'absolute',
    top: '48%',
    right: '5%',
  },
  popup: {
    // width: 300,
    // height: 300,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: dpWidth(30)
  },
  popupHeading: {
    fontSize: FontSize.FONT_XXXL,
    color: Color.black,
    fontFamily: Fonts.Regular
  },
  popupPara: {
    fontSize: FontSize.FONT_SMALL,
    color: Color.black,
    fontFamily: Fonts.Regular
  },
  popupParent: {
    backgroundColor: 'rgba(0,0,0,.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default styles;
