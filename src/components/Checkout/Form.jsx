const Form = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
    <div className="contenedor-form">
        <div className="form">
          <p>Por favor, complete todos<br></br>los campos para finalizar la compra.</p>
          <form className="formulario" onSubmit={enviarOrden}>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} required />
              <label htmlFor="telefono">Teléfono</label>
              <input type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} required />
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} required />
              <label htmlFor="confirmarEmail">Confirmar E-mail</label>
              <input type="email" id="confirmarEmail" name="confirmarEmail" value={datosForm.confirmarEmail} onChange={guardarDatosInput} required />
              <button className="btn-enviarOrden">Enviar Orden</button>
          </form>
        </div>
    </div>
  )
}
export default Form