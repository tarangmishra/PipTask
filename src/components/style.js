import { StyleSheet } from "react-native";
import { PipColors } from "../utils/colors";

function globleStyle(dark) {
  return StyleSheet.create({
    inputTextStyle: {
      color: PipColors.pipDisableText,
      fontFamily: 'Urbanist-SemiBold',
      height: 46,
      fontSize: 18,
      margin:10,
      marginEnd: 30,
      borderWidth: 1,
      borderColor: PipColors.pipGrey,
      borderRadius: 10,
      letterSpacing:1
    },
    labelTextStyle: {
      color: 'black',
      fontFamily: 'Urbanist-Bold',
      fontSize: 15,
      marginStart: 10
    }
  });
}
export default globleStyle;