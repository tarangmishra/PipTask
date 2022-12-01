import React from 'react';
import {useController} from 'react-hook-form';
import PipEditText from '../../components/PipEditText';

const FormInputPasswordField = props => {
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
      isPassword={true}
      autoComplete={'password'}
      textContentType={'password'}
      maxLength={20}
      {...props}
    />
  );
};

export default FormInputPasswordField;
