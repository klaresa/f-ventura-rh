import React, {useEffect, useState} from "react";
import Search from "../Search";
import dataPromise from "../../services/dataPromise";
import Input from "../Input";
import FormCandidato from "../FormCandidato";
import Login from "../../pages/Login";

const Home = () => {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    async function get() {
      const search = await dataPromise('http://localhost:3000/vagas');
      setSearch(search);
    }
    get();
  }, []);

  return (
      // <div>
      //   <Input />
      //   <Search items={search}/>
      //   <FormCandidato />
      // </div>
      <>
        <Login/>
      </>
  );
}

export default Home;
