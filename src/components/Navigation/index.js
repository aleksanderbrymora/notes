import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

const Navigation = props => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth
            notes={props.notes}
            loadNote={props.loadNote}
            createNewNote={props.createNewNote}
          />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = props => {
  return (
    <div className={"navigation"}>
      <div className={"nav-contents"}>
        <h1>NotAble</h1>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
        {props.notes ? (
          <div className={"notes"}>
            <button onClick={props.createNewNote}>Create new</button>
            <h2>Your notes</h2>
            {Object.keys(props.notes).map(note => (
              <p onClick={() => props.loadNote(note)} key={note}>
                {props.notes[note].title}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <SignOutButton />
    </div>
  );
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
