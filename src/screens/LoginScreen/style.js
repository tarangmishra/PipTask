import { PipColors } from "../../utils/colors";
import {ScaledSheet} from 'react-native-size-matters'

function useStyles() {
    return ScaledSheet.create({
        container: {
            flex: 1
        },
        titleStyle: {
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '15%',
            fontFamily: 'Urbanist-ExtraBold',
            fontSize: '14@s',
        },
        line: {
            borderBottomColor: PipColors.pipGrey,
            borderBottomWidth: '2@s',
            marginTop: '15@s'
        },
        welcomestyle: {
            marginTop: '3%',
            fontFamily: 'Urbanist-Bold',
            fontSize: '25@s',
            marginStart: '12@s',
            letterSpacing: '-0@s'
        },
        hintStyle: {
            fontSize: '15@s',
            color: PipColors.piphintclor,
            fontFamily: 'Urbanist-Regular',
            marginTop: '4%',
            marginStart: '12@s',
            marginBottom: '3%'
        },
        bottomView: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            borderColor: PipColors.pipbuttonColor
        },
        bottomViewSingin: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: '7%',
        },
        disbaleTextInput: {
            backgroundColor: PipColors.pipdisbalegry,
        },
        passwordstyle: {
            color: 'black',
            fontSize: '15@s',
            fontFamily: 'Urbanist-Bold',
        },
        forgotPassword: {
            fontFamily: 'Urbanist-Bold',
            fontSize: '14@s',
            marginStart: '15@s',
            marginTop: '1%',
            color: PipColors.pipbuttonColor
        },
        validpassword: {
            color: 'red',
            marginStart: '12@s',
            fontFamily: 'Urbanist-Regular'
        }
    })
}
export default useStyles;