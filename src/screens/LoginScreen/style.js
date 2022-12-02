import { StyleSheet } from "react-native";
import { PipColors } from "../../utils/colors";

function useStyles() {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        titleStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15%',
            fontFamily: 'Urbanist-Bold',
            fontSize: 18,
            padding: 2
        },
        line: {
            borderBottomColor: PipColors.pipGrey,
            borderBottomWidth: 2,
            marginTop: 15
        },
        welcomestyle: {
            marginTop: '5%',
            fontFamily: 'Urbanist-Bold',
            fontSize: 25,
            padding: 2
        },
        hintStyle: {
            fontSize: 12,
            color: PipColors.pipGrey,
            fontFamily: 'Urbanist-Regular',
            marginTop: '5%'
        },
        bottomView: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
        },
        disbaleTextInput: {
            backgroundColor: PipColors.pipdisbalegry
        }
    })
}
export default useStyles;