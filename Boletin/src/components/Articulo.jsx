function Articulo({ isPublished }) {
  let estado;

  if (isPublished) {
    estado = "Publicado";
  } else {
    estado = "En borrador";
  }

  return <div>{estado}</div>;
}

export default Articulo;