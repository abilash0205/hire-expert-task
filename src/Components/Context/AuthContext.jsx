/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Function to create a new user with email and password
  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to log in an existing user with email and password
  const loginUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // useEffect to listen for changes in the user's authentication state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener when the component is unmounted
    return () => {
      unSubscribe();
    };
  }, []);

  // Function to log out the current user
  const logOut = () => {
    return signOut(auth);
  };

  // Provide the necessary functions and user data to child components
  return (
    <UserContext.Provider value={{ user, createUser, loginUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  // Return the user authentication context
  // return useContext(UserContext);
  const context = useContext(UserContext);
  // if(!context){
  //   throw new Error('userAuth error')
  // }
  return context;
};
//
//In this code, we have created a context called `UserContext` to manage user authentication. The `AuthContextProvider` component wraps around the child components and provides the necessary functions and user data to them.
//
//The `UserAuth` hook is used to access the user authentication context from any child component.
//
//The `createUser`, `loginUser`, and `logOut` functions are used to create a new user, log in an existing user, and log out the current user, respectively.
//
//The `useEffect` hook is used to listen for changes in the user's authentication state and update the `user` state accordingly. The listener is unsubscribed when the component is unmounted..</s>
