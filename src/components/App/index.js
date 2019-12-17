import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../style/style.css';

import Navigation from '../Navigation/index';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
	<Router>
		<div className="container">
			<Navigation className={'navigation'} />
			<div>
				<Route exact path={ROUTES.LANDING} component={LandingPage} />
				<Route className={'form-input'} path={ROUTES.SIGN_UP} component={SignUpPage} />
				<Route className={'form-input'} path={ROUTES.SIGN_IN} component={SignInPage} />
				<Route
					className={'form-input'}
					path={ROUTES.PASSWORD_FORGET}
					component={PasswordForgetPage}
				/>
				<Route path={ROUTES.HOME} component={HomePage} />
				<Route path={ROUTES.ACCOUNT} component={AccountPage} />
			</div>
		</div>
	</Router>
);

export default withAuthentication(App);
