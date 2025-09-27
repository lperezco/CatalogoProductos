import { useState } from "react";
import type { Producto } from "./types";


interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  const [agregado, setAgregado] = useState(false);
  const [mostrarReseñas, setMostrarReseñas] = useState(false);

  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p><strong>${producto.precio}</strong></p>

      <button
        onClick={() => setAgregado(true)}
        disabled={agregado}
      >
        {agregado ? "Agregado" : "Agregar al Carrito"}
      </button>

      <button onClick={() => setMostrarReseñas(!mostrarReseñas)}>
        {mostrarReseñas ? "Ocultar Reseñas" : "Mostrar Reseñas"}
      </button>

      {mostrarReseñas && (
        <ul>
          {producto.reseñas.length === 0
            ? <li>Sin reseñas aún</li>
            : producto.reseñas.map((r, i) => (
                <li key={i}>
                  <strong>{r.usuario}</strong>: {r.texto} ({r.fecha})
                </li>
              ))}
        </ul>
      )}
    </div>
  );
}
