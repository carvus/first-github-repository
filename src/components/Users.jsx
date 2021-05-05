import react from "react";
import { url } from "../providers/constants";
import { request } from "../providers/lib";

class Users extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    try {
      const users = await request(url + "users", "get");
      this.setState({ users });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return this.state.users.map((user, i) => <p key={i}>{user.name}</p>);
  }
}

export default Users;
