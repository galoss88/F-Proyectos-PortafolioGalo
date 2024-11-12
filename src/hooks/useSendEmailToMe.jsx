import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import {
  ButtonEmailToMe,
  Form,
  Formulario,
  InputsContacto,
  InputSubmit,
  Label,
  Legend,
  TextArea,
  WrapperInputs,
  WrapperTextArea
} from '../Components/Contacto/styles/contacto'

const useSendEmailToMe = (showEmailToMe, setShowEmailToMe) => {
  const emailToMe = () => {
    const form = useRef()
    const [datosEmail, setDatosEmail] = useState({
      user_name: '',
      user_email: '',
      message: ''
    })

    const sendEmail = (e) => {
      e.preventDefault()
      //validar

      //enviar email
      emailjs
        .sendForm(
          'service_atqh2ps',
          'template_w2xdl7f',
          form.current,
          'ZcXlnk61KgGIwbFQS'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )

      //Resetear campos
      setDatosEmail({
        user_name: '',
        user_email: '',
        message: ''
      })
    }
    const onChange = (e) => {
      e.preventDefault()
      setDatosEmail({
        ...datosEmail,
        [e.target.name]: e.target.value
      })
    }
    const { user_name, user_email, message } = datosEmail
    return (
      <Form ref={form} onSubmit={sendEmail}>
        <Legend>Contactame</Legend>
        <Formulario>
          <WrapperInputs>
            <Label>Tu nombre</Label>
            <InputsContacto
              placeholder="Introduzca su nombre"
              type="text"
              name="user_name"
              value={user_name}
              onChange={onChange}></InputsContacto>
          </WrapperInputs>
          <WrapperInputs>
            <Label>Tu email</Label>
            <InputsContacto
              placeholder="Introduzca su email"
              type="email"
              name="user_email"
              onChange={(e) => onChange(e)}
              value={user_email}></InputsContacto>
          </WrapperInputs>
          <WrapperTextArea>
            <Label>Mensaje</Label>
            <TextArea
              rows={'5'}
              name="message"
              placeholder="Escriba su mensaje aqui."
              onChange={onChange}
              value={message}
              required></TextArea>
          </WrapperTextArea>
          <WrapperInputs>
            <InputSubmit type="submit" value="Enviar"></InputSubmit>
          </WrapperInputs>
        </Formulario>
        <ButtonEmailToMe onClick={() => setShowEmailToMe(!showEmailToMe)}>
          Volver a contactos
        </ButtonEmailToMe>
      </Form>
    )
  }
  return [emailToMe]
}

export default useSendEmailToMe
