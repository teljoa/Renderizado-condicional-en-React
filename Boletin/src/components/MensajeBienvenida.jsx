function MensajeBienvenida({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Bienvenido de nuevo</h2>;
  } else {
    return <h2>Por favor, inicia sesión</h2>;
  }
}

export default MensajeBienvenida;