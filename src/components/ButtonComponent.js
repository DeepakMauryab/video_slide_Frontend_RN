import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { dpHeight, dpWidth } from "../utilities/SizeInDp"
import { FontSize } from "../constant/FontSize"
import Fonts from "../constant/Fonts"
import Color from "../constant/Color"
import Lottie from "lottie-react-native"

const ButtonComponent = ({ name, onSubmit, submitRef = false }) => {
    const [active, setActive] = useState(false);
    const changeState = () => {
        setActive(true);
        if (submitRef) {
            setTimeout(() => {
                setActive(false);
            }, 3000)
        } else {
            setTimeout(() => {
                setActive(false);
            }, 1000)
        }
    }
    return (
        <TouchableOpacity activeOpacity={.7}
            style={style.button}
            onPress={() => { onSubmit(); changeState() }}
        >
            {active ?
                <Lottie
                    source={require('../Assets/lottie/bolljump.json')}
                    autoPlay
                    style={style.loginLottie}
                />
                : <Text style={style.btnText}>{name}</Text>
            }

        </TouchableOpacity>
    )
}

export default ButtonComponent

const style = StyleSheet.create({
    button: {
        backgroundColor: Color.theme,
        width: "70%",
        alignSelf: 'center',
        borderRadius: 50,
        paddingHorizontal: dpWidth(15),
        paddingVertical: dpHeight(17),
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        textAlign: 'center',
        fontSize: FontSize.FONT_XL,
        fontFamily: Fonts.Regular,
        letterSpacing: 1,
        color: Color.themeText,
        position: 'absolute',
    }, loginLottie: {
        height: dpHeight(80),
        width: dpWidth(80),
        position: 'absolute',
    }
})