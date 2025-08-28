import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Construtor About");
  }
  componentDidMount() {
    console.log("Component did mount About");
  }

  componentDidUpdate() {
    console.log("Component Did Update About");
  }

  render() {
    console.log("Render About");
    return (
      <div>
        <h1>About</h1>
        <h2>This is the Namaste React Series</h2>
        <UserClass name={"Aman"} location={"Meerut"} contact={"mittal3107"} />
        {/* <UserClass name={"Aman"} location={"Meerut"} contact={"mittal3107"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is the Namaste React Series</h2>
//       {/* <User name={"Aman Mittal"} location={"Meerut"} contact={"mittal3107"} /> */}
//       <UserClass name={"Aman"} location={"Meerut"} contact={"mittal3107"} />
//     </div>
//   );
// };

export default About;
