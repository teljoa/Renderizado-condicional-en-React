import MensajeBienvenida from "./components/MensajeBienvenida";
import EstadoDeCuenta from "./components/EstadoDeCuenta";
import AvisoError from "./components/AvisoError";
import Notificacion from "./components/Notificacion";
import ListaDeTareas from "./components/ListaDeTareas";
import EstadoConexion from "./components/EstadoConexion";
import Articulo from "./components/Articulo";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Renderizado Condicional en React</h1>

      <h2>Ejercicio 1</h2>
      <MensajeBienvenida isLoggedIn={true} />
      <MensajeBienvenida isLoggedIn={false} />

      <h2>Ejercicio 2</h2>
      <EstadoDeCuenta isPositive={true} />
      <EstadoDeCuenta isPositive={false} />

      <h2>Ejercicio 3</h2>
      <AvisoError hasError={true} />
      <AvisoError hasError={false} />

      <h2>Ejercicio 4</h2>
      <Notificacion isCompleted={true} />
      <Notificacion isCompleted={false} />

      <h2>Ejercicio 5</h2>
      <ListaDeTareas />

      <h2>Ejercicio 6</h2>
      <EstadoConexion status="online" />
      <EstadoConexion status="offline" />
      <EstadoConexion status="away" />

      <h2>Ejercicio 7</h2>
      <Articulo isPublished={true} />
      <Articulo isPublished={false} />
    </div>
  );
}

export default App;