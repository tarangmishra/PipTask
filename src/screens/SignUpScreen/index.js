import React, { useState } from 'react'
import { View, FlatList, KeyboardAvoidingView } from 'react-native'
import { PipButton, PipText, PipCheckBox } from '../../components'
import useStyles from './style'
import { FormInputPasswordField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'
import { i18n } from 'react-native-i18n-localize'
import { SignUpFormSchema } from '../../constants/formSchemas/SignUpFormSchema'
import { ErrorMessage } from '@hookform/error-message';
import { useRoute } from '@react-navigation/native'


const SignUpScreen = () => {
    const datas = ["At least 8 character", "1 uppercase and 1 smaller case required", "1 number", "1 special character"]
    const styles = useStyles();
    const route = useRoute();
    const navigation = useNavigation();
    const { control, formState: { errors }, handleSubmit } = useForm();
    const [value, setValue] = useState('');
    const onReset = () => {
        setModalVisible(true)
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{padding: "2%"}}>
                <PipText title={i18n.t('translation.Pentair')} orgStyle={styles.titleStyle} />
                <PipText title={i18n.t('translation.Cancel')} orgStyle={styles.cancelTitle} />
            </View>
            <View style={styles.line} />
            <PipText title={i18n.t('translation.SignupTitle')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.CreatePassword')} orgStyle={styles.hintStyle} />
            <PipText title={i18n.t('translation.CreatePassword')} orgStyle={styles.emailexist} />
            <FormInputPasswordField
                title={SignUpFormSchema.createpassword.title}
                placeHolder={SignUpFormSchema.createpassword.title}
                control={control}
                name={SignUpFormSchema.createpassword.name}
                rules={SignUpFormSchema.createpassword.rules}
                inputStyle={styles.passwordstyle} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.newpassword.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.Validpassword')} />}
            />
            <FormInputPasswordField
                title={SignUpFormSchema.confirmpassw.title}
                placeHolder={SignUpFormSchema.confirmpassw.title}
                control={control}
                name={SignUpFormSchema.confirmpassw.name}
                rules={SignUpFormSchema.confirmpassw.rules}
                inputStyle={styles.passwordstyle} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.confirmpassword.name}
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
            <PipCheckBox title={i18n.t('translation.AgreeTerm')} />
            <PipCheckBox title={i18n.t('translation.BriefTerms')} />
            <PipText title={i18n.t('translation.PersonalPoint')} orgStyle={styles.personinfoTest} />
            <PipButton title={i18n.t('translation.CreateAccount')} btnStyle={styles.bottomView} />
        </KeyboardAvoidingView>
    );
}
export default SignUpScreen;
