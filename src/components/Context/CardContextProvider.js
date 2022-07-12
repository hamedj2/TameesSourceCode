import React, { useReducer, createContext } from "react";
import { useAuth } from "../../firebase";

const CardContextProvider = ({ children }) => {
  const currentUser = useAuth();
  const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
  };

  const sumItems = (items) => {
    const itemsCounter = items.reduce(
      (total, product) => total + product.quantity,
      0
    );
    const total = items.reduce(
      (total, product) => total + product.cost * product.quantity,
      0
    );
    return { itemsCounter: itemsCounter, total: total };
  };

  const printItems = (state) => {
    // var listItem = {
    //   name: [],
    //   quantity: [],
    // };
    // state.selectedItems.map(function (item) {
    //   listItem.name.push(item.name);
    //   listItem.quantity.push(item.quantity);
    // });
    // console.log(JSON.stringify(listItem));
    let order = [];
    let listItem = [];
    let listNames = [];
    let listQuantity = [];
    state.selectedItems.map(function (item) {
      listNames.push(item.name);
      listQuantity.push(item.quantity);
    });
    for (let i = 0; i < listNames.length; i++) {
      listItem.push(
        `item ${i + 1}: ` + listNames[i] + " ,Quanity : " + listQuantity[i]
      );
    }
    order.push("Ordered Items: " + listItem);
    order.push(",Total Items: " + state.itemsCounter);
    order.push(",Total Cost: " + state.total);
    order.push(",UserEmail: " + currentUser?.email);
    console.log(order);
  };

  const cardReducer = (state, action) => {
    // console.log(state);
    switch (action.type) {
      case "ADD_ITEM":
        if (
          !state.selectedItems.find((item) => item.id === action.payload.id)
        ) {
          state.selectedItems.push({
            ...action.payload,
            quantity: 1,
            checkout: false,
          });
        }
        return {
          ...state,
          selectedItems: [...state.selectedItems],
          ...sumItems(state.selectedItems),
        };
      case "REMOVE_ITEM":
        const newSelectedItems = state.selectedItems.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          selectedItems: [...newSelectedItems],
          ...sumItems(newSelectedItems),
        };
      case "INCREASE":
        const indexI = state.selectedItems.findIndex(
          (items) => items.id === action.payload.id
        );
        state.selectedItems[indexI].quantity++;
        return {
          ...state,
          ...sumItems(state.selectedItems),
        };
      case "DECREASE":
        const indexD = state.selectedItems.findIndex(
          (items) => items.id === action.payload.id
        );
        state.selectedItems[indexD].quantity--;
        return {
          ...state,
          ...sumItems(state.selectedItems),
        };
      case "CHECKOUT":
        printItems(state);
        return {
          selectedItems: [],
          itemsCounter: 0,
          total: 0,
          checkout: true,
        };
      case "CLEAR":
        return {
          selectedItems: [],
          itemsCounter: 0,
          total: 0,
          checkout: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
export const CardContext = createContext();
export default CardContextProvider;
