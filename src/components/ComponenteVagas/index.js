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

const ComponenteVagas = ({ data }) => {

  function handleSubmit(e) {
    if (e.code === 'Enter') {
      console.log('code', e.code)
    }
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
              <RowSection key={`item_${itemIndex}`}>
                <Row>
                  <div key={`req_descricao_${itemIndex}`}>
                    {item.nome} {item.status ? (<Icon />) : (<Icon />)}
                  </div>
                </Row>
                <Row>
                  {item.habilidades.requisitos.map((requisito, reqIndex) => (
                      <div key={`req_nome_${reqIndex}`}>{requisito.nome} - {requisito.pontuacao}</div>
                    ))}
                </Row>
              </RowSection>
            ))
          }
        </Box>
      </>
  );
}

export default ComponenteVagas;
