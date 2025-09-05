import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card p-4 m-4 w-[300px] h-[500px] bg-[#f0f0f0] rounded-lg leading-8 hover:bg-gray-400">
      <img
        className="res-logo rounded-lg w-full h-[210px]"
        alt={resData.info.name}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4 className="font-medium">{cuisines.join(", ")}</h4>
      <h4 className="font-medium">{avgRating} stars</h4>
      <h4 className="font-medium">{costForTwo} </h4>
      <h4 className="font-medium">{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component

// input -> RestaurantCard
// output ->  RestaurantCardComponent

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-3.5 p-2  rounded-lg bg-black text-white ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
