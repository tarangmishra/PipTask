import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { PipColors } from '../utils/colors';

const PipButton = ({title, onPress, loading, buttonStyle, btnStyle}) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonStyle,btnStyle]}
      onPress={onPress}>
      {loading ? (
        <View style={[styles.titleStyle, styles.loaderBackgroundStyle]}>
          <ActivityIndicator color={'white'} />
        </View>
      ) : (
        <Text style={styles.titleStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

function useStyles() {
  return StyleSheet.create({
    buttonStyle: {
      alignSelf: 'center',
      margin: '4%',
    },
    titleStyle: {
      minWidth: '100%',
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: PipColors.pipBlue,
      paddingVertical: '3%',
      color: 'white',
      fontSize: 15,
      borderRadius: 10,
      fontFamily: 'Urbanist-Bold',
      overflow: 'hidden',
    },
    loaderBackgroundStyle: {
      backgroundColor: '#00000080',
    },
  });
}

export default PipButton;
