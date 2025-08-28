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
    console.log("Constructor");
  }

  // API Calls
  async componentDidMount() {
    console.log("Component did mount");

    // useEffect
    const data = await fetch("https://api.github.com/users/aman3107");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // const { name, location, contact } = this.props;
    const { contact } = this.props;

    const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    console.log("Render");
    return (
      <div className="user-card">
        <img src={avatar_url} style={{ height: "200px", width: "200px" }} />
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count > 0 ? this.state.count - 1 : 0,
            });
          }}
        >
          Decrease Count
        </button>
        {/* <h1>Count2: {count2}</h1> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
