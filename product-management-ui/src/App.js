import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProductDetailsComponent from './components/ListProductDetailsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateProductDetailsComponent from './components/CreateProductDetailsComponent';
import UpdateProductDetailsComponent from './components/UpdateProductDetailsComponent';
import ViewProductDetailsComponent from './components/ViewProductDetailsComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListProductDetailsComponent}></Route>
                          <Route path = "/products" component = {ListProductDetailsComponent}></Route>
                          <Route path = "/add-product/:id" component = {CreateProductDetailsComponent}></Route>
                          <Route path = "/view-product/:id" component = {ViewProductDetailsComponent}></Route>
                          <Route path = "/update-product/:id" component = {UpdateProductDetailsComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
