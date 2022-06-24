import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
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
import { AuthContext } from "../../auth/AuthContext";

const Login = ({ login }) => {
  const [email, setEmail] = useState('empresa');
  const [senha, setSenha] = useState('1234');

  const navigate = useNavigate();
  const { handleLogout, getUserPermission, handleLogin } = useContext(AuthContext);

  async function handleLoginData() {
    await handleLogin({ username: email, password: senha});

    (login());
  }

  return (
      <Overlay>
        <Content>
          <Box>
            <Text>login</Text>
            {JSON.stringify(getUserPermission)}
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
            <Button onClick={handleLoginData}>Ir</Button>
            <button onClick={handleLogout}>sair</button>
          </Box>
        </Content>
      </Overlay>
  );
}

export default Login;
