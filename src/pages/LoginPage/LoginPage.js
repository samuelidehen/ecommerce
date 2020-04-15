import React from "react";

import SignIn from "../../components/sign-in/SignIn";

import "./LoginPage.scss";
import SignUp from "../../components/sign-up/SignUp";

const SignInAndSignUpPage = () => (
  <div className="login">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
