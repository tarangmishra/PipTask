import { StyleSheet } from "react-native";
import { PipColors } from "../utils/colors";

function globleStyle(dark) {
    return StyleSheet.create({
      inputTextStyle: {
        color: 'red',
        fontFamily: 'Urbanist-Regular',
        paddingHorizontal:0,
        paddingVertical:1,
        height:26,
        marginTop: 3,
        fontSize:18,
      },
      lineStyle: {
        height:1,
        backgroundColor:'goldenrod',
        width:'100%',
        
        marginVertical:3
      },
      labelTextStyle: {
        color: 'goldenrod',
        fontFamily: 'Urbanist-Regular',
        fontSize: 18,
      },
      toastStyle:{
        paddingHorizontal: 20, 
        paddingVertical: 8, 
        fontFamily: 'Urbanist-Medium',
        backgroundColor: PipColors.near_white_1, 
        color: dark ? PipColors.pure_white : PipColors.pure_black
      }
    });
  }
  export default globleStyle;