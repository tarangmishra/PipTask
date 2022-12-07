import React from 'react';
import { Text } from 'react-native';
import { PipColors } from '../utils/colors';
import { ScaledSheet } from 'react-native-size-matters'

const PipText = ({ title, titleStyle, orgStyle}) => {
  const styles = useStyles();

  return <Text style={[styles.textStyle, titleStyle, orgStyle]}>{title}</Text>;
};
function useStyles() {
  return ScaledSheet.create({
    textStyle: {
      color: PipColors.pipBlue,
      fontFamily: 'Urbanist-Regular',
      fontSize: '15@s',
    }
  });
}

export default PipText;
