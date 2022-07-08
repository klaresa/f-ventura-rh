import React, { useEffect, useState } from "react";
import { getApiData } from "../../services/getApiData";
import ComponenteEmpresas from "../../components/ComponenteEmpresas";

const EmpresasCadastradas = () => {
  const [data, setData] = useState([]);

  async function handleFetch() {
    const data = await getApiData("/empresas");
    setData(data);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <ComponenteEmpresas data={data} />
  );
};

export default EmpresasCadastradas;
