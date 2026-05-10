import { NavLink } from "react-router";
import "./card.css";

export const Card = ({ curmovie }) => {
  return (
    <>
      <li className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <img
              src={curmovie.Poster}
              className="poster"
              alt={curmovie.imdbID}
            />
          </div>
          <div className="ticket-container">
            <div className="ticket-content">
              <NavLink to={`/movie/${curmovie.imdbID}`}>
                <button className="ticket__buy-btn">Watch Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
