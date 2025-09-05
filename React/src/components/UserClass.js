import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "Dummy",
      },
    };
    // console.log("Constructor");
  }

  // API Calls
  async componentDidMount() {
    // console.log("Component did mount");

    // useEffect
    const data = await fetch("https://api.github.com/users/aman3107");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    // const { name, location, contact } = this.props;
    const { contact } = this.props;

    const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log("Render");
    return (
      <div className="user-card w-[300px] h-[600px] flex-wrap bg-gray-100 p-1 m-1 border border-solid flow-root">
        <img src={avatar_url} className="w-[300px] h-[300px] shadow-xl" />

        <h1 className="pt-3 font-medium">Count: {count}</h1>
        <button
          className="px-2 py-1 m-2  hover:bg-black hover:text-white border rounded-lg"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <button
          className="px-2 py-1 m-2  hover:bg-black hover:text-white border rounded-lg"
          onClick={() => {
            this.setState({
              count: this.state.count > 0 ? this.state.count - 1 : 0,
            });
          }}
        >
          Decrease Count
        </button>
        {/* <h1>Count2: {count2}</h1> */}
        <h2 className="font-medium">Name: {name}</h2>
        <h3 className="font-medium">Location: {location}</h3>
        <h3 className="font-medium">Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
