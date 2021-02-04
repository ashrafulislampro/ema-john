import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventorys/Inventory';
import LogIn from './components/LogIn/LogIn';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Review from './components/Review/Review';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
export const UserContext = createContext({});
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        {/* <h3>Name : {loggedInUser.displayName}</h3>
        <h3>Email : {loggedInUser.email}</h3> */}
       
        <Router>
        <Header></Header>
          <Switch>
            <Route path="/shop">
                <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <PrivateRouter path="/inventory">
              <Inventory/>
            </PrivateRouter>
            <PrivateRouter path="/shipment">
              <Shipment/>
            </PrivateRouter>
            <Route path="/login">
              <LogIn/>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
                <ProductDetail/>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
     </UserContext.Provider>
  );
}

export default App;
