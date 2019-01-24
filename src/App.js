import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../src/components/Navbar/Navbar';
import ProductList from '../src/components/ProductList/ProductList';
import Cart from '../src/components/Cart/Cart';
import Details from '../src/components/Details/Details';
import Default from '../src/components/Default/Default';
import Modal from '../src/components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
