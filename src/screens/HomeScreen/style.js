import { StyleSheet } from "react-native";
import { PipColors } from '../../utils/colors'
function useStyles(width) {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        imageStyle: {
            width: width,
            height: '65%'
        },
        pagination: {
            right: '80%',
        },
        skipText: {
            position: 'absolute',
            alignSelf: 'flex-end',
            bottom: 20,
            fontSize: 14,
            end: 10,
            color: PipColors.pipBlue,
            fontFamily: 'Urbanist-Bold',
        },
        pentair: {
            color: PipColors.pipBlue,
            marginStart: 12,
            marginTop: "6%",
            fontSize: 12,
            fontFamily: 'Urbanist-Bold'
        },
        orgStyle: {
            marginTop: '4%',
            marginStart: 12,
            color: PipColors.pipBlue,
            fontFamily: 'Urbanist-ExtraBold',
            fontSize: 25,
        },
        marksStyle: {
            marginTop: '3%',
            fontSize: 12,
            marginStart: 12,
            color: PipColors.pipDisableText,
            fontFamily: 'Urbanist-Regular',
        },
        btnStyle: {
            position: 'absolute',
            bottom: 0
        }
    })
}
export default useStyles;