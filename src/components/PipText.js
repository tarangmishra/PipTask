import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { PipColors } from '../utils/colors';

const PipText = ({title,titleStyle,orgStyle}) => {
  const styles = useStyles();

  return <Text style={[styles.textStyle,titleStyle,orgStyle]}>{title}</Text>;
};
function useStyles() {
  return StyleSheet.create({
    textStyle: {
      color: PipColors.pipBlue,
      fontFamily: 'Urbanist-Regular',
      fontSize:15,
    }
  });
}

export default PipText;
