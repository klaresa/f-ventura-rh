import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  RowSection,
  Row,
} from "../../styles";
import dataPromise from "../../services/dataPromise";

const Cadastro = () => {
  const [search, setSearch] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function get() {
      const response = await dataPromise('http://localhost:3000/candidatos');
      setData(response);
    }
    get();
  }, []);

  function handleSubmit() {

  }

  return (
      <>
        <Box>
          <Text>cadastrados</Text>
          {
            data.map((item, index) => (
                <RowSection>
                  <Row>
                    {item.nome} | {item.contato.telefone}

                  </Row>
                </RowSection>
            ))
          }
        </Box>
      </>
  );
}

export default Cadastro;
