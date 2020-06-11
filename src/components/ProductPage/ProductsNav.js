import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'


const ProductsNav = (props) => {

  return (
    <>
  <UserContext.Consumer>
    {(context) => (
<ul className={context.state.openNavProducts?'openNav':'closeNav'}>
  <li className="openClose" >
    <input type="checkbox" id="toggle"/>

			<label htmlFor="toggle" className="rows-container" onClick={context.openCloseNav}>
        <div className={context.state.openNavProducts?'hamburgerProductsOpen rows':'rows hamburgerProductsClose'}></div>
  </label>

  </li>
  <li onClick={context.phoneBrandClick}>Alcatel</li>
  <li onClick={context.phoneBrandClick}>Apple</li>
  <li onClick={context.phoneBrandClick}>Blackberry</li>
  <li onClick={context.phoneBrandClick}>Cat</li>
  <li onClick={context.phoneBrandClick}>Coolpad</li>
  <li onClick={context.phoneBrandClick}>HTC</li>
  <li onClick={context.phoneBrandClick}>Huawei</li>
  <li onClick={context.phoneBrandClick}>LG</li>
  <li onClick={context.phoneBrandClick}>Motorola</li>
  <li onClick={context.phoneBrandClick}>Nokia</li>
  <li onClick={context.phoneBrandClick}>Samsung</li>
  <li onClick={context.phoneBrandClick}>Sony</li>
  <li onClick={context.phoneBrandClick}>Wiko</li>

</ul>


    )}
  </UserContext.Consumer>
</>

  )
}

export default ProductsNav
