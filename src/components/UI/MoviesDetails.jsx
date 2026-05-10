import { useLoaderData, useNavigate } from "react-router";

export const MovieDetails = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const movieDetail = useLoaderData();
  console.log(movieDetail);

  const {
    Actor,
    Poster,
    Title,
    Type,
    Year,
    Plot,
    Awards,
    imdbRating,
    Runtime,
    BoxOffice,
  } = movieDetail;

  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={Title} />
        </div>
        <div className="ticket-container">
          <div className="ticket-content">
            <h4 className="ticket__movie-title">{Title}</h4>
            <p>{Plot}</p>
            <p className="ticket__movie-slogan">Rating: {imdbRating}</p>
            <p className="ticket__movie-slogan">Actor: {Actor}</p>
            <p className="ticket__current-price">Type: {Type}</p>
            <p className="ticket__current-price">Year: {Year}</p>
            <button className="ticket__buy-btn">Watch Now</button>
            <button className="btn" onClick={handleGoBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
