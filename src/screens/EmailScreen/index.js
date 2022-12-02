import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { PipButton, PipText } from '../../components'
import useStyles from './style'
import { FormInputEmailField } from '../../../src/components/form'
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'

const EmailScreen = () => {
    const styles = useStyles();
    const navigation = useNavigation();
    const { control, formState: { errors }, handleSubmit, setValue, getValues } = useForm();
    const onSubmit = async form => {
        console.log("form ", form.Name)
        navigation.navigate('LoginScreen', {email: form.Name})
    }
    return (
        <View style={styles.container}>
            <PipText title="PENTAIR" orgStyle={styles.titleStyle} />
            <View style={styles.line} />
            <PipText title="Welocme to the Pentair Home app!" orgStyle={styles.welcomestyle} />
            <PipText title="Get the most out of your home's water. enter to the mail to get started" orgStyle={styles.hintStyle} />
            <FormInputEmailField
                title={"Email Address"}
                control={control}
                name={"Name"}
                rules={"Rules"} />
            <PipButton onPress={handleSubmit(onSubmit)} title={"Get Started"} btnStyle={styles.bottomView} />
        </View>
    );
}
export default EmailScreen;
