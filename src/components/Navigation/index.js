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

const NavigationAuth = props => {
  if (props.notes) {
    return (
      <div>
        <ul>
          <div className="basic-nav">
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
          </div>
          <button>Create new</button>
          <p>Your notes</p>
          {Object.keys(props.notes).map(note => (
            <p>Note: {props.notes[note].title}</p>
          ))}
          <div className="user-nav">
            <li>
              <SignOutButton />
            </li>
          </div>
        </ul>
      </div>
    );
  } else return null;
};

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
