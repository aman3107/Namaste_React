import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="underline-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="underline-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="underline-link">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
