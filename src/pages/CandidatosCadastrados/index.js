import React, { useEffect, useState } from "react";
import ComponenteCandidatos from "../../components/ComponenteCandidatos";
import {getApiData} from "../../services/getApiData";

const CandidatosCadastrados = () => {
  const [search, setSearch] = useState([]);

  const [data, setData] = useState([]);

  async function handleFetch() {
    const data = await getApiData("/candidatos");
    setData(data);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <ComponenteCandidatos data={data} />
  );
};

export default CandidatosCadastrados;
