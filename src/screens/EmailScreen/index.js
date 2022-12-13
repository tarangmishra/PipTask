import React from 'react'
import { View } from 'react-native'
import { PipButton, PipText } from '../../components'
import useStyles from './style'
import { FormInputEmailField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'
import { i18n } from 'react-native-i18n-localize'
import { SignUpFormSchema } from '../../constants/formSchemas/SignUpFormSchema'
import { connect } from 'react-redux';
import {setEmail} from '../../redux/actions/emailsreenAction'
import { ErrorMessage } from '@hookform/error-message';

const EmailScreen = (props) => {
    const styles = useStyles();
    const navigation = useNavigation();
    const { control, formState: { errors } ,handleSubmit } = useForm();
    const onSubmit = async form => {
        console.log("form ", form.email)
        props.submit(form.email)
        navigation.navigate('LoginScreen', { email: form.email })
    }
    return (
        <View style={styles.container}>
            <PipText title={i18n.t('translation.Pentair')} orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title={i18n.t('translation.Welcome')} orgStyle={styles.welcomestyle} />
            <PipText title={i18n.t('translation.WelcomeHint')} orgStyle={styles.hintStyle} />
            <FormInputEmailField
                title={SignUpFormSchema.email.title}
                control={control}
                name={SignUpFormSchema.email.name}
                rules={SignUpFormSchema.email.rules}
                placeHolder={SignUpFormSchema.email.title} />
            <ErrorMessage
                errors={errors}
                name={SignUpFormSchema.email.name}
                render={({ message }) => <PipText orgStyle={styles.validpassword} title={i18n.t('translation.Validemail')} />}
            />
            <PipButton onPress={handleSubmit(onSubmit)} title={"Get Started"} btnStyle={styles.bottomView} />
        </View>
    );
}
const mapStateToProps = state => {
    console.log("log", state)
    return {
      getEmailScreenData: state.emailscreenReducer,
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    submit: (email) => {
        console.log("dispatch", email)
      return dispatch(setEmail(email));
    },
  });
  export default connect(mapStateToProps, mapDispatchToProps)(EmailScreen);
