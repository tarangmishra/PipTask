import React from 'react';
import {useController} from 'react-hook-form';
import PipEditText from '../../components/PipEditText';

const FormInputEmailField = props => {
  const {field} = useController({
    control: props.control,
    defaultValue: '',
    name: props.name,
    rules: props.rules,
  });
  return (
    <PipEditText
      value={field.value}
      onChangeText={field.onChange}
      autoComplete={props.autoComplete || 'email'}
      keyboardType={'email-address'}
      textContentType={'emailAddress'}
      maxLength={150}
      {...props}
    />
  );
};

export default FormInputEmailField;
