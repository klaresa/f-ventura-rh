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

const AdicionarVagasComponente = () => {
  const { getUserInfo } = useContext(AuthContext);

  const _id = localStorage.getItem('token');
  const _idParsed = JSON.parse(_id);

  const [data, setData] = useState('');


  const [perfil, _] = useState('empresa');
  const [nome, setNome] = useState('');


  const [descricao, setDescricao] = useState('');

  const [requisito, setRequisito] = useState('');
  const [pontuacao, setPontuacao] = useState(0);

  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  async function handleFetch() {
    const request = await getApiData(`${perfil}s/${_idParsed.id}`);
    console.log('data ---', request);
  }

  useEffect(() => {
    (async () => {
      await handleFetch();
    })();

      // handleFetch();
  }, []);

  async function handleUserInfoUpdate() {
    // if (senha === confirmacao) {
    //   const data = {
        // id: getUserInfo.id,
        // type: perfil,
        // username: email,
        // password: senha,
      // }
      await updateData(`http://localhost:3000/${perfil}s/${getUserInfo.id}`, data);
    // }
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
          <h2>descricao</h2>

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
            <Label>descricao</Label>
            <Input
                id="descricao"
                name="descricao"
                placeholder="descricao.."
                onChange={(e) => setDescricao(e.target.value)}
            />
          </InputSection>
          <br/>

          <h2>habilidades</h2>

          <InputSection>
            <Label>requisito</Label>
            <Input
                id="requisito"
                name="requisito"
                placeholder="requisito.."
                onChange={(e) => setRequisito(e.target.value)}
            />
          </InputSection>
          <InputSection>
            <Label>pontuacao</Label>
            <Input
                type="number"
                id="pontuacao"
                name="pontuacao"
                placeholder="pontuacao.."
                onChange={(e) => setPontuacao(e.target.value)}
            />
          </InputSection>

          <Wrapper>
            <Button onClick={handleUpdate}>update info</Button>
          </Wrapper>
        </Box>
      </>
  );
}

export default AdicionarVagasComponente;
