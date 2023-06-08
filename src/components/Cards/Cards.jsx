import React, { useContext, useState } from "react";
import { Card } from "./Card";
import { Context } from "../../context/Context";

export const Cards = () => {
  const { productos } = useContext(Context);
  const [productSeacth, setProductSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setProductSearch(e.target.value);
  };

  const filteredProducts = productos.filter((element) =>
    element.nombre.toLowerCase().includes(productSeacth.toLowerCase())
  );

  return (
    <div className="container">
      <input
        placeholder="Buscar"
        onChange={handleChange}
        className="form-control w-90 justify-content-center d-flex mb-4  animate__animated animate__fadeInDown"
      />
      <div className="row justify-content-center">
        {filteredProducts.map((producto, i) => (
          <Card key={i} producto={producto} />
        ))}
      </div>
    </div>
  );
};
