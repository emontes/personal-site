import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import '../../css/contact.form.css'



class ContactoForm extends React.Component {

  render() {
    const { handleChange, handleSubmit, state } = this.props
 
    
    return (
      
      <form onSubmit={handleSubmit} className="forma">
        <TextField
          name="email"
          type="email"
          onChange={handleChange}
          defaultValue={state.values.email}
          label="Email"
          required
          className="completo"
          variant="filled"
        />

        <TextField
          name="firstname"
          type="text"
          onChange={handleChange}
          defaultValue={state.values.firstname}
          label="Nombre"
          required
          variant="filled"
        />

        <TextField
          name="lastname"
          type="text"
          onChange={handleChange}
          defaultValue={state.values.lastname}
          label="Apellido"
          required
          variant="filled"
        />
        <TextField
          name="phone"
          type="text"
          onChange={handleChange}
          defaultValue={state.values.phone}
          label="Teléfono"
          variant="filled"
        />
        <TextField
          name="mobilephone"
          type="text"
          onChange={handleChange}
          defaultValue={state.values.mobilephone}
          label="Celular"
          required
          variant="filled"
        />
        <TextField
          name="country"
          type="text"
          onChange={handleChange}
          defaultValue={state.values.country}
          label="País"
          variant="filled"
          className="completo"
        />
        <TextField
          name="state"
          type="text"
          onChange={handleChange}
          defaultValue={state.values.state}
          label="Estado"
          variant="filled"
        />
        <TextField
          name="city"
          type="text"
          onChange={handleChange}
          defaultValue={state.values.city}
          label="Ciudad"
          variant="filled"
        />
        
        <TextField
          name="comment"
          type="textarea"
          multiline
          className="completo"
          rows="3"
          onChange={handleChange}
          defaultValue={state.values.comment}
          label="¿En qué puedo ayudarle?"
          variant="filled"

        />
        <Button
          type="submit"
          disabled={state.fueEnviado || state.estaEnviando}
          variant="outlined"
          size="large"
          color="primary"
          className = "completo"
        >
            {
                state.fueEnviado
                  ? "Gracias por contactarme."
                  : state.estaEnviando
                      ? "Enviando....."
                      : "Enviar"
            }
        </Button>


      </form>
      
    )
  }
}
export default ContactoForm
