import { Link } from "react-router-dom";

const Menu = () => {
  return <div>
    <Link to="/">HOME</Link><br/>
    <Link to="/program">PROGRAM</Link><br/>
    <Link to="/about">ABOUT</Link><br/>
    <Link to="/recruit">JOIN US</Link><br/>
    <Link to="/contact">CONTACT</Link>
  </div>;
};

export default Menu;
