import React from 'react';
import { Switch, Route, Link} from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import AddFriends from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/friends">Friends List</Link></li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={Friends} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
