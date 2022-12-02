import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import globleStyle from './style'
import { useTheme } from '@react-navigation/native';
import { PipColors } from '../utils/colors';


const PipEditText = props => {
    const styles = useStyles(props.isPin || false);
    const gStyle = globleStyle(useTheme().dark)
    const { isPassword, title, placeHolder, inputStyle } = props;
    const [secureText, setSecureText] = useState(isPassword || false);

    const textInputProps = {
        ...props,
    };

    return (
        <View>
            <Text style={[gStyle.labelTextStyle]}>{title}</Text>
            <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                secureTextEntry={secureText}
                placeholder={placeHolder}
                {...textInputProps}
                style={[gStyle.inputTextStyle, inputStyle]}
            />
            {isPassword && (
                <Icon
                    style={styles.eyeIconStyle}
                    onPress={() => setSecureText(!secureText)}
                    size={20}
                    color="grey"
                    name={secureText === true ? 'eye-slash' : 'eye'}
                />
            )}

        </View>
    );
};

function useStyles() {
    return StyleSheet.create({
        passwordTextStyle: {
            letterSpacing: 2,
            fontFamily: 'Urbanist-Regular',
        },
        eyeIconStyle: {
            position: 'absolute',
            right: 0,
        },
        pinTextStyle: {
            fontFamily: 'Urbanist-Regular',
            borderWidth: 1,
            borderColor: PipColors.pipGrey,
            borderRadius: 10,
            fontSize: 20,
            fontWeight: '700',
            padding: '2%',
            paddingHorizontal: '3%',
            textAlign: 'center'
        },
    });
}

export default PipEditText;
