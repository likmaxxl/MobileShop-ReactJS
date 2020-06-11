import React from "react";
import PropTypes from "prop-types";
import AllProducts from "./AllProducts";
export const UserContext = React.createContext("");

class MyProvider extends React.Component {
  state = {
    phoneBrand: "",
    allProducts: AllProducts,
    newListCartPage: "",
    sum: 1,
    singleProductInfo: "",
    openNavProducts: false,
    openNavMain: false,
  };
  render() {
    return (
      <>
        <UserContext.Provider
          value={{
            state: this.state,

            phoneBrandClick: (e) => {
              //navigation of brands
              const currentEl = e.target.innerText;
              this.setState({
                phoneBrand: currentEl,
              });
            },

            phoneCartClick: (e) => {
              // add items to cart
              const currentProduct = e.target.getAttribute("data-index");
              let newList = [
                ...this.state.newListCartPage,
                this.state.allProducts[currentProduct - 1],
              ];

              const inCartTrue = newList.map((all) => {
                //if inCart innerText inCart
                if (!all.inCart) {
                  return (all.inCart = true);
                }
              });

              let hasDuplicate = newList.some(
                (val, i) => newList.indexOf(val) !== i
              ); //if no duplicates
              if (hasDuplicate) {
                return newList;
              }

              this.setState({
                newListCartPage: newList,
              });
            },
            openNavMain: () => {
              //open-close main navigation mobile
              this.setState({
                openNavMain: !this.state.openNavMain,
              });
            },
            openCloseNav: () => {
              this.setState({
                openNavProducts: !this.state.openNavProducts,
              });
            },
            productCartDelete: (e) => {
              //delete items in cart
              const currentProducts = e.target.getAttribute("data-index");
              let newL = this.state.newListCartPage;
              newL[currentProducts].inCart = false;
              newL.splice(currentProducts, 1);
              this.setState({
                newListCartPage: newL,
              });
            },

            counterIncrement: (e) => {
              //increment items in cart
              const currentProducts = e.target.getAttribute("data-index");
              let newL = this.state.newListCartPage;
              let suma = newL[currentProducts].sum++;
              // newL[currentProducts].sum=suma

              this.setState({
                newListCartPage: newL,
                sum: suma,
              });
            },

            counterDecrement: (e) => {
              //decrement items in cart
              const currentProducts = e.target.getAttribute("data-index");
              let newL = this.state.newListCartPage;
              let suma = newL[currentProducts].sum;

              if (suma > 1) {
                suma = newL[currentProducts].sum--;
              }

              this.setState({
                newListCartPage: newL,
                sum: suma,
              });
            },

            singleProductInfoHendler: (e) => {
              //open single item info
              const currentProducts = e.target.getAttribute("data-index") - 1;
              const singleProd = this.state.allProducts[currentProducts];
              this.setState(
                {
                  singleProductInfo: singleProd,
                },
                () => {
                  console.log(this.state.singleProductInfo);
                }
              );
            },
          }}
        >
          {this.props.children}
        </UserContext.Provider>
      </>
    );
  }
}

export default MyProvider;
