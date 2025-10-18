function EstadoConexion({ status }) {
  return (
    <div>
      {status === "online"
        ? "En línea"
        : status === "offline"
        ? "Desconectado"
        : "Ausente"}
    </div>
  );
}

export default EstadoConexion;