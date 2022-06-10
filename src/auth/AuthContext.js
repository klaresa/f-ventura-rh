import React, { createContext, useEffect, useState } from 'react';
import api from "../config/api";
import {sendData} from "../services/sendData";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [getUserPermission, setUserPermission] = useState('unauthorized');

  function handleLogout() {
    setUserPermission('unauthorized');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  }

  async function handleLogin(data) {
    try {
      const request = await api.post('/auth/local/signin', data);

      if (request.data) {
        setUserPermission(request.data.type);
        localStorage.setItem('token', request?.data?.access_token);
        return request;
      }
    } catch (err) {
      console.error(err);
    }
  }

  const validate = async () => {
    const token = localStorage.getItem('token');

    const headers = {
      'headers': {
        'Authorization': `Bearer ${(token)}`,
      }
    }

    await api.get('/authenticate', headers)
        .then((res) => {
          setUserPermission(res.data);
          return true;
        })
        .catch((err) => {
          localStorage.removeItem('token');
          api.default.headers.Authorization = undefined;
          return false;
        });
  }

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');

      if (token && await validate()) {
        api.defaults.headers.Authorization = `Bearer ${(token)}`;
      }
    })();

    // login();
  }, []);

  return (
      <AuthContext.Provider value={{  getUserPermission, handleLogout, handleLogin }}>
        {children}
      </AuthContext.Provider>
  );
}
