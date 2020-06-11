import React from 'react'
import PropTypes from 'prop-types'

const CartProduct = (props) => {
  console.log(props.liked);

  return (
<>
  <div className="row">
    <div className="col-lg-2">
      <div className="emotion">
        <button className="btn btn-primary">
          <i
            onClick={props.productCartDelete}
            data-index={props.dataIndex}
            className="fas fa-times"
          ></i>
        </button>
      </div>
    </div>
    <div className="coll col-lg-3">
      <div className="image">
        <img src={props.cartProduct.img} alt="" />
      </div>
    </div>
    <div className="coll col-lg-3">
      <div className="info">
        <p>{props.cartProduct.brand}</p>
        <p>{props.cartProduct.dimension}</p>
        <p>{props.cartProduct.display}</p>
      </div>
    </div>
    <div className="coll col-lg-2">
      <div className="counter">
        <button type="button" className="btn btn-primary">
          <i
            onClick={props.counterIncrement}
            data-index={props.dataIndex}
            className="fas fa-plus"
          ></i>
        </button>
        <div className="number">{props.cartProduct.sum}</div>
        <button type="button" className="btn btn-primary">
          <i
            onClick={props.counterDecrement}
            data-index={props.dataIndex}
            className="fas fa-minus"
          ></i>
        </button>
      </div>
    </div>
    <div className="coll col-lg-2">
      <div className="price">${props.cartProduct.price}</div>
    </div>
  </div>
</>

  )
}

export default CartProduct
