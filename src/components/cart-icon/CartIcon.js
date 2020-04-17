import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/actions/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingbag.svg";

import "./CartIcon.scss";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";

const CartIcon = ({ toggleCartHidden, ItemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{ItemCount}</span>
  </div>
);
const mapStateToProps = state => ({
  ItemCount: selectCartItemsCount(state)
});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
