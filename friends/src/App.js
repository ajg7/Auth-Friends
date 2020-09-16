import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/friends">Friends List</Link></li>
          <li><Link to="/friend_form">Add Friends</Link></li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route path="/friend_form" component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
