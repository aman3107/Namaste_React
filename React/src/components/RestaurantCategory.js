import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { restaurant } = props;
  const { title, itemCards } = restaurant?.card?.card;

  return (
    <div>
      <div className="w-8/12 mx-auto my-4 bg-gray-50  shadow-lg p-4">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {title}({itemCards !== undefined ? itemCards.length : 0})
          </span>
          <span className=" ">⬇️</span>
        </div>
        <ItemList items={itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
