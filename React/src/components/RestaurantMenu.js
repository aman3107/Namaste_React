import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { Menu_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_URL + resId);

    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo.length === 0) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <strong>
              {item?.card?.info?.name} - {"Rs."}
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
