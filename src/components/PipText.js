import React from 'react';
import {Text, StyleSheet} from 'react-native';

const PipText = ({title}) => {
  const styles = useStyles();

  return <Text style={styles.textStyle}>{title}</Text>;
};
function useStyles() {
  return StyleSheet.create({
    textStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      color: 'goldenrod',
      fontFamily: 'Urbanist-Regular',
      fontSize:15,
    },
  });
}

export default PipText;
