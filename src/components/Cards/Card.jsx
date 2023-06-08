import React from "react";

export const Card = ({ producto }) => {
  return (
    <div className="card col-sm-1 col-md-2 m-2 animate__animated animate__fadeIn">
      <img src={producto.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {producto.nombre} {producto.marca}
        </h5>
        <span className="form-label fw-bold">Disponibilidad: {producto.existencias}</span>
        <p className="card-text">{producto.descripcion}</p>
        <button className="btn btn-primary">Comprar Ahora</button>
      </div>
    </div>
  );
};
