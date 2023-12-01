import { StyleSheet } from 'react-native';
import { dpHeight, dpWidth, dpFont } from '../utilities/SizeInDp';
import Fonts from '../constant/Fonts';
import { FontSize } from '../constant/FontSize';

const commonStyle = StyleSheet.create({
    tabBar: {
        height: dpHeight(40),
        paddingBottom: 5,
        backgroundColor: '#000',
    },
    tabLabel: { marginTop: -5, fontFamily: Fonts.Regular, textTransform: 'uppercase', fontSize: FontSize.FONT_XXS, letterSpacing: .5 }
});

export default commonStyle;