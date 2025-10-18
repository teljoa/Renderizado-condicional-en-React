import Tarea from "./Tarea";

function ListaDeTareas() {
  return (
    <ul>
      <Tarea nombre="Aprender React" isDone={true} />
      <Tarea nombre="Hacer ejercicios de JavaScript" isDone={false} />
      <Tarea nombre="Practicar CSS" isDone={false} />
    </ul>
  );
}

export default ListaDeTareas;