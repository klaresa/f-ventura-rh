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

const Login = () => {
	const navigate = useNavigate();

	const { getUserInfo, getUserPermission, handleLogout, handleLogin } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

  async function handleLoginData() {
    await handleLogin({ username: email, password: senha});

	  console.log('getuserpermission-----------', getUserInfo);

    navigate("/")
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
          <Button onClick={handleLoginData}>Ir</Button>
          <button onClick={handleLogout}>sair</button>
        </Box>
      </Content>
    </Overlay>
  );
};

export default Login;
