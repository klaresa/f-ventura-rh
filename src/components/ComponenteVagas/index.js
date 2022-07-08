import React from "react";
import {
  Box,
  Title,
  RowSection,
  Icon,
  Row,
  Label,
  Input,
  InputSection,
} from "./styles";
import { useNavigate } from "react-router-dom";

const ComponenteVagas = ({ data }) => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    if (e.code === "Enter") {
      console.log("code", e.code);
    }
  }

  function handleDetailsClick(item) {
    // console.log('itemmm', item);
    navigate(`details/${item._id}`, { state: item });
  }

  return data && (
    <>
      <Box>
        <Title>vagas cadastradas</Title>
        <Row>
          <InputSection>
            <Label>Busca vagas...</Label>
            <Input
              id="search"
              name="search"
              placeholder="search.."
              onKeyDown={(e) => handleSubmit(e)}
            />
          </InputSection>
        </Row>

        {data.map((item, itemIndex) => (
          <RowSection
            key={item._id}
            onClick={() => handleDetailsClick(item)}
          >
            <Row>
              <div key={`empresa_${itemIndex}`}>
                {item.empresa.nome} {item.status ? (<Icon />) : (<Icon />)}
              </div>
            </Row>
            <Row>
              <div key={`req_descricao_${itemIndex}`}>
                {item.nome}
              </div>
            </Row>
            {/*<Row>*/}
            {/*  {item.habilidades.requisitos.map((requisito, reqIndex) => (*/}
            {/*      <div key={`req_nome_${reqIndex}`}>{requisito.nome} - {requisito.pontuacao}</div>*/}
            {/*    ))}*/}
            {/*</Row>*/}
            <Row>
              {item.habilidades.requisitos.map((requisito, reqIndex) => (
                <div key={`req_nome_${reqIndex}`}>{requisito.nome}</div>
              ))}
            </Row>
          </RowSection>
        ))
        }
      </Box>
    </>
  );
};

export default ComponenteVagas;
