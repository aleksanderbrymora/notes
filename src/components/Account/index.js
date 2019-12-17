import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
	<AuthUserContext.Consumer>
		{authUser => (
			<>
				<h1>Hi {authUser.email.split('@')[0]}!</h1>
				<hr />
				<h3 id={'manage-account-title'}>Manage your account</h3>
				<PasswordForgetForm />
				<PasswordChangeForm />
			</>
		)}
	</AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
