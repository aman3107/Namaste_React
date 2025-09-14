import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-green-100">
      <div className="logo-container">
        <img className="logo w-32" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">
              Cart - ({cartItems.length}
              {"  "}
              {cartItems.length > 1 ? "Items" : "Item"})
            </Link>
          </li>

          <li className="px-4 text-xl">
            <button
              className="login px-2 py-1 hover:bg-black hover:text-white hover:border rounded-lg cursor-pointer"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold text-xl">
            {btnName === "Login" ? loggedInUser : "Default User"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
