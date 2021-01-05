import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  state = {
    total: 0,
    numberItem: 0
  };

  render() {
    return (
      <div className="cart">
        <ul className="collection with-header">
          <li>商品点数 : {this.props.numberItem}</li>
          <li>
            商品合計 :
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY"
            }).format(this.props.total)}
          </li>

          <li>
            合計(税込) :
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY"
            }).format(this.props.total + (this.props.total * 10) / 100)}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartContent: state.orders.cartContent,
    total: state.orders.total,
    numberItem: state.orders.numberItem
  };
};

export default connect(mapStateToProps)(Cart);

/*
{this.props.cartContent &&
  this.props.cartContent.map(product => {
    return (
      <li className="collection-item" key={product.id}>
        <CartItem product={product} />
      </li>
    );
  })}
*/
