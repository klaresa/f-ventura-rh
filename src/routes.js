import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";

import Index from "./pages/Index";
import Login from "./pages/Login";
import MeuPerfil from "./pages/Perfil";
import Cadastro from "./pages/Cadastro";
import Home from "./components/Home";

import ComponenteVagas from "./components/ComponenteVagas";
import EmpresasCadastradas from "./pages/EmpresasCadastradas";
import CandidatosCadastrados from "./pages/CandidatosCadastrados";

export const MyRoutes = () => {
  const { getUserPermission } = useContext(AuthContext);

  const candidato = getUserPermission.type === 'candidato';
  const empresa = getUserPermission.type === 'empresa';
  const unauthorized = getUserPermission.type === 'unauthorized';

  return (
      <Routes>
        <Route candidato path="/c/" element={<Home/>} />
        <Route candidato exact path="/c/perfil" element={<MeuPerfil data={[]}/>}/>
        <Route candidato exact path="/c/vagas" element={<ComponenteVagas data={[]}/>} />
        <Route candidato exact path="/c/empresas" element={<EmpresasCadastradas/>}/>

        <Route empresa path="/e/" element={<Home/>}/>
        <Route empresa exact path="/e/perfil" element={<MeuPerfil data={[]}/>}/>
        <Route empresa exact path="/e/candidatos" element={<CandidatosCadastrados data={[]}/>}/>

        {/*LOGIN SOZINHO N VAI CHAMAR A FUNCAO LOGIN PQ ELE RECEBE DO HOME*/}
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>

        <Route exact path="/" element={<Index />} />
        <Route path="*" element={<p>404</p>} />

      </Routes>
  )
}

// export default MyRoutes;
