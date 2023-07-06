import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {createContext, useEffect, useState} from 'react';
import { BASE_URL } from '../config';
import { BASE_URL1 } from '../config';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({children,Navigation}) => {
  const [userInfo, setUserInfo] = useState({});
  
  

  const register = (name, email, password) => {
    

   axios
      .post('https://api.oopacks.com/api/test/register', {
        name,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        console.log(userInfo);
      Navigation.navigate('loginmain')
       
      })
      .catch(e => {
        console.log(`register error ${e}`);
       
      });
  };

  const login = (email, password) => {
   

    axios
      .post('https://api.oopacks.com/api/test/login', {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        Navigation.navigate('Mainpage')
      
       
      })
      .catch(e => {
        console.log(`login error ${e}`);
       
      });
  };




  return (
    <AuthContext.Provider
      value={{
       
        userInfo,
        register,
        login,
      }}>
      {children}
    </AuthContext.Provider>
  );
};