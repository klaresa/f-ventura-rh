import React, { useState } from "react";
import { Input, Button, Container, InputSection } from '../../styles';
import { sendData } from "../../services/sendData";

const FormCandidato = () => {
  const [nome, setNome] = useState([]);
  const [telefone, setTelefone] = useState([]);
  const [endereco, setEndereco] = useState([]);

  async function add(e) {
    e.preventDefault();

    console.log(nome);
    console.log(telefone);
    console.log(endereco);

    await sendData('http://localhost:3000/candidatos', {
      nome,
      contato: {
        telefone,
        endereco
      }
    });
  }

  return (
    <Container>
      <InputSection>
        <p>Nome</p>
        <Input name="nome" onChange={(e) => setNome(e.target.value)} placeholder="input..."/>
      </InputSection>

      <InputSection>
        <p>telefone</p>
        <Input name="telefone" onChange={(e) => setTelefone(e.target.value)} placeholder="telefone..."/>
      </InputSection>

      <InputSection>
        <p>endereco</p>
        <Input name="endereco" onChange={(e) => setEndereco(e.target.value)} placeholder="endereço..."/>
      </InputSection>

      <InputSection>
        <Button type="submit" onClick={(e) => add(e)}>add</Button>
      </InputSection>
    </Container>
  );
}

export default FormCandidato;
