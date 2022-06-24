import React, { createContext, useEffect, useState } from 'react';
import api from "../config/api";
import {sendData} from "../services/sendData";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [getUserInfo, setUserInfo] = useState({ type: 'unauthorized' });

  const [getUserPermission, setUserPermission] = useState('');

  function handleLogout() {
    setUserPermission('');
    setUserInfo({ type: 'unauthorized'});
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  }

  async function handleLogin(data) {
    try {
      const request = await api.post('/auth/local/signin', data);

      if (request.data) {

        const { id, type, access_token } = request.data;

        setUserInfo({ id: request.data.id, type: request.data.type });
        setUserPermission(request.data.type);
        localStorage.setItem('token', JSON.stringify({ id, type, access_token }));
        return request;
      }
    } catch (err) {
      console.error(err);
    }
  }

  const validate = async () => {
    console.log('passou aquiiiii2')

    const token = localStorage.getItem('token');
    const parse = JSON.parse(token);

    const headers = {
      'headers': {
        'Authorization': `Bearer ${(parse.access_token)}`,
      }
    }

    await api.get('/authenticate', headers)
        .then((res) => {
          setUserPermission(parse.type)
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
      const parsed = JSON.parse(token);
      console.log('------------------------1')

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${(parsed.access_token)}`;
        setUserInfo(parsed);
        // console.log('parssed', parsed)
        // setUserPermission(parsed.type)
        console.log('passou aquiiiii')

      }
      if (parsed) setUserPermission(parsed.type);
      // console.log('parsed',parsed)

    })();

    // login();
  }, []);

  return (
      <AuthContext.Provider value={{  getUserPermission, getUserInfo, handleLogout, handleLogin }}>
        {children}
      </AuthContext.Provider>
  );
}
