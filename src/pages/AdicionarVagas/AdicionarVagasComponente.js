import React, {
  useEffect,
  useState
} from "react";
import {
  Box,
  Button,
  Input,
  InputSection,
  Label,
  Wrapper,
} from "../../styles";
import { getApiData } from "../../services/getApiData";
import { sendApiData } from "../../services/sendApiData";

import {useNavigate} from "react-router-dom";

const AdicionarVagasComponente = () => {
  const _id = localStorage.getItem('token');
  const _idParsed = JSON.parse(_id);

  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);

  const [titulo, setTitulo] = useState('');

  const [descricao, setDescricao] = useState('');

  const [requisito, setRequisito] = useState('');
  const [pontuacao, setPontuacao] = useState(0);

  async function handleFetch() {
    return await getApiData(`empresas/find-by-userId/${_idParsed.id}`);
  }

  useEffect(() => {
    (async () => {
      const request = await handleFetch();
      setUserData(request);
    })();
    }, []
  );

  async function handleSubmit() {
    const data = {
      nome: titulo,
      descricao: descricao,
      status: true,
      empresa: {
        userId: userData.userId,
        nome: userData.nome,
        contato: {
          telefone: userData.contato.telefone,
          endereco: userData.contato.endereco
        }
      },
      habilidades: {
        requisitos: [
          {
            nome: requisito, potuacao: pontuacao
          }
        ]
      }

    }
    await sendApiData(`vagas`, data);
    navigate('/e/');
  }

  return (
      <>
        <Box>
          <h2>descricao</h2>

          <InputSection>
            <Label>nome</Label>
            <Input
                id="titulo"
                name="titulo"
                placeholder="titulo.."
                onChange={(e) => setTitulo(e.target.value)}
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
            <Button onClick={handleSubmit}>update info</Button>
          </Wrapper>
        </Box>
      </>
  );
}

export default AdicionarVagasComponente;
