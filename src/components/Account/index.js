import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import NavTop from "../Navigation/NavTop";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <>
        <NavTop />
        <h3 id={"manage-account-title"}>Manage your account</h3>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
