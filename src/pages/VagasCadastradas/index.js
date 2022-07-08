import React, { useEffect, useState } from "react";
import {getApiData} from "../../services/getApiData";
import ComponenteVagas from "../../components/ComponenteVagas";

const VagasCadastradas = () => {
  const [search, setSearch] = useState([]);

  const [data, setData] = useState([]);

  async function handleFetch() {
    const data = await getApiData("/vagas");
    setData(data);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <ComponenteVagas data={data} />
  );
};

export default VagasCadastradas;
