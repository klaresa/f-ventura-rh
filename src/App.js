import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ResultContainer from "./components/ResultContainer";
import Home from "./components/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Resultado from "./pages/Resultado";
import Vagas from "./pages/Vagas";

// import { ThemeProvider } from "styled-components";

export default function App() {
  return (
      // <ThemeProvider theme={GlobalStyle}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="vagas" element={<ResultContainer/>}/>
              {/*<Route path="cadastro" element={<Form />} />*/}
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/cadastro/all" element={<Resultado/>}/>
            <Route path="/vagas/all" element={<Vagas/>}/>
          </Routes>
        </BrowserRouter>
      // </ThemeProvider>
  );
}
