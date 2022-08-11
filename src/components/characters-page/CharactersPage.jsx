import "./CharactersPage.scss";
import React, { useEffect, useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import ErrorComponent from "../error-component/ErrorComponent";
import Footer from "../footer/Footer";
import Search from "../search/Search";
import { apiUrl } from "../../constants";

const CharactersPage = () => {
  const [query, setQuery] = useState("");
  const [search, SetSearch] = useState("");

  const inputRef = useRef(null);
  const characters = useFetch(apiUrl, `character/?name=${search}`);

  useEffect(() => {
    inputRef.current.focus();
  }, [search]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    SetSearch(query);
    setQuery("");
  }

  return (
    <div>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        query={query}
      />
      <div className="cards-container">
        {characters?.results === undefined && <ErrorComponent />}
        {characters?.results !== undefined &&
          characters?.results?.map((character) => {
            return (
              <Card
                image={character.image}
                name={character.name}
                status={character.status}
                location={character.location.name}
                species={character.species}
                key={character.id}
                charId={character.id}
              />
            );
          })}
      </div>
      {characters?.info === undefined ? (
        ""
      ) : (
        <Footer
          count={characters?.info?.count}
          pages={characters?.info?.pages}
        />
      )}
    </div>
  );
};

export default CharactersPage;
