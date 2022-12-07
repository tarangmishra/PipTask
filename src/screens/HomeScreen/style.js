import { PipColors } from '../../utils/colors'
import {ScaledSheet} from 'react-native-size-matters'
function useStyles(width) {
    return ScaledSheet.create({
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
            bottom: '20@s',
            fontSize: '14@s',
            end: '10@s',
            color: PipColors.pipBlue,
            fontFamily: 'Urbanist-Bold',
        },
        pentair: {
            color: PipColors.pipBlue,
            marginStart: '12@s',
            marginTop: "6%",
            fontSize: '12@s',
            fontFamily: 'Urbanist-Bold'
        },
        orgStyle: {
            marginTop: '4%',
            marginStart: '12@s',
            color: PipColors.pipBlue,
            fontFamily: 'Urbanist-ExtraBold',
            fontSize: '25@s',
        },
        marksStyle: {
            marginTop: '3%',
            fontSize: '12@s',
            marginStart: '12@s',
            color: PipColors.piphintclor,
            fontFamily: 'Urbanist-Regular',
        },
        btnStyle: {
            position: 'absolute',
            bottom: 0,
        }
    })
}
export default useStyles;