import React, {useEffect, useState} from "react";
import fetchData from "../../services/fetchData";

const Result = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData('http://localhost:3000/vagas')
        .then(res => res)
        .then(data => setData(data));
  }, []);

  return (
      <div>
        {data.map((item, index) =>
            <p key={index}>{item.nome}</p>
        )}
      </div>
  );
}

export default Result;
