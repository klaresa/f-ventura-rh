import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router";

import { AuthContext } from "../../auth/AuthContext";
import { sendApiData } from "../../services/sendApiData";
import { getApiData } from "../../services/getApiData";

import {
  Box,
  Title,
  RowSection,
  Row
} from "./styles";
import { Button, Input, InputSection, Label, Wrapper } from "../../styles";

export const DetalhesVagas = (props) => {

  const { getUserInfo } = useContext(AuthContext);

  console.log("user", getUserInfo);

  const [userData, setUserInfo] = useState("");

  const { id } = useParams();
  const { state } = useLocation();
  const { _id, nome, descricao, empresa, habilidades, status } = state;

  const navigate = useNavigate();

  const [visible, setVisibility] = useState(false);
  const [requisito, setRequisito] = useState(false);

  async function handleFetch() {
    return await getApiData(`candidatos/find-by-userId/${getUserInfo.id}`);
  }

  useEffect(() => {
    (async () => {
      const request = await handleFetch();
      console.log("user data", request);
      setUserInfo(request);
    })();
  }, []
  );

  async function handleSubmit() {
    const data = {
      candidato: {
        userId: userData.userId,
        nome: userData.nome,
        contato: userData.contato
      },
      vaga: {
        nome,
        descricao,
        status,
        empresa,
        habilidades,
      },
      habilidades: {
        pontuacao: [
          {
            nome: "javascript", pontuacao: 10
          }
        ]
      }
    };
    await sendApiData("respostas", data);
    navigate("/c/");
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
        <Button
	        onClick={() => setVisibility(!visible)}>
          {visible === false ? "candidatar" : "fechar"}
        </Button>
      </Row>
      {visible && (
        <Box>
          {habilidades.requisitos.map((item, index) => (
            <InputSection key={`requisitos_${index}`}>
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
  );
};
export default DetalhesVagas;
