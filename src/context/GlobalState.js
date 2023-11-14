import React, { createContext, useReducer } from "react";

//!This is a function from React that creates a context object. Context provides a way to pass data through the component tree without having to pass props manually at every level.
import AppReducer from "./AppReducer";
//initial State
const initialState = {
  transactions: [
    ],
};

// Create Context
export const GlobalContext = createContext(initialState);
//in order for other components to have acces to our store of global state we need a provider

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type :'DELETE_TRANSACTION'
      ,payload:id
    })
  }
  function addTransaction(transaction) {
    dispatch({
      type :'ADD_TRANSACTION'
      ,payload:transaction
    })
  }

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions , deleteTransaction ,addTransaction}}>
      {children}
    </GlobalContext.Provider>
  );
};
