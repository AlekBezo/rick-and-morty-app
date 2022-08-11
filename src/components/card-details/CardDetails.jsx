import React from "react";
import "./CardDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../constants";
import useFetch from "../../hooks/useFetch";

const CardDetails = () => {
  const { charId } = useParams();

  const navigate = useNavigate();
  const character = useFetch(apiUrl, `character/${charId}`);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="card-details">
      <img className="char-img" src={character?.image} alt="img" />
      <h1>{character?.name}</h1>
      <p>Gender: {character?.gender}</p>
      <p>Origin: {character?.origin?.name}</p>
      <p>
        {character?.name} appears in {character?.episode?.length}{" "}
        {character?.episode?.length === 1 ? "Episode" : "Episodes"}
      </p>
      <button className="back-btn" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default CardDetails;
