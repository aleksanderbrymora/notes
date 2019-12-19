import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

import profile from "../Resources/0.png";
import home from "../Resources/home.png";
import trash from "../Resources/trash.png";

const Navigation = props => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth
            notes={props.notes}
            loadNote={props.loadNote}
            createNewNote={props.createNewNote}
            deleteNote={props.deleteNote}
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
        <div className="link-icon">
          <img src={home} alt="Home" />
          <Link to={ROUTES.HOME}>Home</Link>
        </div>
        <div className="link-icon">
          <img src={profile} alt="Profile" />
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </div>
        {props.notes ? (
          <div className={"notes"}>
            <button onClick={props.createNewNote}>Create new</button>
            <h2>Your notes</h2>
            {Object.keys(props.notes)
              .reverse()
              .map(note => (
                <div className="note-list" key={note}>
                  <p onClick={() => props.loadNote(note)}>
                    {props.notes[note].title}
                  </p>
                  <img
                    src={trash}
                    alt="Trash"
                    onClick={() => props.deleteNote(note)}
                  />
                </div>
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
