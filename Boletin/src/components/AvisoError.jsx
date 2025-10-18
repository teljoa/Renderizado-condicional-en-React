function AvisoError({ hasError }) {
  return <div>{hasError && <p>Ha ocurrido un error</p>}</div>;
}

export default AvisoError;