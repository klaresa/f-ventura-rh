import React, {useEffect, useState} from "react";
import {Overlay, Content, Box, Select, Text, Button} from "../../styles";

const Login = () => {
  const [search, setSearch] = useState([]);

  // useEffect(() => {
  //   async function get() {
  //     const search = await dataPromise('http://localhost:3000/vagas');
  //     setSearch(search);
  //   }
  //   get();
  // }, []);

  return (
      <Overlay>
        <Content>
          <Box>
            <Text>Entrar</Text>
            <Select>
              <option>Candidato</option>
              <option>Empresa</option>
            </Select>
            <Button>Ir</Button>
          </Box>

        </Content>

      </Overlay>
  );
}

export default Login;
