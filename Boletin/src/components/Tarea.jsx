function Tarea({ nombre, isDone }) {
  if (isDone) return null;
  return <li>{nombre}</li>;
}

export default Tarea;