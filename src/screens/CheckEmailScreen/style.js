import { PipColors } from "../../utils/colors";
import { ScaledSheet } from 'react-native-size-matters'

function useStyles() {
    return ScaledSheet.create({
        container: {
            flex: 1
        },
        titleStyle: {
            justifyContent: 'center',
            marginTop: '8%',
            marginStart: '12@s',
            fontFamily: 'Urbanist-Bold',
            fontSize: '15@s',
        },
        eyeconStyle: {
            justifyContent: 'center',
            marginTop: '7%',
            marginStart: '12@s',
            fontFamily: 'Urbanist-Bold',
            fontSize: '23@s'
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
            marginTop: '2%',
            marginStart: '12@s',
            marginBottom: '2%'
        },
        bottomView: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
        },
        bottomViewSingin: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: '7%',
        },
        validpassword: {
            color: 'red',
            marginStart: '12@s',
            fontFamily: 'Urbanist-Regular'
        },
        sixdigitStyle: {
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '2%',
            marginStart: '12@s',
            fontFamily: 'Urbanist-Bold',
            fontSize: '15@s',
            color: 'black'
        },
        codeFieldRoot: {
            marginTop: '4%',
            marginStart: '12@s',
            marginEnd: '12@s',
            marginBottom: '3%'
        },
        cell: {
            width: '40@s',
            height: '50@s',
            lineHeight: '38@s',
            fontSize: '24@s',
            borderWidth: '2@s',
            borderColor: '#00000030',
            borderRadius: '10@s',
            textAlign: 'center',
        },
        focusCell: {
            borderColor: PipColors.pipbuttonColor,
        },
        centerview: {
            marginStart: '12@s',
            marginBottom: '5@s',
            padding: '2@s'
        },
        flatText: {
          color: PipColors.piphintclor
        },
        passwordstyle: {
            color: 'black',
            fontSize: '15@s',
            fontFamily: 'Urbanist-Bold'
        },
    })
}
export default useStyles;