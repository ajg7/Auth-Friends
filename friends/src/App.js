import React from 'react';
import { Switch, Route, Link} from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/friends">Friends List</Link></li>
        <li><Link to="/friend_form">Add Friends</Link></li>
      </ul>
      <Route>
        <Login />
      </Route>
      <PrivateRoute exact path="/friends" component={Friends} />
      <PrivateRoute exact path="/friend_form" component={AddFriend} />
    </div>
  );
}

export default App;
