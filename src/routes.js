import React from "react";
import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import MeuPerfil from "./pages/Perfil";
import Cadastro from "./pages/Cadastro";

import EmpresasCadastradas from "./pages/EmpresasCadastradas";
import CandidatosCadastrados from "./pages/CandidatosCadastrados";
import VagasCadastradas from "./pages/VagasCadastradas";
import AdicionarVagasComponente from "./pages/AdicionarVagas/AdicionarVagasComponente";
import DetalhesVagas from "./pages/DetalhesVagas";

export const MyRoutes = () => {

  return (
    <Routes>
      <Route candidato path="/c/" element={<p>home de candidato</p>} />
      <Route candidato exact path="/c/perfil" element={<MeuPerfil />}/>
      <Route candidato exact path="/c/vagas" element={<VagasCadastradas data={[]}/>} />
      <Route candidato exact path="/c/empresas" element={<EmpresasCadastradas/>}/>

      <Route candidato exact path="/c/vagas/details/:id" element={<DetalhesVagas vaga={[]}/>} />

      <Route empresa path="/e/" element={<p>home de empresa</p>}/>
      <Route empresa exact path="/e/perfil" element={<MeuPerfil />}/>
      <Route empresa exact path="/e/vagas" element={<AdicionarVagasComponente />}/>

      <Route empresa exact path="/e/candidatos" element={<CandidatosCadastrados data={[]}/>}/>

      <Route path="/login" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>

      <Route exact path="/" element={<Index />} />
      <Route path="*" element={<p>Página não encontrada - 404</p>} />
    </Routes>
  );
};
