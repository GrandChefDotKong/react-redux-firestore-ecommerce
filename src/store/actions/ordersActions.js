import { getFirestore } from "redux-firestore";

export const addOrder = (product, size, number) => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_CART",
      product: product,
      size: size,
      number: number
    });
  };
};

export const deleteOrder = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: "DELETE_CART",
      id: id
    });
  };
};

export const updateQuantity = (id, number) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      id: id,
      number: number
    });
  };
};

export const updateDelivery = (delivery) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_DELIVERY",
      delivery: delivery
    });
  };
};

export const updatePayment = (payment) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_PAYMENT",
      payment: payment
    });
  };
};

export const placeOrder = (order, userId) => {
  return (dispatch, getState) => {
    const date = new Date();
    const fireStore = getFirestore();
    fireStore
      .collection("orders")
      .add({
        ...order,
        user_id: userId,
        date: date
      })
      .then(() => {
        dispatch({ type: "PLACE_ORDER" });
      })
      .catch((err) => {
        dispatch({ type: "PLACE_ORDER_ERROR", err });
      });
  };
};

export const getProductList = (genre, clothes) => {
  return (dispatch, getState) => {
    const fireStore = getFirestore();
    fireStore
      .collection("product")
      .get()
      .where("genre", "==", { genre })
      .where("style", "==", { clothes })
      .then(() => {
        dispatch({ type: "GET_PRODUCTLIST" });
      });
  };
};

export const getOrders = (userId) => {
  return (dispatch, getState) => {
    const fireStore = getFirestore();
    fireStore
      .collection("orders")
      .get()
      .where("user_id", "==", { userId })
      .then(() => {
        dispatch({ type: "GET_ORDERS" });
      });
  };
};
