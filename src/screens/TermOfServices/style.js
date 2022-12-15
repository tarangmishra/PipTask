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
            marginEnd: '8%',
            color: PipColors.pipbuttonColor
        },
        line: {
            borderBottomColor: PipColors.pipGrey,
            borderBottomWidth: '2@s',
            marginTop: '15@s'
        },
        hintStyle: {
            fontSize: '14@s',
            fontFamily: 'Urbanist-Regular',
            color: PipColors.piphintclor,
            marginStart: '12@s',
            marginTop: '5%',
        },
        hintStyleServices: {
            fontSize: '12@s',
            fontFamily: 'Urbanist-Regular',
            color: PipColors.piphintclor,
            marginTop: '5%',
            marginStart: '12@s',
        },
        welcomestyle: {
            marginTop: '2%',
            fontFamily: 'Urbanist-Bold',
            fontSize: '22@s',
            marginStart: '12@s',
            letterSpacing: '-0@s'
        },

    })
}
export default useStyles;