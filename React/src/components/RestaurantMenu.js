import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo.length === 0) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      c?.card?.card["@type"]?.includes("ItemCategory")
    );

  return itemCards === undefined ? (
    <h1>Menu is not present for this restaurant</h1>
  ) : (
    <div className="menu m-4 p-4">
      <h1 className="font-bold text-3xl pb-3 text-center">{name}</h1>
      <h4 className="font-bold text-xl pb-3">{cuisines.join(", ")}</h4>
      <p className="font-bold pb-3">{costForTwoMessage}</p>
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.categoryId}
          restaurant={category}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
