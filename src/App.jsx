import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";     
import { ErrorPage } from "./pages/ErrorPage";
import { MovieDetails } from "./components/UI/MoviesDetails";
import { GetMovieDetails } from "./API/GetMoviesDetails";
import { GetMoviesData } from "./API/GetMoviesData";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/", 
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetMoviesData,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: GetMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
