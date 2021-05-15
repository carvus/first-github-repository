import react from "react";
import { url } from "../providers/constants";
import { request } from "../providers/lib";
import Loading from './Loading';

class Users extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoaded: false
    };
  }
  async componentDidMount() {
    try {
      const users = await request(url + "users", "get");
      this.setState({ users , isLoaded: true});
    }
    catch(err){
        console.log(err)
    }
  }
  render() {
    return (
      <div>
        {this.state.isLoaded ? this.state.users.map((user, i) => <p key={i}>{user.name}</p>) : <Loading/>}
      </div>
    );
  }
}

export default Users;
