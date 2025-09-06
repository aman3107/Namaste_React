import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  // State Variable, hooks
  const [listOfRestuarants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are Offline!.Please check your internet connection</h1>;
  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="search-box border rounded-md p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4  hover:bg-black hover:text-white border rounded-lg"
            onClick={() => {
              // filter the restaurant cards and update the UI
              const filteredRes = listOfRestuarants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              filteredRes.length !== 0
                ? setFilteredRestaurant(filteredRes)
                : setFilteredRestaurant(listOfRestuarants);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4">
          <button
            className="filter-btn px-4 py-2 m-4 hover:bg-black hover:text-white   border rounded-lg"
            onClick={() => {
              // filter logic here, hooks
              const filteredList = filteredRestaurant.filter(
                (resObj) => resObj.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="search p-4 m-4">
          <label>User Name: </label>
          <input
            type="text"
            className="search-box border border-black rounded-md p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((resObj) => (
          <Link
            to={"/restaurants/" + resObj.info.id}
            key={resObj.info.id}
            className="underline-link"
          >
            {resObj?.info?.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={resObj} />
            ) : (
              <RestaurantCard resData={resObj} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
