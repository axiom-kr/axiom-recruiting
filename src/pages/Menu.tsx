import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div id="menu">
      <div className="menu__container">
        <ul className="menu__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/program">Program</Link>
          </li>
          <li>
            <Link to="/recruit">Join us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="logo__container">
        <div id="menu__title">
          <h1 className="title__h1">
            A<em>X</em>IOM
          </h1>
          <span className="title__span">settle for beyond</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
