import { PipColors } from "../utils/colors";
import {ScaledSheet} from 'react-native-size-matters'

function globleStyle(dark) {
  return ScaledSheet.create({
    inputTextStyle: {
      color: PipColors.pipDisableText,
      fontFamily: 'Urbanist-SemiBold',
      height: '46@s',
      fontSize: '16@s',
      margin:'10@s',
      borderWidth: '1@s',
      borderColor: PipColors.pipGrey,
      borderRadius: '10@s',
      letterSpacing:'1@s',
      paddingStart: '15@s'
    },
    labelTextStyle: {
      color: 'black',
      fontFamily: 'Urbanist-Bold',
      fontSize: '15@s',
      marginStart: '10@s'
    }
  });
}
export default globleStyle;