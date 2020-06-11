import React from 'react'
import PropTypes from 'prop-types'
import ProductsNav from './ProductsNav'
import Product from './Product'

import {UserContext} from '../Context'

const Products = (props) => {
  return (
<>

        <div id="productPage">
  <div id="navigation">
    <ProductsNav />
  </div>
  <div id="productsAll">
    <div className="row">

      <UserContext.Consumer>
        {(context) => (
          <>
{!context.state.phoneBrand && <>  <div className="logo">
     Mobile<span>shop</span>
     <p>the best of mobiles choice</p>
   </div></>}
            {context.state.phoneBrand &&
              context.state.allProducts
                .filter((product) =>
                  product.brand.includes(context.state.phoneBrand)
                )
                .map((filteredBrand,index) => (
                  <>
                  <Product
                    id={filteredBrand.id}
                    phoneCartClick={context.phoneCartClick}
                    brand={filteredBrand}
                    key={filteredBrand.brand}
                  />
                </>
                ))}
          </>
        )}
      </UserContext.Consumer>
    </div>
  </div>
</div>
  </>
  )
}

export default Products
