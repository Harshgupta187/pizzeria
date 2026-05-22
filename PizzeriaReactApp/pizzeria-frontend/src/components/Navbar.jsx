import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex align-items-center">

        
        <Link className="navbar-brand d-flex align-items-center me-4" to="/">
          <span className="fs-2 me-2">Pizzeria</span>  
          <img
            src={logo}
            alt="logo"
            width="70"
          />
        </Link>

        
        <Link className="nav-link text-white me-3" to="/order-pizza">
          Order Pizza
        </Link>

        <Link className="nav-link text-white" to="/build-pizza">
          Build Ur Pizza
        </Link>

        <Link className="btn btn-warning ms-auto" to="/cart">
          🛒 Shopping Cart
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;