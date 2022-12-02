import { StyleSheet } from "react-native";
import { PipColors } from "../utils/colors";

function globleStyle(dark) {
  return StyleSheet.create({
    inputTextStyle: {
      color: PipColors.pipBlue,
      fontFamily: 'Urbanist-Regular',
      height: 46,
      fontSize: 15,
      margin:10,
      marginEnd: 30,
      borderWidth: 1,
      borderColor: PipColors.pipGrey,
      borderRadius: 10
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