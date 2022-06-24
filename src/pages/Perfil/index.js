import React, {
  useContext,
  useEffect,
  useState
} from "react";
import {
  Box,
  Button,
  Input,
  InputSection,
  Label,
  Text,
  Wrapper,
} from "../../styles";
import { getApiData } from "../../services/getApiData";
import { updateData } from "../../services/updateData";

import { AuthContext } from "../../auth/AuthContext";

const MeuPerfil = () => {
  const { getUserInfo } = useContext(AuthContext);

  const [perfil, _] = useState('candidato');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');

  // async function handleFetch() {
  //   const data = await getApiData(`${perfil}s/${email}/${getUserInfo.email}`);
  //   console.log('data ---', data);
  // }

  useEffect(() => {
    // handleFetch()
  }, [getUserInfo]);

  async function handleUserInfoUpdate() {
    if (senha === confirmacao) {
      const data = {
        id: getUserInfo.id,
        type: perfil,
        username: email,
        password: senha,
      }
      await updateData(`http://localhost:3000/${perfil}s/${getUserInfo.id}`, data);
    }
  }

  async function handleUpdate() {
    const data = {
      id: getUserInfo.id,
      nome,
      contato: {
        telefone,
        endereco
      }
    }
    await updateData(`http://localhost:3000/${perfil}s/${getUserInfo.id}`, data);
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
          <Wrapper>
            <Button onClick={handleUserInfoUpdate}>update login</Button>
          </Wrapper>
          <InputSection>
            <Label>nome</Label>
            <Input
                id="nome"
                name="nome"
                placeholder="nome.."
                onChange={(e) => setNome(e.target.value)}
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
          {getUserInfo.type === 'candidato' ? (
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
                <Button onClick={handleUpdate}>update info</Button>
              </Wrapper>
        </Box>
      </>
  );
}

export default MeuPerfil;
