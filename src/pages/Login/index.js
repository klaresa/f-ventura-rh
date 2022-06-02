import React, { useState } from "react";
import {
  Overlay,
  Content,
  Box,
  Text,
  Button,
  Label,
  Input,
  InputSection
} from "../../styles";

import { sendData } from "../../services/sendData";

const Login = () => {
  // const [search, setSearch] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  // useEffect(() => {
//   async function get() {
  //     const search = await sendData('http://localhost:3000/login');
  //     setSearch(search);
  //   }
  //   get();
  // }, []);
  async function handleFormSubmit() {
    console.log('🚀', email)
    console.log('🚀', senha)

    const request = await sendData('http://localhost:3000/login', {
      username: email,
      password: senha
    });
    console.log('🚀', request)
  }

  return (
      <Overlay>
        <Content>
          <Box>
            <Text>login</Text>
            <InputSection>
              <Label>email</Label>
              <Input
                  id="email"
                  name="email"
                  placeholder="email.."
                  onChange={(e) => setEmail(e.target.value)}
              />
            </InputSection>
            <InputSection>
              <Label>senha</Label>
              <Input
                  id="senha"
                  name="senha"
                  placeholder="senha.."
                  onChange={(e) => setSenha(e.target.value)}
              />
            </InputSection>
            <Button onClick={handleFormSubmit}>Ir</Button>
          </Box>
        </Content>
      </Overlay>
  );
}

export default Login;
