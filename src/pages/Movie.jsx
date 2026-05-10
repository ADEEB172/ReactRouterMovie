import { useLoaderData } from "react-router";
import { GetMoviesData } from "../API/GetMoviesData";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <>
    <ul className="container grid grid-four--cols">
      {moviesData.Search.map((curmovie) => {
        return <Card key={curmovie.imdbID} curmovie={curmovie} />;
      })}
    </ul>
    </>
  );
};
