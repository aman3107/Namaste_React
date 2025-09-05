import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-green-100">
      <div className="logo-container">
        <img className="logo w-30" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-xl">
            <Link to="/" className="underline-link">
              Home
            </Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/about" className="underline-link">
              About Us
            </Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/contact" className="underline-link">
              Contact Us
            </Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/grocery" className="underline-link">
              Grocery
            </Link>
          </li>
          <li className="px-4 text-xl">Cart</li>
          <li className="px-4 text-xl">
            <button
              className="login px-2 py-1 hover:bg-black hover:text-white border rounded-lg"
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
