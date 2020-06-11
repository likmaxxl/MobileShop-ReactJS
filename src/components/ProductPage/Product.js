import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import {Link} from 'react-router-dom'
import '../Style/css/style.css'

const Product = (props) => {

  return (

  <>
  <UserContext.Consumer>
  {

    (context)=>(
 <div className="col-lg-4 col-xl-3">
          <div id="product">
          <div className="prod">
            <div className="img">
              <Link to="/singleProductInfo">
          <img onClick={context.singleProductInfoHendler} data-index={props.brand.id} src={props.brand.img} alt={props.brand.brand}/>
              </Link>
             </div>
             <div className="cartAbs" >
             <div type="button" className="cart" data-index={props.brand.id} onClick={props.phoneCartClick}>
                {!props.brand.inCart?<img data-index={props.brand.id} onClick={props.phoneCartClick}  src="images/supermarket.svg"/>:"inCart"}
         </div>
             </div>
              <div className="info">
                <div className="brand">{props.brand.brand}</div>
              <div className="price">${props.brand.price}</div>
              </div>
          </div>
          </div>

          </div>
)


}
</UserContext.Consumer>
  </>
  )
}

export default Product
