import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ image, name, location, status, species, charId }) => {
  return (
    <div className="card-container">
      <img src={image} alt={name} />

      <div className="card-content">
        <Link className="link" to={`${charId}`}>
          <h2>{name}</h2>
        </Link>

        <div className="status">
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor:
                status === "Alive"
                  ? "green"
                  : status === "Dead"
                  ? "red"
                  : "blue",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          ></div>
          {status} - {species}
        </div>
        <small>Last known location</small>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
