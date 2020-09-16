import React from 'react';
import { Switch, Route, Link, Switch} from "react-router-dom";
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends List</Link>
      </nav>
      <Switch>
      </Switch>
    </div>
  );
}

export default App;
