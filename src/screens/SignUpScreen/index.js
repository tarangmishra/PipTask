import React, { useState } from 'react'
import { View, Text, FlatList, KeyboardAvoidingView } from 'react-native'
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
import { PipColors } from '../../utils/colors'
import Icon from 'react-native-vector-icons/Ionicons';


const CELL_COUNT = 6;
const SignUpScreen = () => {
    const datas = ["At least 8 character", "1 uppercase and 1 smaller case required", "1 number", "1 special character"]
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
    const onReset = () => {
        setModalVisible(true)
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <PipText title={i18n.t('translation.Pentair')} orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title={i18n.t('translation.SignupTitle')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.CreatePassword')} orgStyle={styles.hintStyle} />
            <FormInputPasswordField
                title={SignUpFormSchema.newpassword.title}
                placeHolder={SignUpFormSchema.newpassword.title}
                control={control}
                name={SignUpFormSchema.newpassword.name}
                rules={SignUpFormSchema.newpassword.rules}
                inputStyle={styles.passwordstyle} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.newpassword.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.Validpassword')} />}
            />
            <View style={styles.centerview}>
                <FlatList data={datas} renderItem={({ item }) => {
                    return (
                        <>
                            <PipText orgStyle={styles.flatText} title={item} />
                        </>
                    );
                }} />
            </View>
            <FormInputPasswordField
                title={SignUpFormSchema.confirmpassword.title}
                placeHolder={SignUpFormSchema.confirmpassword.title}
                control={control}
                name={SignUpFormSchema.confirmpassword.name}
                rules={SignUpFormSchema.confirmpassword.rules}
                inputStyle={styles.passwordstyle} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.confirmpassword.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.Validpassword')} />}
            />
            <PipButton onPress={onReset} title={"Reset"} btnStyle={styles.bottomViewSingin} />
            <PipButton whiteBackground={true} title={i18n.t('translation.Resend')} btnStyle={styles.bottomView} />
            {modalVisible === true ? <PipModal modalVisible={modalVisible} setModalVisible={setModalVisible} /> : null}
        </KeyboardAvoidingView>
    );
}
export default SignUpScreen;
