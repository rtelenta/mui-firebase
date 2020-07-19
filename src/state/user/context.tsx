import React, { createContext } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

interface IUserContext {
  user: any;
  signInWithGoogle: () => void;
  signOut: () => void;
}

const UserContext = createContext<IUserContext>({
  user: null,
  signInWithGoogle: () => null,
  signOut: () => null,
});

const Provider: React.FC<any> = ({
  children,
  user,
  signOut,
  signInWithGoogle,
}) => {
  return (
    <UserContext.Provider value={{ user, signOut, signInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export const UserProvider = withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Provider);

export default UserContext;
