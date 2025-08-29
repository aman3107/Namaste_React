import { useEffect, useState } from "react";
import { Menu_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  //fetchData

  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
