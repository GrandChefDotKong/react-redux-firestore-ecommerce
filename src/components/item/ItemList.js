import React, { Component } from "react";
import ItemSummary from "./ItemSummary";

class ItemList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.products &&
          this.props.products.map(product => {
            return (
              <div className="col s6 m4 l3" key={product.id}>
                <ItemSummary product={product} />
              </div>
            );
          })}
      </div>
    );
  }
}

export default ItemList;
