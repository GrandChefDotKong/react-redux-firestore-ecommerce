import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import OrderList from "./OrderList";

class OrderHistory extends Component {
  render() {
    const { uid, orders } = this.props;
    if (!uid) return <Redirect to="/" />;
    console.log(uid);
    return (
      <div>
        {orders &&
          orders.map(order => {
            return <OrderList id={order.id} order={order} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    orders: state.firestore.ordered.orders
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: "orders",
      where: [["user_id", "==", props.uid]],
      orderBy: [["date", "desc"]]
    }
  ])
)(OrderHistory);
