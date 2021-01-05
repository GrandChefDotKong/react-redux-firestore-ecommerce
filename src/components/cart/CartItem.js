import React from "react";

const CartItem = props => {
  const picturePath = "/img/small/" + props.product.picture;

  return (
    <div className="row">
      <span className="image-cart">
        <img src={picturePath} alt="cloth" />
      </span>
      <span className="title">{props.product.name} </span>
      <span className="grey-text">
        {new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY"
        }).format(props.product.price)}
      </span>
    </div>
  );
};

export default CartItem;
