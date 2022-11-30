import { StyleSheet } from "react-native";
import {PipColors} from '../../utils/colors'
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
            height: '55%'
        },
        pagination: {
            left: 8,
        },
        skipText: {
            alignSelf: 'flex-end',
            bottom: 30,
            fontSize: 20,
            marginEnd: 10,
            color: PipColors.pipBlue,
            fontFamily: 'Urbanist-Medium',
        },
        pentair:{
            color: PipColors.pipBlue,
            alignSelf: 'flex-start',
            margin: 25,
            fontSize:15,
            fontFamily: 'Urbanist-Bold'
        },
        orgStyle: {
            alignSelf: 'flex-start',
            marginStart:25,
            marginEnd:25,
            color: PipColors.pipBlue,
            fontFamily: 'Urbanist-Medium',
            fontSize:15
        }
    })
}
export default useStyles;