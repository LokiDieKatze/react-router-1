import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/Home'
import Starters from './pages/Starters'
import Dishes from './pages/Dishes'
import Desserts from './pages/Desserts'
import Drinks from './pages/Drinks'
import Wine from './pages/Wine'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/starters" component={Starters}>
            <Starters />
          </Route>
          <Route path="/dishes" component={Dishes}>
            <Dishes />
          </Route>
          <Route path="/desserts" component={Desserts}>
            <Desserts />
          </Route>
          <Route path="/drinks" component={Drinks}>
            <Drinks />
          </Route>
          <Route path="/wine" component={Wine}>
            <Wine />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
