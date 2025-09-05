import { CDN_URL } from "../utils/constants";
import MessageBar from "./MessageBar";
import { useState, useEffect } from "react";
const ItemList = ({ items }) => {
  const [showMessageBar, setShowMessageBar] = useState(false);

  useEffect(() => {
    let timer;
    if (showMessageBar) {
      timer = setTimeout(() => {
        setShowMessageBar(false);
      }, 1000); // Message disappears after 3 seconds
    }
    return () => clearTimeout(timer); // Cleanup on unmount
  }, [showMessageBar]);

  return (
    <div>
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
              <div className="w-3/12 p-4">
                <img
                  className=" rounded-lg w-full"
                  alt={item.card.info.name}
                  src={CDN_URL + item.card.info.imageId}
                />
                <button
                  className="bg-white shadow-lg px-2 rounded-lg hover:bg-black hover:text-white"
                  onClick={() => setShowMessageBar(true)}
                >
                  {" "}
                  Add +{" "}
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
