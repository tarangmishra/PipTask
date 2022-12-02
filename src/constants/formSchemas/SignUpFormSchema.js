import { EMAIL, PASSWORD_REGEX } from '../regex';

export const SignUpFormSchema = {
  email: {
    title: 'registerUser.signUpFormTitles.email',
    name: 'email',
    rules: {
      required: 'common.required',
      pattern: {
        value: EMAIL,
        message: 'registerUser.signUpFormErrorMessages.email',
      },
    },
  },
  password: {
    title: 'registerUser.signUpFormTitles.password',
    name: 'password',
    rules: {
      required: 'common.required',
      pattern: {
        value: PASSWORD_REGEX,
        message: 'registerUser.signUpFormErrorMessages.password',
      },
    },
  },
}

