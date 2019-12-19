import React, { Component } from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

class NavigationAuth extends Component {
  render() {
    return (
      <div className={"nav-top"}>
        <div>
          <Link to={ROUTES.HOME}>
            <h1>NotAble</h1>
          </Link>
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </div>
        <SignOutButton />
      </div>
    );
  }
}

const NavigationNonAuth = () => (
  <div className={"nav-top"}>
    <Link to={ROUTES.LANDING}>
      <h1>NotAble</h1>
    </Link>
    <div>
      <Link to={ROUTES.LANDING}>Discover the app</Link>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>
  </div>
);

export default Navigation;
