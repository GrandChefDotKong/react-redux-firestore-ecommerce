import React, { Component } from "react";
import ItemList from "./ItemList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

class ShopTab extends Component {
  render() {
    return (
      <div className="shop">
        <div className="row container">
          <ItemList products={this.props.products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    products: state.firestore.ordered.products,
    genre: ownProps.genre,
    clothes: ownProps.clothes
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "products",
      where: [
        ["genre", "==", props.genre],
        ["style", "==", props.clothes]
      ]
    }
  ])
)(ShopTab);
