import { PipColors } from "../../utils/colors";
import { ScaledSheet } from 'react-native-size-matters'

function useStyles() {
    return ScaledSheet.create({
        container: {
            flex: 1
        },
        titleStyle: {  
            alignSelf: 'center',
            fontFamily: 'Urbanist-ExtraBold',
            top: '55%', 
            fontSize: '14@s',
        },
        cancelTitle: {
            alignSelf: 'flex-end',
            fontFamily: 'Urbanist-Bold',
            fontSize: '14@s',
            marginEnd: '8%'
        },
        line: {
            borderBottomColor: PipColors.pipGrey,
            borderBottomWidth: '2@s',
            marginTop: '15@s'
        },
        welcomestyle: {
            marginTop: '2%',
            fontFamily: 'Urbanist-Bold',
            fontSize: '22@s',
            marginStart: '12@s',
            letterSpacing: '-0@s'
        },
        hintStyle: {
            fontSize: '12@s',
            color: PipColors.piphintclor,
            fontFamily: 'Urbanist-Regular',
            marginTop: '0.5%',
            marginStart: '12@s',
        },
        emailexist: {
            fontSize: '12@s',
            color: 'black',
            fontFamily: 'Urbanist-Bold',
            marginStart: '12@s',
            marginBottom: '4%'
        },
        bottomView: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
        },
        personinfoTest: {
            color: PipColors.piphintclor,
            fontSize: '12@s',
            marginStart: '12@s',
            marginTop: '3%',
            fontFamily: 'Urbanist-Regular',
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
            lineHeight: '48@s',
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
            color: PipColors.piphintclor,
            fontSize: '15@s'
        },
        passwordstyle: {
            color: 'black',
            fontSize: '15@s',
            fontFamily: 'Urbanist-Bold',
            letterSpacing: '-0@s'
        },
    })
}
export default useStyles;