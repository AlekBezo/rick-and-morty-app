import React from "react";
import { apiUrl } from "../../constants";
import useFetch from "../../hooks/useFetch";
import "./Episode.scss";

function Episodes() {
  const episodes = useFetch(apiUrl, `episode/`);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EPISODE</th>
          </tr>
        </thead>
        <tbody>
          {episodes?.results?.map((epi) => (
            <tr key={epi.id}>
              <td>{epi.id}</td>
              <td>{epi.name}</td>
              <td>{epi.episode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Episodes;
