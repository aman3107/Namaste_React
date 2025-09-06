import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { restaurant, showItems, setShowIndex } = props;
  const { title, itemCards } = restaurant?.card?.card;

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50  shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={setShowIndex}
        >
          <span className="font-bold text-lg">
            {title}({itemCards !== undefined ? itemCards.length : 0})
          </span>
          <span className=" ">⬇️</span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
