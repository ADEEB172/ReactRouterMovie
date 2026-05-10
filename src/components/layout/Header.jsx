import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className="section-navbar">
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <p>Hello World</p>
          </div>
          <div className="sing_in_up">
            <NavLink to="#">SIGN IN</NavLink>
            <NavLink to="#">SIGN UP</NavLink>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="index">
            <p>MoviesFlix</p>
          </NavLink>
        </div>

        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie" className="nav-link">
                movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
