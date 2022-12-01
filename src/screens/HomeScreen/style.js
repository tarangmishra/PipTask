import { StyleSheet } from "react-native";
import { PipColors } from '../../utils/colors'
function useStyles(width) {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        secondContainer: {
            flex: 0,
        },
        imageStyle: {
            width: width,
            height: '72%'
        },
        pagination: {
            right: '80%',
        },
        skipText: {
            alignSelf: 'flex-end',
            bottom: 50,
            fontSize: 20,
            marginEnd: 10,
            color: PipColors.pipBlue,
            fontFamily: 'Urbanist-Medium',
        },
        pentair: {
            color: PipColors.pipBlue,
            alignSelf: 'flex-start',
            marginTop: 25,
            marginStart: 12,
            fontSize: 12,
            fontFamily: 'Urbanist-Bold'
        },
        orgStyle: {
            alignSelf: 'flex-start',
            marginStart: 12,
            marginEnd: 12,
            marginTop: 20,
            color: PipColors.pipBlue,
            fontFamily: 'Urbanist-ExtraBold',
            fontSize: 18,
            letterSpacing: -0
        },
        marksStyle: {
            alignSelf: 'flex-start',
            marginStart: 12,
            marginEnd: 12,
            marginTop: 15,
            fontSize: 12,
            color: PipColors.pipGrey,
            fontFamily: 'Urbanist-Bold',
        },
        btnStyle: {
            top: '5%'
        }
    })
}
export default useStyles;