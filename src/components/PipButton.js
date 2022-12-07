import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { PipColors } from '../utils/colors';
import {ScaledSheet} from 'react-native-size-matters'

const PipButton = ({title, onPress, loading, buttonStyle, btnStyle}) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonStyle,btnStyle]}
      onPress={onPress}>
      {loading ? (
        <View style={[styles.titleStyle, styles.loaderBackgroundStyle]}>
          <ActivityIndicator color={'blue'} />
        </View>
      ) : (
        <Text style={styles.titleStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

function useStyles() {
  return ScaledSheet.create({
    buttonStyle: {
      alignSelf: 'center',
      margin: '4%',
    },
    titleStyle: {
      minWidth: '100%',
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: PipColors.pipbuttonColor,
      paddingVertical: '3%',
      color: 'white',
      fontSize: '15@s',
      borderRadius: '10@s',
      fontFamily: 'Urbanist-Bold',
      overflow: 'hidden',
    },
    loaderBackgroundStyle: {
      backgroundColor: '#00000080',
    },
  });
}

export default PipButton;
