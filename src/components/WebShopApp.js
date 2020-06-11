import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar/NavBar'
import HomePage from './HomePage/HomePage'
import Products from './ProductPage/Products'
import Cart from './CartPage/Cart'
import Footer from './Footer/Footer'
import SingleProductInfo from './ProductPage/SingleProductInfo'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

class WebShopApp extends React.Component {
  render () {
  return(
    <>
    <Router>
  <NavBar/>
  <Switch>
  <Route path="/" exact component={HomePage}/>
  <Route path="/products" exact component={Products}/>
  <Route path="/cart" exact component={Cart}/>
<Route path="/singleProductInfo" exact component={SingleProductInfo}/>
  </Switch>
</Router>
  <Footer/>

    </>
  )
  }
}

export default WebShopApp;
