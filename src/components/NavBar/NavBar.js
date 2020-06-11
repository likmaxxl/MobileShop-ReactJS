import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'
import {UserContext} from '../Context'

const NavBar = (props) => {
  return (
    <UserContext.Consumer>
  {
    (context)=>(
<>
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#">
      <i className="fas fa-mobile-alt"></i>
    </a>
    <div className="cartMobile">
      <Link to="/cart">
        <div className="icon">
          <span>
            <i className="fas fa-shopping-cart"></i>
          </span>
        </div>
      </Link>
      <div className="numbOfProd">{context.state.newListCartPage.length}</div>
    </div>
    <div className="navbar-toggler">
      <div className="menuHamburger">
        {" "}
        <i
          onClick={context.openNavMain}
          className={
            !context.state.openNavMain ? "fas fa-bars" : "fas fa-times"
          }
        ></i>{" "}
      </div>
    </div>

    <div
      className={
        context.state.openNavMain
          ? "collapse navbar-collapse collapseOpen"
          : "collapse navbar-collapse collapseClose"
      }
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav mr-auto">
        <Link to="/">
          <li className="nav-item active" onClick={context.openNavMain}>
            Home
          </li>
        </Link>
        <Link to="/products">
          <li className="nav-item active" onClick={context.openNavMain}>
            Products
          </li>
        </Link>
      </ul>

      <ul>
        <Link to={context.state.newListCartPage.length > 0 && "/cart"}>
          <li className="nav-item active">
            <div className="icon">
              <span>
                <i className="fas fa-shopping-cart"></i>
              </span>
            </div>

            <div className="numbOfProd">
              {context.state.newListCartPage.length}
            </div>
          </li>
        </Link>
      </ul>
    </div>
  </nav>
</>

  )
    }
</UserContext.Consumer>
  )
}

export default NavBar
