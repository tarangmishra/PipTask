import { StyleSheet } from "react-native";
import { PipColors } from "../../utils/colors";

function useStyles() {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        titleStyle: {
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '15%',
            fontFamily: 'Urbanist-Bold',
            fontSize: 15,
        },
        line: {
            borderBottomColor: PipColors.pipGrey,
            borderBottomWidth: 2,
            marginTop: 15
        },
        welcomestyle: {
            marginTop: '3%',
            fontFamily: 'Urbanist-Bold',
            fontSize: 25,
            marginStart: 12,
            letterSpacing: -0
        },
        hintStyle: {
            fontSize: 12,
            color: PipColors.pipGrey,
            fontFamily: 'Urbanist-Regular',
            marginTop: '3%',
            marginStart: 12,
            marginBottom: '3%'
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
        },
        passwordstyle: {
            color: 'black',
            fontSize: 15,
            fontFamily: 'Urbanist-Bold'
        }
    })
}
export default useStyles;