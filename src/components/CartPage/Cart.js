import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import CartProduct from './CartProduct'

const Cart = (props) => {

  return (
<UserContext.Consumer>
  {
    (context)=>(
<>
  <div id="cart">
    <div className="container">
      {context.state.newListCartPage.length > 0 ? (
        context.state.newListCartPage.map((all, index) => {
          return (
            <CartProduct
              cartProduct={all}
              key={all.id}
              dataIndex={index}
              productCartDelete={context.productCartDelete}
              counterIncrement={context.counterIncrement}
              counterDecrement={context.counterDecrement}
            />
          );
        })
      ) : (
        <div className="logo">
          Mobile
          <span>shop</span>
          <p>the best of mobiles choice</p>
        </div>
      )}
    </div>
  </div>
</>


    )

  }

</UserContext.Consumer>
  )
}

export default Cart
