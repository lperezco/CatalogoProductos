import "./App.css";
import data from "./productos.json";
import ProductoCard from "./ProductoCard";
import type { Producto } from "./types";

function App() {
  return (
    <div className="catalogo">
      {data.map((prod: Producto) => (
        <ProductoCard key={prod.id} producto={prod} />
      ))}
    </div>
  );
}

export default App;
