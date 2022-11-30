import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { PipColors } from '../utils/colors';

const PipButton = ({title, onPress, loading, buttonStyle}) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonStyle]}
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
      margin: '5%',
    },
    titleStyle: {
      minWidth: '50%',
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: PipColors.light_blue,
      paddingVertical: '3%',
      color: 'white',
      textTransform: 'uppercase',
      fontSize: 20,
      borderRadius: 10,
      fontFamily: 'Urbanist-Regular',
      overflow: 'hidden',
    },
    loaderBackgroundStyle: {
      backgroundColor: '#00000080',
    },
  });
}

export default PipButton;
