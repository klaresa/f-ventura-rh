import React, {useContext, useEffect, useState} from "react";
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
import { sendData } from "../../services/sendData";

const Index = () => {
  const navigate = useNavigate();
  const { authed } = useContext(AuthContext);

  useEffect(() => {

  }, [authed]);

  function handleNav(instruction) {
    if (instruction === 'entrar') {
      navigate('/login');
    }
    if (instruction === 'cadastro') {
      navigate('/cadastro');
    }
  }

  return (
      <Overlay>
        <Content>
          <Box>
            <Button onClick={() => handleNav('entrar')}>Entrar</Button>
            <Button onClick={() => handleNav('cadastro')}>Cadastrar</Button>
          </Box>
        </Content>
      </Overlay>
  );
}

export default Index;
