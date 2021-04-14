import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {AddUserData} from '../api/AddData';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (userName, email, password) => {
          try {
            const res = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            console.log('res: ', res);
            AddUserData(res.user.uid, {name: userName});
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
