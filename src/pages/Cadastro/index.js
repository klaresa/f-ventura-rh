import React, {useState} from "react";
import { Overlay, Content, Box, Text, Button, Input, InputSection, Label, Select, Wrapper} from "../../styles";
import { sendData } from "../../services/sendData";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [search, setSearch] = useState([]);

  const [step, setStep] = useState(0);

  const [perfil, setPerfil] = useState("candidato");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   async function get() {
  //     const search = await dataPromise('http://localhost:3000/vagas');
  //     setSearch(search);
  //   }
  //   get();
  // }, []);

  function handleSubmit() {
    if (step === 0) {
      // ultima coisa a ser chamada
      setStep(1);
    }

    if (step === 1) setStep(2);

    if (step === 2) {
      // se a senha e a confirmacao foram iguais ok
      if (!(senha === confirmacao)) {
        setStep(1);
        return;
      }

      const data = {
        type: perfil,
        username: email,
        password: senha,
        nome,
        contato: {
          endereco,
          telefone
        }
      };
      sendData(`http://localhost:3000/${perfil}s`, data);

      // navigate('/cadastro/all');
      // se nao n deixa
    }
  }

  return (
    <>
      {step === 0 && (
        <Overlay>
          <Content>
            <Box>
              <Text>perfil</Text>
              <InputSection>
                <Select onClick={(e) => setPerfil(e.target.value)}>
                  <option id="candidato" value="candidato">candidato</option>
                  <option id="empresa" value="empresa">empresa</option>
                </Select>
              </InputSection>
              <Button onClick={handleSubmit}>Ir</Button>
            </Box>
          </Content>
        </Overlay>
      )}

      {step === 1 && (
        <Overlay>
          <Content>
            <Box>
              <Text>acesso</Text>
              <InputSection>
                <Label>email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="email.."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputSection>
              <InputSection>
                <Label>senha</Label>
                <Input
                  id="senha"
                  name="senha"
                  placeholder="senha.."
                  onChange={(e) => setSenha(e.target.value)}
                />
              </InputSection>
              <InputSection>
                <Label>confirmar senha</Label>
                <Input
                  id="confirmacao"
                  name="confirmar senha"
                  placeholder="confirmar senha.."
                  onChange={(e) => setConfirmacao(e.target.value)}
                />
              </InputSection>
              <Wrapper>
                <Button onClick={() => setStep(0)}>voltar</Button>
                <Button onClick={handleSubmit}>avancar</Button>
              </Wrapper>
            </Box>
          </Content>
        </Overlay>
      )}

      {step === 2 && (
        <Overlay>
          <Content>
            <Box>
              <Text>info</Text>
              <InputSection>
                <Label>nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  defaultValue={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

              </InputSection>
              <InputSection>
                <Label>endereco</Label>
                <Input
                  id="endereco"
                  name="endereco"
                  placeholder="endereco.."
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </InputSection>
              <InputSection>
                <Label>telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  placeholder="telefone.."
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </InputSection>
              {perfil === "candidato" ? (
                <InputSection>
                  <Label>cpf</Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    placeholder="cpf.."
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </InputSection>
              ) : (
                <InputSection>
                  <Label>cnpj</Label>
                  <Input
                    id="cnpj"
                    name="cnpj"
                    placeholder="cnpj.."
                    onChange={(e) => setCnpj(e.target.value)}
                  />
                </InputSection>
              )}
              <Wrapper>
                <Button onClick={() => setStep(1)}>voltar</Button>
                <Button onClick={handleSubmit}>avancar</Button>
              </Wrapper>
            </Box>
          </Content>
        </Overlay>
      )}
    </>
  );
};

export default Cadastro;
