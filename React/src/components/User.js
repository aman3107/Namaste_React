import { useEffect, useState } from "react";
const User = (props) => {
  const { name, location, contact } = props;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("  https://api.github.com/users/aman3107");

    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
  );
};

export default User;
