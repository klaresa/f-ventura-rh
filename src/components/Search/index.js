import React from "react";

const Search = ({ items }) => {

  return (
      <div>
        {items.map((item, index) =>
            <p key={index}>{item.nome}</p>
        )}
      </div>
  );
}

export default Search;
