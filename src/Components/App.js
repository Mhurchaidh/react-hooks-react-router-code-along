import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";

function App() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }

  export default App;