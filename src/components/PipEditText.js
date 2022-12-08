import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globleStyle from './style'
import { useTheme } from '@react-navigation/native';
import { PipColors } from '../utils/colors';
import { ScaledSheet } from 'react-native-size-matters'

const PipEditText = props => {
    const styles = useStyles(props.isPin || false);
    const gStyle = globleStyle(useTheme().dark)
    const { isPassword, title, placeHolder, editable, inputStyle } = props;
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
                editable={editable}
                {...textInputProps}
                style={[gStyle.inputTextStyle, inputStyle]}
            />
            {isPassword && (
                <Icon
                    style={styles.eyeIconStyle}
                    onPress={() => setSecureText(!secureText)}
                    size={30}
                    color="grey"
                    name={secureText === true ? 'eye-off' : 'eye'}
                />
            )}

        </View>
    );
};

function useStyles() {
    return ScaledSheet.create({
        passwordTextStyle: {
            letterSpacing: '2@s',
            fontFamily: 'Urbanist-Regular',
        },
        eyeIconStyle: {
            position: 'absolute',
            bottom: 0,
            top: '45%',
            right: '8%',
            end: 0
        },
        pinTextStyle: {
            fontFamily: 'Urbanist-Regular',
            borderWidth: '1@s',
            borderColor: PipColors.pipGrey,
            borderRadius: '10@s',
            fontSize: '20@s',
            fontWeight: '700',
            padding: '2%',
            paddingHorizontal: '3%',
            textAlign: 'center',
        },
    });
}

export default PipEditText;
