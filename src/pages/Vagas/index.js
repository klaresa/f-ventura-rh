import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  RowSection,
  Row, Label, Input, InputSection,
} from "../../styles";
import dataPromise from "../../services/dataPromise";

const Vagas = () => {
  const [search, setSearch] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function get() {
      const response = await dataPromise('http://localhost:3000/vagas');
      setData(response);
    }
    get();
  }, []);

  function handleSubmit(e) {
    if (e.code === 'Enter' ) {
      console.log('code', e.code)
    }
  }

  return (
      <>
        <Box>
          <Text>candidatos cadastrados</Text>
          <Row>
            <InputSection>
            <Label>Busca</Label>
            <Input
                id="search"
                name="search"
                placeholder="search.."
                onKeyDown={(e) => handleSubmit(e)}
            />
          </InputSection></Row>
          {
            data.map((candidato, canIndex) => (
                <RowSection key={`candidato_${canIndex}`}>
                  <Row>
                    <div key={`r${canIndex}`}>
                      {candidato.nome} | {candidato.status}
                    </div>
                  </Row>
                  <Row>
                    {candidato.habilidades.requisitos.map((requisito, reqIndex) => (
                        <div key={`requisito_${reqIndex}`}>{requisito.a}</div>
                    ))}
                  </Row>
                </RowSection>
            ))
          }
        </Box>
      </>
  );
}

export default Vagas;
