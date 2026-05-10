import {useNavigate, NavLink, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  }

  if (error.status === 404) {
    return (
      <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        <NavLink to="/" className="btn ">
          Go Back TO home Page
        </NavLink>
        <button className="btn" onClick={handleGoBack}>Go Back to Previous Page</button>
      </section>
    );
  }
  console.log(error);

  return <h1> The page you are looking does not exist</h1>;
};
