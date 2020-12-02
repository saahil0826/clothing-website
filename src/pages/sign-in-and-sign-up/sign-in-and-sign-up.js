import React from 'react';

import SignIn from '../../components/sign-in/sign-in.js';
import SignUp from '../../components/sign-up/sign-up.js';

import {SignInAndSignUpContainer} from './sign-in-and-sign-up.styles.jsx'

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
