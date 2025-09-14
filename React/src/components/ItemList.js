import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import MessageBar from "./MessageBar";
import { useState, useEffect } from "react";
import { addItem, removeItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const [showMessageBar, setShowMessageBar] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let timer;
    if (showMessageBar) {
      timer = setTimeout(() => {
        setShowMessageBar(false);
      }, 1000); // Message disappears after 3 seconds
    }
    return () => clearTimeout(timer); // Cleanup on unmount
  }, [showMessageBar]);

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    // Dispatch an action
    dispatch(removeItem(item));
  };

  return (
    <div className="transition-all duration-500">
      {items !== undefined
        ? items.map((item) => (
            <div
              className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
              key={item.card.info.id}
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span className="font-medium">{item.card.info.name}</span>
                  <span>
                    {"    "}- ₹{" "}
                    {item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4  ">
                <img
                  className=" rounded-lg w-[100px]  h-[100px]"
                  alt={item.card.info.name}
                  src={CDN_URL + item.card.info.imageId}
                />
                <button
                  className="bg-white shadow-lg px-2 rounded-lg hover:bg-black hover:text-white"
                  onClick={() => {
                    handleAddItem(item);
                    setShowMessageBar(true);
                  }}
                >
                  +
                </button>
                <button
                  className="bg-white shadow-lg px-2 mx-9 rounded-lg hover:bg-black hover:text-white"
                  onClick={() => {
                    handleRemoveItem(item);
                  }}
                >
                  -
                </button>
                {showMessageBar && <MessageBar />}
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ItemList;
