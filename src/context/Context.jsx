import React, { createContext, useEffect, useState } from "react";
import { Productos } from "../data/products";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [productos, setProductos] = useState(Productos);

  return (
    <Context.Provider value={{ productos, setProductos }}>
      {children}
    </Context.Provider>
  );
};
