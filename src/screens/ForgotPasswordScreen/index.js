import React from 'react'
import { View } from 'react-native'
import { PipButton, PipText } from '../../components'
import useStyles from './style'
import { FormInputEmailField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'
import { i18n } from 'react-native-i18n-localize'
import { SignUpFormSchema } from '../../constants/formSchemas/SignUpFormSchema'
import { ErrorMessage } from '@hookform/error-message';
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import { PipColors } from '../../utils/colors';

const ForgotPasswordScreen = () => {
    const styles = useStyles();
    const route = useRoute();
    const navigation = useNavigation();
    const { control, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = () => {
        // console.log("form ", form.email)
        navigation.navigate('CheckEmailScreen')
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Icon
                    style={styles.eyeconStyle}
                    color={PipColors.pipbuttonColor}
                    name={'chevron-back'}
                    onPress={()=>{navigation.goBack()}}
                />
                <PipText title={i18n.t('translation.Signinbutton')} orgStyle={styles.titleStyle} />
            </View>
            <View style={styles.line} />
            <PipText title={i18n.t('translation.ForgotPassword')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.ForgotPasswordHint')} orgStyle={styles.hintStyle} />
            <FormInputEmailField
                title={SignUpFormSchema.email.title}
                control={control}
                editable={false}
                name={SignUpFormSchema.email.name}
                rules={SignUpFormSchema.email.rules}
                placeHolder={route.params.email} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.email.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.Validemail')} />}
            />
            <PipButton onPress={onSubmit} title={"Reset"} btnStyle={styles.bottomView} />
        </View>
    );
}
export default ForgotPasswordScreen;
