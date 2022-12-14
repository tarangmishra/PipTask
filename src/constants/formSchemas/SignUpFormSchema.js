import { EMAIL, PASSWORD_REGEX } from '../regex';

export const SignUpFormSchema = {
  email: {
    title: 'Email Address',
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
    title: 'Password',
    name: 'password',
    rules: {
      required: 'common.required',
      pattern: {
        value: PASSWORD_REGEX,
        message: 'registerUser.signUpFormErrorMessages.password',
      },
    },
  },
  newpassword: {
    title: 'New Password',
    name: 'password',
    rules: {
      required: 'common.required',
      pattern: {
        value: PASSWORD_REGEX,
        message: 'registerUser.signUpFormErrorMessages.password',
      },
    },
  },
  confirmpassword: {
    title: 'Confirm New Password',
    name: 'passwords',
    rules: {
      required: 'common.required',
      pattern: {
        value: PASSWORD_REGEX,
        message: 'registerUser.signUpFormErrorMessages.password',
      },
    },
  },
  createpassword: {
    title: 'Create Password',
    name: 'password',
    rules: {
      required: 'common.required',
      pattern: {
        value: PASSWORD_REGEX,
        message: 'registerUser.signUpFormErrorMessages.password',
      },
    },
  },
  confirmpassw: {
    title: 'Confirm Password',
    name: 'passwords',
    rules: {
      required: 'common.required',
      pattern: {
        value: PASSWORD_REGEX,
        message: 'registerUser.signUpFormErrorMessages.password',
      },
    },
  },
}

