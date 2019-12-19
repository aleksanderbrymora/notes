import React, { Component } from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div className={"navigation"}>
    <h1>NotAble</h1>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

class NavigationAuth extends Component {
  render() {
    return (
      <ul>
        <div className="basic-nav">
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
        </div>
        <div className="user-nav">
          <li>
            <SignOutButton />
          </li>
        </div>
      </ul>
    );
  }
}

const NavigationNonAuth = () => (
  <ul>
    <div className="basic-nav">
      <li>
        <Link to={ROUTES.LANDING}>Discover the app</Link>
      </li>
    </div>
    <div className="user-nav">
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </div>
  </ul>
);

export default Navigation;
