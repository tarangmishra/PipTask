import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { PipButton, PipText, PipModal } from '../../components'
import useStyles from './style'
import { FormInputPasswordField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'
import { i18n } from 'react-native-i18n-localize'
import { SignUpFormSchema } from '../../constants/formSchemas/SignUpFormSchema'
import { ErrorMessage } from '@hookform/error-message';
import { useRoute } from '@react-navigation/native'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;
const CheckEmailScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const styles = useStyles();
    const route = useRoute();
    const navigation = useNavigation();
    const { control, formState: { errors }, handleSubmit } = useForm();
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={styles.container}>
            <PipText title={i18n.t('translation.Signinbutton')} orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title={i18n.t('translation.Checkyouremail')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.CheckEmailHint')} orgStyle={styles.hintStyle} />
            <PipText title={i18n.t('translation.Sixdigitcode')} orgStyle={styles.sixdigitStyle} />
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
            <FormInputPasswordField
                title={SignUpFormSchema.password.title}
                placeHolder={SignUpFormSchema.password.title}
                control={control}
                name={SignUpFormSchema.password.name}
                rules={SignUpFormSchema.password.rules}
                inputStyle={styles.passwordstyle} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.email.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.Validemail')} />}
            />
            <PipButton onPress={() => {setModalVisible(true)}} title={"Reset"} btnStyle={styles.bottomView} />
            
            {modalVisible===true ? <PipModal modalVisible={modalVisible}/> : null}

        </View>
    );
}
export default CheckEmailScreen;
