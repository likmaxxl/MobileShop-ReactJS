import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { UserContext } from "../Context";

const SingleProductInfo = (props) => {
  return (
    <UserContext.Consumer>
      {(context) => (
        <>
          <div id="singleProduct">
            <div className="container">
              <div className="header">
          
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="image">
                    <Carousel>
                      <div>
                        <img src={context.state.singleProductInfo.img} />
                      </div>
                      <div>
                      {context.state.singleProductInfo.img1&&<img src={context.state.singleProductInfo.img1} />}
                      </div>
                      <div>
                        {context.state.singleProductInfo.img2&&<img src={context.state.singleProductInfo.img2} />}
                      </div>
                    </Carousel>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info">
                    <div className="head">
                      <h2>Model: {context.state.singleProductInfo.brand}</h2>
                      <ul>
                        <li>
                          <span>Price:</span> ${context.state.singleProductInfo.price}
                        </li>
                        <li>
                          <span>Operating System:</span> {context.state.singleProductInfo.operatingSystem}
                        </li>
                        <li>
                          <span>Dimension:</span> {context.state.singleProductInfo.dimension}
                        </li>
                        <li>
                          <span>Display:</span> {context.state.singleProductInfo.display}
                        </li>
                        <li>
                          <span>Front Camera</span>: {context.state.singleProductInfo.frontCam}
                        </li>
                        <li>
                          <span>Back Camera:</span> {context.state.singleProductInfo.backCam}
                        </li>
                        <li>
                          <span>Ram memory:</span> {context.state.singleProductInfo.ramMemory}

                        </li>
                        <li>
                          <span>Intern memory:</span> {context.state.singleProductInfo.internMemory}
                        </li>
                      </ul>
                      <div className="about">
                        <h6>Some info about product:</h6>
                        <p>{context.state.singleProductInfo.info}</p>
                      </div>
                    </div>
                    <div className="btns">
                      <Link to="products">
                        <div class="button_cont" align="center"><a class="back" target="_blank" rel="nofollow noopener">Back to products</a></div>
                      </Link>
                      <div class="button_cont"  align="center"><a class="addTo" onClick={context.phoneCartClick} data-index={context.state.singleProductInfo.id}>{!context.state.singleProductInfo.inCart? <>Add to cart <span><i class="fas fa-shopping-cart"></i></span></>:'inCart'}</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </UserContext.Consumer>
  )
}

export default SingleProductInfo;
