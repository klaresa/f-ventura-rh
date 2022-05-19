import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {Overlay, Content, Box, Text, Button, Input, InputSection, Label} from "../../styles";

const Cadastro = () => {
  const [search, setSearch] = useState([]);

  const [step, setStep] = useState(1);

  // useEffect(() => {
  //   async function get() {
  //     const search = await dataPromise('http://localhost:3000/vagas');
  //     setSearch(search);
  //   }
  //   get();
  // }, []);

  const InputC = styled(Input)`
    border: 1px solid gainsboro;
    padding: 10px;
  `;

  const BoxC = styled(Box)`
    gap: 20px;
  `;

  const ButtonC = styled(Button)`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    //background-color: red;
  `;

  const Wrapper = styled.div`
    display: flex;
  `;

  const ContentC = styled(Content)`
    height: 645px;
  `;


  function handleSubmit() {
    if(step === 1) setStep(2)


    if (step === 2) {
      console.log('sent')
    }
  }

  return (
      <>
        {step === 1 && (
            <Overlay>
              <ContentC>
                <BoxC>
                  <Text>entrar</Text>
                  <InputSection>
                    <Label>email</Label>
                    <InputC name="email" placeholder="email.."/>
                  </InputSection>
                  <InputSection>
                    <Label>senha</Label>
                    <InputC name="senha" placeholder="senha.."/>
                  </InputSection>
                  <InputSection>
                    <Label>confirmar senha</Label>
                    <InputC name="confirmar senha" placeholder="confirmar senha.."/>
                  </InputSection>
                  <ButtonC onClick={handleSubmit}>avancar</ButtonC>
                </BoxC>
              </ContentC>
            </Overlay>
        )}

        {step === 2 && (
            <Overlay>
              <ContentC>
                <BoxC>
                  <Text>nome</Text>
                  <InputSection>
                    <Label>nome</Label>
                    <InputC name="nome" placeholder="nome.."/>
                  </InputSection>
                  <InputSection>
                    <Label>endereco</Label>
                    <InputC name="endereco" placeholder="endereco.."/>
                  </InputSection>
                  <InputSection>
                    <Label>telefone</Label>
                    <InputC name="telefone" placeholder="telefone.."/>
                  </InputSection>
                  <InputSection>
                    <Label>cpf</Label>
                    <InputC name="cpf" placeholder="cpf.."/>
                  </InputSection>
                  <Wrapper>
                    <ButtonC onClick={() => setStep(1)}>voltar</ButtonC>
                    <ButtonC onClick={handleSubmit}>avancar</ButtonC>
                  </Wrapper>

                </BoxC>
              </ContentC>
            </Overlay>
        )}
      </>
  );
}

export default Cadastro;
