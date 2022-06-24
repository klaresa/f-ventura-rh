import React, {useContext, useEffect} from "react";
import {Wrapper, Path, Content} from './styles';
import {Link} from "react-router-dom";
import {AuthContext} from "../../auth/AuthContext";

export const NavBar = () => {
  const { getUserPermission, getUserInfo, handleLogout } = useContext(AuthContext);

  useEffect(() => {

  }, [getUserPermission, getUserInfo])

  const routes = [
    {
      "profile": "",
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
        {"path": "/e/vagas", "description": "+vagas"},
        {"path": "/e/candidatos", "description": "candidatos"},
      ],
    },
  ];

  return (
      <Wrapper>
        <Content>
          { getUserPermission === '' ? (
              <Path>deslogado</Path>
          ) : (
              <Path><a onClick={handleLogout}>sair</a></Path>
          )}
        </Content>
        <Content>
          {routes.map((route, index) => (
              route.paths.map((pat, indPath) => {
                if (getUserPermission === route.profile) {
                  console.log('getuserinfo',getUserInfo.type)
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
