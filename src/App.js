import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Shop from "./components/item/Shop";
import Navbar from "./components/layout/Navbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ItemDetails from "./components/item/ItemDetails";
import CartMini from "./components/cart/CartMini";
import Validate from "./components/cart/Validate";
import Account from "./components/auth/Account";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/product/:id" component={ItemDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/shop/:genre" component={Shop} />
            <Route path="/cart" component={CartMini} />
            <Route path="/test" component={Validate} />
            <Route path="/mypage" component={Account} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
