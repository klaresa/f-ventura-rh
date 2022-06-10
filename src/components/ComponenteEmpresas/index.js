import React from "react";
import {
  Box,
  Title,
  RowSection,
  Row,
  Label,
  Input,
  InputSection,
} from "./styles";

const ComponenteEmpresas = ({ data }) => {

  function handleSubmit(e) {
    if (e.code === 'Enter') {
      console.log('code', e.code)
    }
  }

  return (
      <>
        <Box>
          <Title>empresas cadastradas</Title>
          <Row>
            <InputSection>
              <Label>busque por descricao</Label>
              <Input
                  id="search"
                  name="search"
                  placeholder="buscar empresas.."
                  onKeyDown={(e) => handleSubmit(e)}
              />
            </InputSection>
          </Row>
          {data.length > 0 ? (
              <>
              {data.map((item, itemIndex) => (
                  <RowSection key={`item_${itemIndex}`}>
                    <Row>
                      <div key={`req_nome_${itemIndex}`}>
                        {item.nome}
                      </div>
                    </Row>
                    <Row>
                      <div key={`req_tel_${itemIndex}`}>
                        {item.contato.telefone}
                      </div>
                    </Row>
                  </RowSection>
                ))
              }
              </>
          ) : (
              <div>0 empresas cadastradas</div>
          )}
        </Box>
      </>
  );
}

export default ComponenteEmpresas;
