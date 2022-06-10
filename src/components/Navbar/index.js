import React, {useContext} from "react";
import {Wrapper, Path, Content} from './styles';
import {Link} from "react-router-dom";
import {AuthContext} from "../../auth/AuthContext";

export const NavBar = () => {
  const { getUserPermission, handleLogout } = useContext(AuthContext);

  const routes = [
    {
      "profile": "unauthorized",
      "paths": [
        {"path": "/", "description": "index"},
      ],
    },
    {
      "profile": "candidato",
      "paths": [
        {"path": "/c/", "description": "home"},
        {"path": "/c/perfil", "description": "perfil"},
        {"path": "/c/vagas", "description": "vagas"},
        {"path": "/c/empresas", "description": "empresas"},
      ],
    },
    {
      "profile": "empresa",
      "paths": [
        {"path": "/e/", "description": "home"},
        {"path": "/e/perfil", "description": "perfil"},
        {"path": "/e/candidatos", "description": "candidatos"},
      ],
    },
  ];

  return (
      <Wrapper>
        <Content>
          { getUserPermission === 'unauthorized' ? (
              <Path>deslogado</Path>
          ) : (
              <Path><a onClick={handleLogout}>sair</a></Path>
          )}
        </Content>
        <Content>
          {routes.map((route, index) => (
              route.paths.map((pat, indPath) => {
                if (getUserPermission === route.profile) {
                  return (
                      <Path key={`path_${indPath}`}>
                        <Link to={pat.path}>{pat.description}</Link>
                      </Path>
                  )
                }
              })
          ))}
        </Content>
      </Wrapper>
  );
}
