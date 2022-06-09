
const initState = {
  allOrders: [],
  cartContent: [],
  idCompteur: 0,
  total: 0,
  numberItem: 0,
  delivery: "at_conbini",
  payment: "creditCard"
};

const OrdersReducer = (state = initState, action) => {
  let newTotal;
  let newNumberItem;
  switch (action.type) {
    case "ADD_CART":
      let bool = false;

      newTotal = state.total + action.number * action.product.price;
      newNumberItem = state.numberItem + action.number;

      let isAlreadyInCart = state.cartContent.map(item => {
        if (item.name === action.product.name && item.size === action.size) {
          item.number += action.number;
          bool = true;
        }
        return item;
      });
      if (bool) {
        return {
          ...state,
          cartContent: isAlreadyInCart,
          total: newTotal,
          numberItem: newNumberItem
        };
      } else {
        let idCompteur = state.idCompteur;
        let newItem = {
          id: idCompteur,
          name: action.product.name,
          price: action.product.price,
          picture: action.product.picture,
          size: action.size,
          number: action.number
        };
        idCompteur += 1;
        return {
          ...state,
          cartContent: [...state.cartContent, newItem],
          idCompteur: idCompteur,
          total: newTotal,
          numberItem: newNumberItem
        };
      }
    case "GET_PRODUCTLIST":
      return {
        ...state,
        productList: action.productList
      };
    case "DELETE_CART":
      let updatedOrder = state.cartContent.filter(item => {
        if (item.id === action.id) {
          newTotal = state.total - item.number * item.price;
          newNumberItem = state.numberItem - item.number;
        }
        return item.id !== action.id;
      });
      return {
        ...state,
        cartContent: updatedOrder,
        total: newTotal,
        numberItem: newNumberItem
      };
    case "UPDATE_QUANTITY":
      let updatedQuantity = state.cartContent.map(item => {
        if (item.id === action.id) {
          newTotal = state.total + (action.number - item.number) * item.price;
          newNumberItem = state.numberItem + (action.number - item.number);
          item.number = action.number;
        }
        return item;
      });
      return {
        ...state,
        cartContent: updatedQuantity,
        total: newTotal,
        numberItem: newNumberItem
      };
    case "UPDATE_DELIVERY":
      return {
        ...state,
        delivery: action.delivery
      };
    case "UPDATE_PAYMENT":
      return {
        ...state,
        payment: action.payment
      };
    case "PLACE_ORDER":
      let cartContent = [];
      return {
        ...state,
        cartContent: cartContent,
        idCompteur: 0,
        total: 0,
        numberItem: 0
      };
    case "PLACE_ORDER_ERROR":
      console.log("Error : ", action.err);
      return state;
    case "GET_ORDERS":
      console.log("Getting orders");
      return {
        ...state,
        ordres: action.orders
      };
    default:
      return state;
  }
};

export default OrdersReducer;
