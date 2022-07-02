import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import {
  Box,
  Title,
  RowSection,
  Row
} from "./styles";
import { Button, Input, InputSection, Label, Wrapper } from "../../styles";
import { sendApiData } from "../../services/sendApiData";

export const DetalhesVagas = (props) => {

  const { id } = useParams();
  const { state } = useLocation();
  const { _id, nome, descricao, empresa, habilidades, status } = state;

  const [visible, setVisibility] = useState(false);
  const [requisito, setRequisito] = useState(false);

  async function handleSubmit() {
    const data = {
      candidato: {
        userId: '',
        nome: '',
        contato: {
          telefone: '',
          endereco: '',
        }
      },
      vaga: {
        nome,
        descricao,
        status,
        empresa,
        habilidades,
      },
      pontuacao: [
        {
          nome: requisito, pontuacao: pontuacao
        }
      ]
    }
    await sendApiData(`vagas`, data);
    navigate('/e/');
  }

  return (
      <Box>
        <Title>{nome}</Title>

        <RowSection>
          <Row>
            <div>
              {empresa.nome}
            </div>
          </Row>

        </RowSection>
        <Row>
          <div>
            {descricao}
          </div>
        </Row>
        <Row>
          <div>
            {habilidades.requisitos.map((item, index) => (
                <div key={`req_${index}`}>
                  <div>techs</div>
                  <div>{item.nome}</div>
                </div>
            ))}
          </div>
        </Row>
        <Row>
          <Button onClick={() => setVisibility(!visible)}>{visible === false ? 'candidatar' : 'fechar'}</Button>
        </Row>
        {visible && (
            <Box>
              {habilidades.requisitos.map((item, index) => (
                  <InputSection>
                    <Label>{item.nome}</Label>
                    <Input
                        type="number"
                        id={`candidato_pontuacao_${index}`}
                        name={`candidato_pontuacao_${index}`}
                        placeholder="pontuacao.."
                        onChange={(e) => setRequisito(e.target.value)}
                    />
                  </InputSection>
              ))}
              <Wrapper>
                <Button onClick={handleSubmit}>candidatar</Button>
              </Wrapper>
            </Box>
        )}
      </Box>
  )
}
export default DetalhesVagas;
