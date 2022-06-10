import React, { useState } from "react";
import ComponenteVagas from "../ComponenteVagas";
import Login from "../../pages/Login";
import api from "../../config/api";

const Home = () => {
  const [data, setData] = useState([]);

  const [user, setUser] = useState(false);

  async function get() {
    const token = localStorage.getItem('token');

    const headers = {
      'headers': {
        'Authorization': `Bearer ${(token)}`,
      }
    }

    const request = await api.get(
        '/vagas',
        headers)
        .then(res => res)
        .catch(er => er);
    setData(request.data);
  }

  const handleLogin = () => {
    setUser(true);
  }

  return (
      <>
        {!user && (
            <>
              <Login login={handleLogin} />
            </>
            )
        }
        {user && (
            <ComponenteVagas data={data} />
        )}
        <button onClick={get}>ok</button>
      </>
  );
}

export default Home;
