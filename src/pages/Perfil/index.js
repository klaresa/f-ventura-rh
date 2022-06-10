import React, {useContext, useEffect, useState} from "react";
import {
  Box, Button,
  Input,
  InputSection,
  Label,
  Text, Wrapper,
} from "../../styles";
import {getApiData} from "../../services/getApiData";
import { AuthContext } from "../../auth/AuthContext";
import api from '../../config/api';

const MeuPerfil = () => {

  const { getUser } = useContext(AuthContext);
  const [perfil, setPerfil] = useState('candidato');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');

  const [userInfo, setUserInfo] = useState([]);

  async function handleFetch() {
    const data = await getApiData(`${perfil}s/${email}`);
    setUserInfo(data);
  }

  useEffect(() => {
    handleFetch()
  }, []);

  async function handleUpdate() {
    const data = {
      type: perfil,
      username: email,
      password: senha,
      nome,
      contato: {
        endereco,
        telefone
      }
    }
    // await api.get(`http://localhost:3000/${perfil}s/${}`, data);
  }

  return (
      <>
        <Box>
          <Text>meu perfil</Text>
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
            <InputSection>
              <Label>confirmar senha</Label>
              <Input
                  id="confirmacao"
                  name="confirmar senha"
                  placeholder="confirmar senha.."
                  onChange={(e) => setConfirmacao(e.target.value)}
              />
            </InputSection>
          <InputSection>
            <Label>endereco</Label>
            <Input
                id="endereco"
                name="endereco"
                placeholder="endereco.."
                onChange={(e) => setEndereco(e.target.value)}
            />
          </InputSection>
          <InputSection>
            <Label>telefone</Label>
            <Input
                id="telefone"
                name="telefone"
                placeholder="telefone.."
                onChange={(e) => setTelefone(e.target.value)}
            />
          </InputSection>
          {getUser === 'candidato' ? (
              <InputSection>
                <Label>cpf</Label>
                <Input
                    id="cpf"
                    name="cpf"
                    placeholder="cpf.."
                    onChange={(e) => setCpf(e.target.value)}
                />
              </InputSection>
          ) : (
              <InputSection>
                <Label>cnpj</Label>
                <Input
                    id="cnpj"
                    name="cnpj"
                    placeholder="cnpj.."
                    onChange={(e) => setCnpj
                    (e.target.value)}
                />
              </InputSection>
              )}
              <Wrapper>
                <Button onClick={handleUpdate}>update</Button>
              </Wrapper>
        </Box>
      </>
  );
}

export default MeuPerfil;
